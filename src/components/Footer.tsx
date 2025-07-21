import React from 'react';
import { MessageCircle, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5512997902911?text=Olá! Gostaria de conhecer o Mr.CRM', '_blank');
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/public/logo-mrcrm.png" 
                alt="Mr.CRM" 
                className="h-10 w-auto mr-3"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'block';
                }}
              />
              <div className="hidden text-2xl font-bold">
                Mr.<span className="text-[#FF914D]">CRM</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              CRM e CMS personalizável para qualquer negócio. 
              Desenvolvido pela Mr.Goose com tecnologia e alma.
            </p>
            
            {/* WhatsApp CTA */}
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center bg-[#FF914D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e8823d] transition-colors duration-200 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
            </button>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-[#FF914D] transition-colors duration-200"
                >
                  Sobre o Mr.CRM
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('funcionalidades')}
                  className="text-gray-400 hover:text-[#FF914D] transition-colors duration-200"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('casos-de-uso')}
                  className="text-gray-400 hover:text-[#FF914D] transition-colors duration-200"
                >
                  Casos de sucesso
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-[#FF914D] transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#FF914D] mr-3" />
                <a 
                  href="mailto:contato@mrgoose.com.br"
                  className="text-gray-400 hover:text-[#FF914D] transition-colors duration-200"
                >
                  contato@mrgoose.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#FF914D] mr-3" />
                <a 
                  href="tel:+5512997902911"
                  className="text-gray-400 hover:text-[#FF914D] transition-colors duration-200"
                >
                  +55 (12) 997.902.911
                </a>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 text-[#FF914D] mr-3 mt-0.5" />
                <div>
                  <div className="text-gray-400 mb-2">WhatsApp</div>
                  <button 
                    onClick={openWhatsApp}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                  >
                    Falar no WhatsApp
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-[#FF914D] transition-colors duration-200 group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-[#FF914D] transition-colors duration-200 group"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Receba novidades e dicas sobre gestão digital
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-[#FF914D]"
                />
                <button className="bg-[#FF914D] px-4 py-2 rounded-r-lg hover:bg-[#e8823d] transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Mr.Goose. Desenvolvido com tecnologia e alma.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#FF914D] text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF914D] text-sm transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;