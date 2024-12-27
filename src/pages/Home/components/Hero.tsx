import React from "react";
import { Link } from "react-router-dom";
import { Satellite } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="./media/bck1.mp4"
        autoPlay
        loop
        muted
      />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Satellite className="h-12 w-12 text-beige-300" />
            <h1 className="text-4xl md:text-5xl font-bold">STARLINKER</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8">
            Professional Starlink Installation & Configuration Services
          </p>
          <Link
            to="/book"
            className="inline-block bg-beige-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-beige-400 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
