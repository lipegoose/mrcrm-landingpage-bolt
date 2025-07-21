import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/public/logo-mrcrm.png" 
              alt="Mr.CRM" 
              className="h-8 w-auto"
              onError={(e) => {
                // Fallback se a imagem não carregar
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.style.display = 'block';
              }}
            />
            <div className="hidden text-2xl font-bold text-gray-900">
              Mr.<span className="text-[#FF914D]">CRM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#FF914D] transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="text-gray-700 hover:text-[#FF914D] transition-colors duration-200 font-medium"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('casos-de-uso')}
              className="text-gray-700 hover:text-[#FF914D] transition-colors duration-200 font-medium"
            >
              Casos de Uso
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#FF914D] transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contato')}
            className="hidden md:inline-flex bg-[#FF914D] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e8823d] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Quero o Mr.CRM
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#FF914D] hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#FF914D] hover:bg-gray-50 rounded-md font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#FF914D] hover:bg-gray-50 rounded-md font-medium"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection('casos-de-uso')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#FF914D] hover:bg-gray-50 rounded-md font-medium"
              >
                Casos de Uso
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#FF914D] hover:bg-gray-50 rounded-md font-medium"
              >
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full mt-4 bg-[#FF914D] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e8823d] transition-colors duration-200"
              >
                Quero o Mr.CRM
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;