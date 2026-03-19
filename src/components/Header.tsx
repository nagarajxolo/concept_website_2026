import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-4 border-cyan-500 opacity-60"></div>
                <div className="w-10 h-10 rounded-full border-4 border-yellow-400 opacity-60 absolute -translate-x-2"></div>
                <div className="w-10 h-10 rounded-full border-4 border-green-500 opacity-60 absolute translate-x-2"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CONCEPT ENGINEERING</h1>
              <p className="text-xs text-gray-600">ISO 9001:2015 Certified</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Milestones', 'Clients', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {['Home', 'About', 'Services', 'Milestones', 'Clients', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
