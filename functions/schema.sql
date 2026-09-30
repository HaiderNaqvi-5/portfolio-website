CREATE TABLE IF NOT EXISTS contact_submissions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending_delivery', 'delivered', 'delivery_failed'))
);

CREATE INDEX IF NOT EXISTS contact_submissions_retention_idx ON contact_submissions (created_at);
