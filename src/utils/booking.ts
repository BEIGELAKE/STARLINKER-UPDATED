import { supabase } from '../lib/supabase';
import type { Booking } from '../types';
import { validateEmail, validatePhoneNumber, validateDate } from './validation';

interface BookingValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof Booking, string>>;
}

export function validateBookingData(data: Partial<Booking>): BookingValidationResult {
  const errors: Partial<Record<keyof Booking, string>> = {};

  if (!data.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!data.address?.trim()) {
    errors.address = 'Address is required';
  }

  if (!data.phoneNumber || !validatePhoneNumber(data.phoneNumber)) {
    errors.phoneNumber = 'Valid phone number is required';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email is required';
  }

  if (!data.preferredDate || !validateDate(data.preferredDate)) {
    errors.preferredDate = 'Valid future date (excluding Sundays) is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateBookingCode(): string {
  return `BK${Date.now().toString(36).toUpperCase()}`;
}

export async function createBooking(bookingData: Omit<Booking, 'id' | 'status' | 'createdAt' | 'feedback'>): Promise<{ data: Booking | null; error: Error | null }> {
  try {
    const validation = validateBookingData(bookingData);
    if (!validation.isValid) {
      const errorMessage = Object.values(validation.errors).join(', ');
      throw new Error(`Invalid booking data: ${errorMessage}`);
    }

    const { data, error: supabaseError } = await supabase
      .from('bookings')
      .insert([{
        ...bookingData,
        status: 'Pending'
      }])
      .select()
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      throw new Error(supabaseError.message || 'Failed to create booking');
    }

    if (!data) {
      throw new Error('No data returned from booking creation');
    }

    return { data, error: null };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error('Booking creation error:', errorMessage);
    return { data: null, error: new Error(errorMessage) };
  }
}

export async function getBookingByCode(bookingCode: string): Promise<{ data: Booking | null; error: Error | null }> {
  try {
    if (!bookingCode?.trim()) {
      throw new Error('Booking code is required');
    }

    const { data, error: supabaseError } = await supabase
      .from('bookings')
      .select('*')
      .eq('bookingCode', bookingCode)
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      throw new Error(supabaseError.message || 'Failed to retrieve booking');
    }

    return { data, error: null };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error('Booking retrieval error:', errorMessage);
    return { data: null, error: new Error(errorMessage) };
  }
}