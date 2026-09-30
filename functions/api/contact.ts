interface Env {
  TURNSTILE_SECRET_KEY: string;
  EMAIL_API_KEY: string;
  EMAIL_FROM: string;
  EMAIL_TO: string;
  CONTACT_DB: D1Database;
  CONTACT_RATE_LIMIT: KVNamespace;
}

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  consent?: boolean;
  company?: string;
  turnstileToken?: string;
}

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const normalise = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function verifyTurnstile(token: string, ip: string, secret: string) {
  const form = new FormData();
  form.set('secret', secret);
  form.set('response', token);
  form.set('remoteip', ip);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const result = await response.json<{ success?: boolean }>();
  return response.ok && result.success === true;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json<ContactPayload>();
  } catch {
    return json({ error: 'Send the contact form as JSON.' }, 400);
  }

  const name = normalise(payload.name);
  const email = normalise(payload.email).toLowerCase();
  const message = normalise(payload.message);
  const honeypot = normalise(payload.company);
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

  if (honeypot) return json({ ok: true });
  if (!payload.consent) return json({ error: 'Please agree to the privacy notice before sending.' }, 400);
  if (name.length < 2 || name.length > 100) return json({ error: 'Please enter a name between 2 and 100 characters.' }, 400);
  if (!validEmail(email) || email.length > 254) return json({ error: 'That email does not look complete — check for a typo.' }, 400);
  if (message.length < 10 || message.length > 5000) return json({ error: 'Please enter a message between 10 and 5,000 characters.' }, 400);

  const rateKey = `contact:${ip}`;
  const used = Number(await env.CONTACT_RATE_LIMIT.get(rateKey) || '0');
  if (used >= 5) return json({ error: "You've sent several messages — please try again in an hour." }, 429);
  await env.CONTACT_RATE_LIMIT.put(rateKey, String(used + 1), { expirationTtl: 3600 });

  if (!payload.turnstileToken || !(await verifyTurnstile(payload.turnstileToken, ip, env.TURNSTILE_SECRET_KEY))) {
    return json({ error: 'The spam check could not be confirmed. Please try again.' }, 400);
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  await env.CONTACT_DB.prepare(
    'INSERT INTO contact_submissions (id, name, email, message, created_at, status) VALUES (?, ?, ?, ?, ?, ?)',
  ).bind(id, name, email, message, createdAt, 'pending_delivery').run();

  const delivery = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.EMAIL_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.EMAIL_FROM,
      to: [env.EMAIL_TO],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!delivery.ok) {
    await env.CONTACT_DB.prepare('UPDATE contact_submissions SET status = ? WHERE id = ?').bind('delivery_failed', id).run();
    return json({ error: 'Your message was saved, but delivery could not be completed. Please use the direct email link instead.' }, 503);
  }

  await env.CONTACT_DB.prepare('UPDATE contact_submissions SET status = ? WHERE id = ?').bind('delivered', id).run();
  return json({ ok: true, message: 'Message sent. Thanks — I’ll get back to you soon.' });
};
