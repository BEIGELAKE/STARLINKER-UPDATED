import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Newsletter } from './components/Newsletter';

export function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Newsletter />
    </div>
  );
}