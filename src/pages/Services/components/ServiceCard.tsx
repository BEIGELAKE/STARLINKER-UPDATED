import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export function ServiceCard({ title, price, description, features }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-3xl font-bold text-beige-300 mb-4">{price}</div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="h-2 w-2 bg-beige-300 rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/book"
        className="block text-center bg-beige-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-beige-400 transition-colors"
      >
        Book Now
      </Link>
    </div>
  );
}