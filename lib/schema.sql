-- Create signups table for Birth & Brodo

CREATE TABLE IF NOT EXISTS signups (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  signup_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  ip_address VARCHAR(45)
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email ON signups(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_created_at ON signups(created_at DESC);
