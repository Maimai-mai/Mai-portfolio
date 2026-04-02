import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesChess } from './components/FeaturesChess';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('UI设计');
  
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Partners onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <FeaturesChess category={selectedCategory} />
        <FeaturesGrid />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
