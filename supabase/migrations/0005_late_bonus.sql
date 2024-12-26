/*
  # Add Accepted status to bookings

  1. Changes
    - Add 'Accepted' as a valid status for bookings
    - Update existing status check constraint
*/

DO $$ 
BEGIN
  ALTER TABLE bookings
    DROP CONSTRAINT IF EXISTS bookings_status_check;
    
  ALTER TABLE bookings
    ADD CONSTRAINT bookings_status_check 
    CHECK (status IN ('Pending', 'Accepted', 'Completed'));
END $$;