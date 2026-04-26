"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import type { MouseEvent } from "react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  const whatsappLink = "https://wa.me/5511977196686?text=Oi!%20Vi%20o%20anuncio%20e%20quero%20marcar%20uma%20consulta.";

  const trackWhatsAppClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") {
      return;
    }

    event.preventDefault();

    const trackedWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    trackedWindow.dataLayer = trackedWindow.dataLayer || [];
    let hasNavigated = false;
    const navigateToWhatsApp = () => {
      if (hasNavigated) {
        return;
      }

      hasNavigated = true;
      window.location.href = whatsappLink;
    };

    trackedWindow.dataLayer.push({
      event: "whatsapp_click",
      destination: "whatsapp",
      contact_method: "whatsapp",
      eventCallback: navigateToWhatsApp,
      eventTimeout: 2000,
    });

    window.setTimeout(navigateToWhatsApp, 300);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Componente de botão padronizado
  const ActionButton = ({ text = "Agendar pelo WhatsApp", isHeader = false }: { text?: string, isHeader?: boolean }) => (
    <a
      href={whatsappLink}
      className={`inline-flex items-center justify-center gap-3 bg-[#2AD1A9] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(42,209,169,0.25)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(42,209,169,0.45)] hover:bg-[#4DE0BE] ${
        isHeader ? "px-6 py-2.5 text-sm" : "px-8 py-4 text-lg"
      }`}
      onClick={trackWhatsAppClick}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <WhatsAppIcon className={isHeader ? "w-5 h-5" : "w-6 h-6"} />
      </motion.div>
      <span className={isHeader ? "hidden sm:inline" : ""}>{text}</span>
    </a>
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-slate-900 tracking-tight">
            Dra. <span className="text-[#2AD1A9] font-medium">Martha Nardy</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-semibold text-slate-600 hover:text-[#2AD1A9] transition-colors">Sobre</a>
            <a href="#servicos" className="text-sm font-semibold text-slate-600 hover:text-[#2AD1A9] transition-colors">Serviços</a>
            <a href="#depoimentos" className="text-sm font-semibold text-slate-600 hover:text-[#2AD1A9] transition-colors">Depoimentos</a>
          </nav>

          <ActionButton text="Agendar" isHeader={true} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#fafaf9] pt-[140px] pb-[100px] mt-[57px] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-white border border-[#2AD1A9] text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#2AD1A9] rounded-full inline-block"></span>
                Cirurgiã-Dentista | Endodontista
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold mb-2 text-slate-900">
                Dra. <span className="text-[#2AD1A9] font-normal">Martha Nardy</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-slate-500">
                Com mais de 30 anos de experiência e especialização em Endodontia pela USP Bauru, ofereço um atendimento odontológico de excelência em São Paulo. Meu compromisso é unir um cuidado humanizado à precisão técnica, preservando a sua saúde bucal e respeitando a história de cada sorriso.
                <br /><br />
                <span className="text-[17px] md:text-[19px] text-slate-900 font-medium block">
                  Atendimento exclusivo particular. Não trabalhamos com convênios.
                </span>
              </p>
              
              <ActionButton />

              <div className="flex gap-10 mt-10 pt-8 border-t border-slate-200">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-slate-900 leading-none">30+</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Anos de Experiência</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-slate-900 leading-none">USP</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Especialização</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#2AD1A9] rounded-lg z-0"></div>
              <img
                src="https://marthanardy.com.br/_assets/media/fde1c4171d0941f466a82108e88c558a.jpg"
                alt="Dra. Martha Nardy - Consultório odontológico"
                className="w-full rounded-lg shadow-xl relative z-10 block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-[100px] bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#2AD1A9] rounded-lg z-0"></div>
              <img
                src="https://marthanardy.com.br/_assets/media/6b8dc258ee1cfac4c83c88a9578ed192.jpg"
                alt="Dra. Martha Nardy"
                className="w-full rounded-lg shadow-xl relative z-10 block"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h3 className="text-3xl font-semibold text-slate-900 mb-2">Prazer, sou a Dra. Martha Nardy</h3>
              <div className="text-[#2AD1A9] font-medium text-[0.95rem] mb-5 uppercase tracking-wider">Clínico Geral e Endodontista</div>
              <p className="mb-4 text-slate-500 leading-relaxed">
                Minha trajetória na odontologia começou há mais de três décadas, sempre com o 
                objetivo de oferecer o melhor tratamento aos meus pacientes. A especialização 
                em Endodontia pela USP Bauru me permitiu aprofundar meus conhecimentos em 
                tratamento de canal, utilizando técnicas modernas e minimamente invasivas.
              </p>
              <p className="mb-4 text-slate-500 leading-relaxed">
                Atendo em São Paulo com dedicação total, priorizando um atendimento humanizado 
                onde cada paciente é ouvido e tratado de forma individualizada. Acredito que 
                a saúde bucal vai muito além dos dentes — ela impacta a qualidade de vida 
                como um todo.
              </p>
              <div className="inline-block bg-[#fafaf9] text-slate-900 px-4 py-1.5 rounded-full text-sm font-semibold mt-2 border border-slate-200">
                CRO-SP 63451
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-[100px] bg-[#fafaf9] border-y border-slate-200 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-2">Quais serviços eu realizo?</h2>
            <p className="text-slate-500 text-lg">Atendimento personalizado em diversas áreas da odontologia</p>
            <div className="w-12 h-1 bg-[#2AD1A9] mx-auto mt-4 rounded-full"></div>
          </div>
          <motion.div 
            className="grid md:grid-cols-3 sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '🦷', title: 'Especialista em Endodontia', desc: 'Tratamento de canal com técnicas modernas e minimamente invasivas para preservar seu dente natural.' },
              { icon: '🩺', title: 'Atuação em Periodontia', desc: 'Cuidado com gengivas e prevenção de doenças periodontais para uma saúde bucal completa.' },
              { icon: '😁', title: 'Atuação em Saúde Bucal', desc: 'Diagnóstico e prevenção para um sorriso saudável e livre de problemas.' },
              { icon: '✨', title: 'Atuação em Dentística', desc: 'Foco na preservação dos dentes naturais, realizando intervenções apenas quando necessário.' },
              { icon: '🎯', title: 'Prótese Dentária', desc: 'Total, parcial fixa ou removível. Soluções personalizadas para quem precisa de reabilitação oral.' },
              { icon: '💎', title: 'Clareamento Dentário', desc: 'Técnicas seguras para dentes mais claros sem comprometer a estrutura dentária.' }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white p-8 rounded-lg transition-all border border-slate-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#4DE0BE]">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-slate-900 mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-[100px] bg-white scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-2">O que os meus clientes dizem</h2>
            <p className="text-slate-500 text-lg">Depoimentos reais do Google</p>
            <div className="w-12 h-1 bg-[#2AD1A9] mx-auto mt-4 rounded-full"></div>
          </div>
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { text: "Saúde bucal é um assunto importante. Sou paciente da Dra. Martha há mais de 12 anos. É uma excelente profissional, com preços muito justos.", author: "Katia Orberg" },
              { text: "Sou paciente da Dra Martha desde 2006. Ela é uma profissional muito competente e está se atualizando constantemente. Habilidosa e perfeccionista, seu trabalho é impecável e de alta qualidade. No campo pessoal é simpática e comunicativa, sempre de bom humor.", author: "Roberto Baptista" },
              { text: "A Dra. Martha é exceptional! Todo mundo em casa só passa com ela, é de muita confiança, cuidado e sempre realiza o necessário para a higiene da minha boca. Recomendo mil vezes.", author: "Camila Gregório" }
            ].map((testi, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-[#fafaf9] p-8 rounded-lg border border-slate-200 relative pt-10">
                <div className="absolute top-0 left-8 w-12 h-1 bg-[#2AD1A9] rounded-b-sm"></div>
                <p className="italic mb-5 text-slate-700 leading-relaxed">"{testi.text}"</p>
                <div className="font-semibold text-slate-900">{testi.author}</div>
                <div className="text-sm text-slate-500 mt-1">Depoimento do Google</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-[100px] text-center">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="text-4xl font-semibold mb-3">Cuide do seu sorriso!</h2>
            <p className="text-lg mb-8 text-white/70 max-w-2xl mx-auto">Agende sua consulta e faça sua avaliação. Atendimento humanizado e de qualidade.</p>
            <ActionButton />
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-[100px] bg-[#fafaf9] border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-2">Contato & Agendamento</h2>
            <p className="text-slate-500 text-lg">Entre em contato e agende sua avaliação</p>
            <div className="w-12 h-1 bg-[#2AD1A9] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 text-center rounded-lg border border-slate-200 flex flex-col items-center">
              <WhatsAppIcon className="w-8 h-8 text-[#2AD1A9] mb-4" />
              <h3 className="text-slate-900 mb-2 text-sm uppercase tracking-wider font-semibold">WhatsApp</h3>
              <a href={whatsappLink} className="text-slate-900 font-medium hover:text-[#2AD1A9]">
                +55 11 97719-6686
              </a>
            </div>
            <div className="bg-white p-6 text-center rounded-lg border border-slate-200 flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#2AD1A9] mb-4" />
              <h3 className="text-slate-900 mb-2 text-sm uppercase tracking-wider font-semibold">Endereço</h3>
              <p className="text-slate-500 leading-relaxed">Rua Antônio Gil, 942, sobreloja<br />Jardim Alzira, São Paulo – SP</p>
            </div>
            <div className="bg-white p-6 text-center rounded-lg border border-slate-200 flex flex-col items-center">
              <Clock className="w-8 h-8 text-[#2AD1A9] mb-4" />
              <h3 className="text-slate-900 mb-2 text-sm uppercase tracking-wider font-semibold">Horário</h3>
              <p className="text-slate-500 leading-relaxed">Segunda a Sexta<br />09:00h às 18:00h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white/60 text-center py-8 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-sm">Dra. Martha Nardy - CRO-SP 63451 | Todos os direitos reservados</p>
          <p className="text-xs mt-2">Atendimento particular - Não trabalhamos com convênios</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        className="fixed bottom-6 right-6 bg-[#2AD1A9] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(42,209,169,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(42,209,169,0.5)] z-50"
        title="Fale conosco pelo WhatsApp"
        onClick={trackWhatsAppClick}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <WhatsAppIcon className="w-8 h-8" />
        </motion.div>
      </a>
    </main>
  );
}
