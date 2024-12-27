import React from 'react';
import type { Booking } from '../../../types';

interface BookingDetailsProps {
  booking: Booking;
}

export function BookingDetails({ booking }: BookingDetailsProps) {
  return (
    <>
      <h6 className="text-orange-500 font-medium mb-4">
        Please copy and store your Booking Code
      </h6>
      <div className="bg-gray-900 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Booking Information</h3>
            <div className="space-y-3">
              <p>
                <span className="text-gray-400">Booking Code:</span> {booking.bookingCode}
              </p>
              <p>
                <span className="text-gray-400">Status:</span> {booking.status}
              </p>
              <p>
                <span className="text-gray-400">Service Type:</span> {booking.serviceType}
              </p>
              <p>
                <span className="text-gray-400">Date:</span> {new Date(booking.preferredDate).toLocaleDateString()}
              </p>
              <p>
                <span className="text-gray-400">Time:</span> {booking.timeOfDay}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Details</h3>
            <div className="space-y-3">
              <p>
                <span className="text-gray-400">Name:</span> {booking.fullName}
              </p>
              <p>
                <span className="text-gray-400">Email:</span> {booking.email}
              </p>
              <p>
                <span className="text-gray-400">Phone:</span> {booking.phoneNumber}
              </p>
              <p>
                <span className="text-gray-400">Address:</span> {booking.address}
              </p>
            </div>
          </div>
        </div>

        {booking.feedback && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Feedback</h3>
            <p className="text-gray-300">{booking.feedback}</p>
          </div>
        )}
      </div>
    </>
  );
}
