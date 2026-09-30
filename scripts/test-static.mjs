import { readFile } from 'node:fs/promises';
import { strict as assert } from 'node:assert';

const index = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const sitemap = await readFile(new URL('../dist/sitemap-index.xml', import.meta.url), 'utf8');
const robots = await readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8');

assert.match(index, /<main id="main-content">/, 'Homepage must expose a main landmark.');
assert.match(index, /Skip to content/, 'Homepage must include a keyboard skip link.');
assert.match(index, /href="\/privacy\/"/, 'Homepage must link to the privacy notice.');
assert.match(index, /mailto:haidernaqvi7989@gmail\.com/, 'Homepage must expose the approved direct-email fallback.');
assert.match(index, /og:image/, 'Homepage must expose an Open Graph image.');
assert.match(sitemap, /sitemap/, 'A sitemap must be generated.');
assert.match(robots, /Sitemap:/, 'robots.txt must reference the sitemap.');

console.log('Static production checks passed.');
