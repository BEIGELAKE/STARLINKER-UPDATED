/*
  # Fix column names to match TypeScript types

  1. Changes
    - Rename columns to match camelCase naming in TypeScript
    - Add NOT NULL constraints where missing
    - Add proper CHECK constraints for enums

  2. Security
    - Existing RLS policies remain unchanged
*/

-- Rename columns to match TypeScript types
ALTER TABLE bookings 
  RENAME COLUMN full_name TO "fullName";

ALTER TABLE bookings 
  RENAME COLUMN phone_number TO "phoneNumber";

ALTER TABLE bookings 
  RENAME COLUMN preferred_date TO "preferredDate";

ALTER TABLE bookings 
  RENAME COLUMN time_of_day TO "timeOfDay";

ALTER TABLE bookings 
  RENAME COLUMN service_type TO "serviceType";

ALTER TABLE bookings 
  RENAME COLUMN created_at TO "createdAt";

-- Update constraints
ALTER TABLE bookings
  ALTER COLUMN "timeOfDay" SET NOT NULL,
  ALTER COLUMN "serviceType" SET NOT NULL,
  DROP CONSTRAINT IF EXISTS bookings_time_of_day_check,
  DROP CONSTRAINT IF EXISTS bookings_service_type_check,
  ADD CONSTRAINT bookings_time_of_day_check 
    CHECK ("timeOfDay" IN ('Morning', 'Afternoon')),
  ADD CONSTRAINT bookings_service_type_check 
    CHECK ("serviceType" IN ('Full Installation', 'Configuration'));