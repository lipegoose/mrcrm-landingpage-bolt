import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5512997902911?text=Olá! Gostaria de conhecer o Mr.CRM', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF914D]/20 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF914D]/10 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FF914D]/5 rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para transformar sua{' '}
            <span className="text-[#FF914D]">gestão digital</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vamos entender sua operação e criar o Mr.CRM perfeito para você. 
            Nossa equipe está pronta para desenvolver a solução ideal para seu negócio.
          </p>
        </div>

        {/* Main CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center bg-[#FF914D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e8823d] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            Fale com nosso time
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 group"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Chamar no WhatsApp
          </button>
        </div>

        {/* Trust indicators */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center text-gray-300 text-lg">
            <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
            Sem compromisso
            <span className="mx-4">•</span>
            <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
            Consultoria inicial gratuita
          </div>
        </div>

        {/* Value propositions */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-[#FF914D]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🚀</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Implementação Rápida</h3>
            <p className="text-gray-300">
              Desenvolvimento ágil com entregas incrementais para você ver resultados rapidamente.
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-[#FF914D]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🎯</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Foco no seu Negócio</h3>
            <p className="text-gray-300">
              Cada funcionalidade é pensada especificamente para otimizar seus processos.
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-[#FF914D]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">💡</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inovação Contínua</h3>
            <p className="text-gray-300">
              Atualizações e melhorias constantes baseadas no feedback dos usuários.
            </p>
          </div>
        </div>

        {/* Final message */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Junte-se a mais de <span className="text-[#FF914D] font-semibold">100 empresas</span> que já transformaram 
            sua gestão com o Mr.CRM
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;