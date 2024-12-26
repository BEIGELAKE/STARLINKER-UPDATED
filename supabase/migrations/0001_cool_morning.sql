/*
  # Initial Schema Setup for STARLINKER

  1. New Tables
    - `bookings`: Stores customer booking information
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `address` (text)
      - `phone_number` (text)
      - `email` (text)
      - `preferred_date` (date)
      - `time_of_day` (text)
      - `status` (text)
      - `service_type` (text)
      - `booking_code` (text)
      - `feedback` (text)
      - `created_at` (timestamp)
    
    - `email_subscriptions`: Stores newsletter subscriptions
      - `id` (uuid, primary key)
      - `email` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  address text NOT NULL,
  phone_number text NOT NULL,
  email text NOT NULL,
  preferred_date date NOT NULL,
  time_of_day text NOT NULL CHECK (time_of_day IN ('Morning', 'Afternoon')),
  status text NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Completed')),
  service_type text NOT NULL CHECK (service_type IN ('Full Installation', 'Configuration')),
  booking_code text NOT NULL UNIQUE,
  feedback text,
  created_at timestamptz DEFAULT now()
);

-- Email subscriptions table
CREATE TABLE IF NOT EXISTS email_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policies for bookings
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can read their own bookings"
  ON bookings FOR SELECT
  TO public
  USING (email = auth.email());

CREATE POLICY "Admin can read all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

CREATE POLICY "Admin can update bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (auth.role() = 'admin');

-- Policies for email subscriptions
CREATE POLICY "Anyone can subscribe"
  ON email_subscriptions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Admin can read subscriptions"
  ON email_subscriptions FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');