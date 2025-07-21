import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      role: 'Diretora Comercial',
      company: 'Imobiliária Horizonte',
      sector: 'Imobiliário',
      content: 'O Mr.CRM revolucionou nossa gestão de leads. Conseguimos personalizar os campos para capturar exatamente as informações que precisamos de cada cliente. Nossa conversão aumentou 40% em 6 meses.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Roberto Mendes',
      role: 'CEO',
      company: 'Digital Marketing Pro',
      sector: 'Marketing Digital',
      content: 'A flexibilidade do sistema é impressionante. Conseguimos adaptar completamente às nossas necessidades e ainda usar o CMS para gerenciar os sites dos nossos clientes. Tudo integrado!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Dra. Mariana Costa',
      role: 'Coordenadora',
      company: 'Clínica Bem Estar',
      sector: 'Saúde',
      content: 'Finalmente encontramos um sistema que se adapta ao nosso fluxo de trabalho, não o contrário. O suporte é excepcional e as customizações atendem perfeitamente nossas necessidades específicas.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Empresas de diferentes setores já confiam no Mr.CRM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como organizações de diversos segmentos estão transformando 
            sua gestão digital com nossa solução personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-[#FF914D] rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-[#FF914D] font-medium">
                    {testimonial.company} • {testimonial.sector}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#FF914D]">100+</div>
              <div className="text-sm text-gray-600">Empresas atendidas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#FF914D]">98%</div>
              <div className="text-sm text-gray-600">Satisfação dos clientes</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#FF914D]">24h</div>
              <div className="text-sm text-gray-600">Suporte médio</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#FF914D]">5 anos</div>
              <div className="text-sm text-gray-600">No mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;