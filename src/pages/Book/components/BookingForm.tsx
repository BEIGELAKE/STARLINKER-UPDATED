import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../components/ui/Input';
import { TextArea } from '../../../components/ui/TextArea';
import { Select } from '../../../components/ui/Select';
import { Button } from '../../../components/ui/Button';
import { createBooking, generateBookingCode } from '../../../utils/booking';
import type { Booking } from '../../../types';

const timeSlots = [
  { value: 'Morning', label: 'Morning' },
  { value: 'Afternoon', label: 'Afternoon' }
];

const serviceTypes = [
  { value: 'Full Installation', label: 'Full Installation' },
  { value: 'Configuration', label: 'Configuration' }
];

export function BookingForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Booking, string>>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const bookingCode = generateBookingCode();

    try {
      const { data, error } = await createBooking({
        fullName: formData.get('fullName') as string,
        address: formData.get('address') as string,
        phoneNumber: formData.get('phoneNumber') as string,
        email: formData.get('email') as string,
        preferredDate: formData.get('preferredDate') as string,
        timeOfDay: formData.get('timeOfDay') as 'Morning' | 'Afternoon',
        serviceType: formData.get('serviceType') as 'Full Installation' | 'Configuration',
        bookingCode,
      });

      if (error) throw error;
      navigate(`/track?code=${bookingCode}`);
    } catch (err) {
      const error = err as Error;
      console.error('Booking error:', error);
      if (error.message.includes('Invalid booking data:')) {
        // Handle validation errors
        const validationErrors = error.message
          .replace('Invalid booking data: ', '')
          .split(', ')
          .reduce((acc, curr) => {
            const [field, message] = curr.split(' is ');
            return { ...acc, [field.toLowerCase()]: `${field} is ${message}` };
          }, {});
        setErrors(validationErrors);
      } else {
        setErrors({ 
          email: 'Failed to create booking. Please try again.' 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Get tomorrow's date for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <Input
        id="fullName"
        name="fullName"
        label="Full Name"
        required
        error={errors.fullName}
      />

      <TextArea
        id="address"
        name="address"
        label="Address"
        required
        rows={3}
        error={errors.address}
      />

      <Input
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        required
        error={errors.phoneNumber}
      />

      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        error={errors.email}
      />

      <Input
        id="preferredDate"
        name="preferredDate"
        label="Preferred Date"
        type="date"
        required
        min={minDate}
        error={errors.preferredDate}
      />

      <Select
        id="timeOfDay"
        name="timeOfDay"
        label="Time of Day"
        options={timeSlots}
        required
        error={errors.timeOfDay}
      />

      <Select
        id="serviceType"
        name="serviceType"
        label="Service Type"
        options={serviceTypes}
        required
        error={errors.serviceType}
      />

      <Button
        type="submit"
        isLoading={loading}
        className="w-full"
      >
        Book Now
      </Button>
    </form>
  );
}