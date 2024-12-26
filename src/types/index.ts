export interface Booking {
  id: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  preferredDate: string;
  timeOfDay: 'Morning' | 'Afternoon';
  status: 'Pending' | 'Completed';
  serviceType: 'Full Installation' | 'Configuration';
  bookingCode: string;
  createdAt: string;
  feedback?: string;
}

export interface EmailSubscription {
  id: string;
  email: string;
  createdAt: string;
}