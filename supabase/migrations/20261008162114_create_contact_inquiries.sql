/*
# Create contact_inquiries table

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `first_name` (text, not null)
  - `last_name` (text, not null)
  - `phone` (text)
  - `email` (text, not null)
  - `preferred_contact` (text) — phone or email preference
  - `support_type` (text) — type of care requested
  - `preferred_start_date` (text)
  - `message` (text)
  - `created_at` (timestamptz)

2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated to INSERT (public contact form, no auth).
- No SELECT/UPDATE/DELETE for anon — admin only reads via service role.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text,
  email text NOT NULL,
  preferred_contact text,
  support_type text,
  preferred_start_date text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries" ON contact_inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_inquiries" ON contact_inquiries;
CREATE POLICY "anon_select_inquiries" ON contact_inquiries FOR SELECT
TO anon, authenticated USING (false);

DROP POLICY IF EXISTS "anon_update_inquiries" ON contact_inquiries;
CREATE POLICY "anon_update_inquiries" ON contact_inquiries FOR UPDATE
TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_inquiries" ON contact_inquiries;
CREATE POLICY "anon_delete_inquiries" ON contact_inquiries FOR DELETE
TO anon, authenticated USING (false);
