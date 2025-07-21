import React from 'react';
import { FolderOpen, BarChart3, Edit3, Zap, Smartphone, Settings } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: FolderOpen,
      title: 'Cadastros totalmente personalizáveis',
      description: 'Crie formulários e campos customizados para qualquer tipo de informação que sua empresa precisa gerenciar.'
    },
    {
      icon: BarChart3,
      title: 'Dashboard com métricas inteligentes',
      description: 'Visualize dados importantes em tempo real com gráficos e relatórios que fazem sentido para seu negócio.'
    },
    {
      icon: Edit3,
      title: 'Editor de conteúdo para sites e blogs',
      description: 'Publique e gerencie conteúdo digital com um editor intuitivo e recursos profissionais de CMS.'
    },
    {
      icon: Zap,
      title: 'Integrações via API REST',
      description: 'Conecte com outras ferramentas e sistemas através de nossa API completa e documentada.'
    },
    {
      icon: Smartphone,
      title: 'Interface responsiva e mobile-first',
      description: 'Acesse e gerencie tudo pelo celular, tablet ou desktop com a mesma experiência fluida.'
    },
    {
      icon: Settings,
      title: 'Customização visual por cliente',
      description: 'Adapte cores, layout e funcionalidades para refletir a identidade visual da sua empresa.'
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para evoluir sua operação digital
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma completa que cresce junto com seu negócio, 
            oferecendo flexibilidade total para suas necessidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-[#FF914D] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#FF914D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF914D] transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-[#FF914D] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF914D] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center bg-[#FF914D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e8823d] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Conhecer todas as funcionalidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;