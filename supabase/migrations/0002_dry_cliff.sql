/*
  # Fix booking code column name

  1. Changes
    - Rename booking_code column to bookingCode in bookings table to match TypeScript types
  
  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE bookings 
RENAME COLUMN booking_code TO "bookingCode";