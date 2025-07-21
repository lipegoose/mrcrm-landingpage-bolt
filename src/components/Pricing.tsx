import { Check, ArrowRight, Users, Zap, Shield, Headphones } from 'lucide-react';

const Pricing = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Análise gratuita das necessidades',
      description: 'Consultoria inicial sem custo para entender seu negócio'
    },
    {
      icon: Zap,
      title: 'Desenvolvimento customizado',
      description: 'Sistema desenvolvido especificamente para suas necessidades'
    },
    {
      icon: Shield,
      title: 'Treinamento da equipe incluso',
      description: 'Capacitação completa para sua equipe usar o sistema'
    },
    {
      icon: Headphones,
      title: 'Suporte técnico dedicado',
      description: 'Atendimento especializado sempre que precisar'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solução sob medida para cada realidade
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O Mr.CRM é desenvolvido de forma personalizada para atender as necessidades 
            específicas de cada cliente. Não trabalhamos com planos fixos - criamos a 
            solução ideal para o seu negócio.
          </p>
        </div>

        {/* Main value proposition */}
        <div className="bg-gradient-to-br from-[#FF914D] to-orange-500 rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Por que escolher desenvolvimento personalizado?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>100% adaptado:</strong> Cada funcionalidade é pensada para seu fluxo de trabalho específico
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Escalabilidade:</strong> O sistema cresce junto com sua empresa, sem limitações
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Integração total:</strong> Conecta perfeitamente com seus sistemas existentes
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Suporte dedicado:</strong> Equipe especializada que conhece seu negócio
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-6xl font-bold mb-4">∞</div>
                  <div className="text-xl font-semibold mb-2">Possibilidades ilimitadas</div>
                  <div className="text-white/90">
                    Não há limites para o que podemos criar juntos
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#FF914D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF914D] transition-colors duration-300">
                  <IconComponent className="h-10 w-10 text-[#FF914D] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process steps */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Como funciona nosso processo
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análise inicial',
                description: 'Entendemos seu negócio e necessidades específicas'
              },
              {
                step: '02',
                title: 'Proposta personalizada',
                description: 'Criamos uma solução sob medida com cronograma e investimento'
              },
              {
                step: '03',
                title: 'Desenvolvimento',
                description: 'Construímos o sistema com acompanhamento constante'
              },
              {
                step: '04',
                title: 'Entrega e suporte',
                description: 'Treinamento da equipe e suporte contínuo'
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-[#FF914D] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-[#FF914D] mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center bg-[#FF914D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e8823d] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            Solicite sua proposta personalizada
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-gray-600 mt-4">
            Consultoria inicial gratuita • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;