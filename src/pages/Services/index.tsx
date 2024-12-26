import React from 'react';
import { ServiceCard } from './components/ServiceCard';

const services = [
  {
    title: 'Full Installation',
    price: '₦50,000',
    description: 'Complete Starlink setup and installation service',
    features: [
      'Professional equipment mounting',
      'Cable management',
      'Network configuration',
      'Signal optimization',
      'Post-installation testing'
    ]
  },
  {
    title: 'Configuration',
    price: '₦20,000',
    description: 'Expert configuration of your Starlink system',
    features: [
      'Network setup',
      'WiFi optimization',
      'Device connection',
      'Speed testing',
      'Basic troubleshooting'
    ]
  },
  {
    title: 'Purchase',
    price: 'Contact Us',
    description: 'Get assistance with purchasing Starlink equipment',
    features: [
      'Purchase consultation',
      'Equipment recommendations',
      'Order assistance',
      'Delivery coordination',
      'Setup guidance'
    ]
  }
];

export function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Professional Starlink installation and configuration services to get you connected to high-speed satellite internet
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}