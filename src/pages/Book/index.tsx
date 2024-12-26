import React from 'react';
import { BookingForm } from './components/BookingForm';

export function Book() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Book a Service</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Fill out the form below to schedule your Starlink installation or configuration service
        </p>
        <BookingForm />
      </div>
    </div>
  );
}