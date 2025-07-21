import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Users, Edit, BarChart } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      title: 'Dashboard Principal',
      description: 'Visão geral completa com métricas importantes e acesso rápido às principais funcionalidades.',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Gestão de Clientes',
      description: 'Interface intuitiva para cadastro e gerenciamento completo de clientes e leads.',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Editor de Conteúdo',
      description: 'Editor profissional para criação e publicação de conteúdo com recursos avançados.',
      icon: Edit,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Relatórios e Analytics',
      description: 'Relatórios detalhados e análises em tempo real para tomada de decisões estratégicas.',
      icon: BarChart,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Veja o sistema em ação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore as principais telas e funcionalidades do Mr.CRM através 
            de uma interface moderna e intuitiva.
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser mockup header */}
            <div className="bg-gray-800 px-6 py-4 flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-gray-700 rounded-md px-4 py-1 text-sm text-gray-300">
                app.mrcrm.com.br
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative h-96 lg:h-[500px]">
              <img 
                src={screenshots[currentSlide].image}
                alt={screenshots[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-4">
                  {React.createElement(screenshots[currentSlide].icon, {
                    className: "h-8 w-8 text-[#FF914D] mr-3"
                  })}
                  <h3 className="text-2xl font-bold">
                    {screenshots[currentSlide].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-200 max-w-2xl">
                  {screenshots[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          {screenshots.map((screenshot, index) => {
            const IconComponent = screenshot.icon;
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`p-4 rounded-xl transition-all duration-200 ${
                  currentSlide === index 
                    ? 'bg-[#FF914D] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="h-6 w-6" />
              </button>
            );
          })}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {screenshots.map((screenshot, index) => {
            const IconComponent = screenshot.icon;
            return (
              <div 
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                  currentSlide === index 
                    ? 'border-[#FF914D] bg-[#FF914D]/5' 
                    : 'border-gray-200 hover:border-[#FF914D]/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <IconComponent className={`h-8 w-8 mb-3 ${
                  currentSlide === index ? 'text-[#FF914D]' : 'text-gray-600'
                }`} />
                <h4 className="font-semibold text-gray-900 mb-2">
                  {screenshot.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {screenshot.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;