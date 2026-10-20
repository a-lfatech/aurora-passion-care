/*
# Automatic retention for website contact enquiries

1. Purpose
- Enforces the retention period stated in the Privacy Policy: website enquiry records
  older than 24 months are permanently deleted.

2. Changes
- Enables the `pg_cron` extension (job scheduler).
- Adds function `public.purge_old_contact_inquiries()` that deletes rows from
  `contact_inquiries` whose `created_at` is older than 24 months.
- Schedules a daily job (03:15 UTC) named `purge-old-contact-inquiries`.

3. Security
- Function is SECURITY DEFINER with a fixed search_path and EXECUTE is revoked from
  public, anon and authenticated, so only the scheduler can run it.
- No changes to RLS on `contact_inquiries`.

4. Notes
- Only rows older than 24 months are affected; recent enquiries are untouched.
*/

CREATE EXTENSION IF NOT EXISTS pg_cron;

CREATE OR REPLACE FUNCTION public.purge_old_contact_inquiries()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.contact_inquiries
  WHERE created_at < now() - interval '24 months';
$$;

REVOKE ALL ON FUNCTION public.purge_old_contact_inquiries() FROM PUBLIC, anon, authenticated;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'purge-old-contact-inquiries') THEN
    PERFORM cron.unschedule('purge-old-contact-inquiries');
  END IF;
  PERFORM cron.schedule('purge-old-contact-inquiries', '15 3 * * *', 'SELECT public.purge_old_contact_inquiries();');
END $$;
