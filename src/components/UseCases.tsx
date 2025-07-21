import React from 'react';
import { Users, TrendingUp, FileText, Package, Headphones, Globe } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: 'Gestão de vendas e relacionamento',
      description: 'Controle completo do pipeline de vendas, histórico de interações e acompanhamento de oportunidades.',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Controle de leads e funis comerciais',
      description: 'Capture, qualifique e converta leads com automações inteligentes e funis personalizados.',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Publicação de conteúdo institucional',
      description: 'Crie e publique conteúdo para sites, blogs e portais com editor profissional e SEO otimizado.',
      color: 'bg-purple-500'
    },
    {
      icon: Package,
      title: 'Gerenciamento de portfólio de produtos',
      description: 'Organize catálogos, controle estoque e gerencie informações detalhadas de produtos e serviços.',
      color: 'bg-orange-500'
    },
    {
      icon: Headphones,
      title: 'Atendimento e suporte ao cliente',
      description: 'Centralize tickets, acompanhe SLA e mantenha histórico completo de atendimentos.',
      color: 'bg-red-500'
    },
    {
      icon: Globe,
      title: 'Administração de sites corporativos',
      description: 'Gerencie múltiplos sites, páginas e conteúdos digitais a partir de uma única plataforma.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="casos-de-uso" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexível para qualquer segmento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Mr.CRM se adapta perfeitamente às necessidades específicas do seu negócio, 
            independente do setor ou tamanho da empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${useCase.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF914D] transition-colors duration-300">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Industry examples */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Setores que já utilizam o Mr.CRM
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Imobiliário',
              'Marketing',
              'Saúde',
              'Educação',
              'Consultoria',
              'E-commerce'
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-[#FF914D]/10 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-[#FF914D] transition-colors duration-300">
                  <div className="w-6 h-6 bg-[#FF914D] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#FF914D] transition-colors duration-300">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;