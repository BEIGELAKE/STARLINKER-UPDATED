import React from 'react';
import { Wifi, Shield, Clock, Settings } from 'lucide-react';

const features = [
  {
    icon: Wifi,
    title: 'Expert Installation',
    description: 'Professional setup of your Starlink equipment for optimal performance'
  },
  {
    icon: Shield,
    title: 'Reliable Service',
    description: 'Guaranteed quality and after-installation support'
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Efficient installation process with minimal downtime'
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Complete system configuration and network optimization'
  }
];

export function Features() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <feature.icon className="h-12 w-12 mx-auto mb-4 text-beige-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}