import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TrackingForm() {
  const [bookingCode, setBookingCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/track?code=${bookingCode}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-4">
        <input
          type="text"
          value={bookingCode}
          onChange={(e) => setBookingCode(e.target.value)}
          placeholder="Enter your booking code"
          className="flex-grow px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-beige-300"
          required
        />
        <button
          type="submit"
          className="bg-beige-300 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-beige-400 transition-colors"
        >
          Track
        </button>
      </div>
    </form>
  );
}