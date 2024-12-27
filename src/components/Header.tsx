import React from 'react';
import { Satellite, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="logo1.jpeg" alt="Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold">STARLINKER</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-beige-300">Home</Link>
            <Link to="/services" className="hover:text-beige-300">Services</Link>
            <Link to="/book" className="hover:text-beige-300">Book Now</Link>
            <Link to="/track" className="hover:text-beige-300">Track Booking</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-beige-300">Home</Link>
            <Link to="/services" className="block hover:text-beige-300">Services</Link>
            <Link to="/book" className="block hover:text-beige-300">Book Now</Link>
            <Link to="/track" className="block hover:text-beige-300">Track Booking</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
