import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                CRM e CMS no mesmo lugar.{' '}
                <span className="text-[#FF914D]">Funcional, simples</span> e do seu jeito.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Gerencie clientes, leads e conteúdos digitais com uma única solução 
                100% personalizável para qualquer negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center justify-center bg-[#FF914D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e8823d] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Agende uma demonstração gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#FF914D] hover:text-[#FF914D] transition-all duration-200 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver demonstração
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">100%</span> Personalizável
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">API</span> Completa
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">Suporte</span> Dedicado
              </div>
            </div>
          </div>

          {/* Visual/Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                {/* Header mockup */}
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-500">Mr.CRM Dashboard</div>
                </div>
                
                {/* Dashboard mockup */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-900 rounded w-32"></div>
                    <div className="h-6 bg-[#FF914D] rounded w-24"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-blue-600">247</div>
                    </div>
                    <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-green-600">89%</div>
                    </div>
                    <div className="h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-purple-600">R$ 45k</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  
                  <div className="h-32 bg-gradient-to-r from-[#FF914D] to-orange-400 rounded-lg opacity-20"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF914D] rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce">
              CRM
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
              CMS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;