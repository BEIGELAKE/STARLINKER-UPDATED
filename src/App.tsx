import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Book } from './pages/Book';
import { Track } from './pages/Track';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800 text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/track" element={<Track />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;