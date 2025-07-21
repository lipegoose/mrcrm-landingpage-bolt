import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    segment: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const segments = [
    'Imobiliário',
    'Marketing',
    'Saúde',
    'Educação',
    'Consultoria',
    'E-commerce',
    'Outro'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui seria a integração real com o backend
      console.log('Dados do formulário:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        segment: '',
        description: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5512997902911?text=Olá! Gostaria de conhecer o Mr.CRM', '_blank');
  };

  const isFormValid = formData.name && formData.email && formData.whatsapp;

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato para 
              entender suas necessidades e criar uma proposta personalizada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914D] focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail profissional *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914D] focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914D] focus:border-transparent transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914D] focus:border-transparent transition-colors"
                      placeholder="Sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="segment" className="block text-sm font-medium text-gray-700 mb-2">
                    Segmento de atuação
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914D] focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione um segmento</option>
                    {segments.map((segment) => (
                      <option key={segment} value={segment}>
                        {segment}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Descreva sua necessidade
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914D] focus:border-transparent transition-colors resize-none"
                    placeholder="Conte-nos sobre seus desafios atuais e o que espera de um sistema de gestão..."
                  />
                </div>

                {/* Submit buttons */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-[#FF914D] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#e8823d] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar solicitação
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full border-2 border-[#FF914D] text-[#FF914D] px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#FF914D] hover:text-white transition-all duration-200 flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </button>
                </div>
              </form>

              {/* Success/Error messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-700">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">
                    Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
                  </span>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Outras formas de contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#FF914D]/10 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="h-6 w-6 text-[#FF914D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <p className="text-gray-600 mb-2">+55 (12) 997.902.911</p>
                      <button 
                        onClick={openWhatsApp}
                        className="text-[#FF914D] hover:text-[#e8823d] font-medium"
                      >
                        Falar no WhatsApp →
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#FF914D]/10 rounded-lg flex items-center justify-center mr-4">
                      <Send className="h-6 w-6 text-[#FF914D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                      <p className="text-gray-600">contato@mrgoose.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF914D] to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Resposta em até 24 horas
                </h3>
                <p className="text-white/90 mb-6">
                  Nossa equipe está sempre pronta para atender você. Garantimos resposta 
                  rápida e atendimento personalizado para cada projeto.
                </p>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Consultoria gratuita
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;