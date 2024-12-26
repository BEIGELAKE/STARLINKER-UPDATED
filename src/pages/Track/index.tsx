import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TrackingForm } from './components/TrackingForm';
import { BookingDetails } from './components/BookingDetails';
import { getBookingByCode } from '../../utils/booking';
import type { Booking } from '../../types';

export function Track() {
  const [searchParams] = useSearchParams();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const bookingCode = searchParams.get('code');

  useEffect(() => {
    async function fetchBooking() {
      if (!bookingCode) return;
      
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await getBookingByCode(bookingCode);
        if (error) throw error;
        setBooking(data);
      } catch (err) {
        setError('Booking not found. Please check your booking code.');
      } finally {
        setLoading(false);
      }
    }

    fetchBooking();
  }, [bookingCode]);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Track Your Booking</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Enter your booking code to check the status of your service request
        </p>

        {!bookingCode && <TrackingForm />}

        {loading && (
          <div className="text-center">Loading...</div>
        )}

        {error && (
          <div className="text-red-400 text-center">{error}</div>
        )}

        {booking && <BookingDetails booking={booking} />}
      </div>
    </div>
  );
}