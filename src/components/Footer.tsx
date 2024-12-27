import React from 'react';
import { Mail, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:starlinker.com@gmail.com" className="flex items-center space-x-2 hover:text-beige-300">
                <Mail className="h-5 w-5" />
                <span>starlinker.com@gmail.com</span>
              </a>
              <p>123 Starlinker Avenue, Space City, Earth</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="hover:text-beige-300">About Us</a>
              <a href="/services" className="hover:text-beige-300">Services</a>
              <a href="/careers" className="hover:text-beige-300">Careers</a>
              <a href="/contact" className="hover:text-beige-300">Contact</a>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/starlinker_com?utm_source=qr&igsh=NG1iZnI2cWQxbG1z" className="hover:text-beige-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/STARLINKER_COM?t=9Udd9WMBA6qraMItY1gsxg&s=09" className="hover:text-beige-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
                />
                <button type="submit" className="px-4 py-2 bg-beige-300 text-gray-900 rounded hover:bg-beige-400">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} STARLINKER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
