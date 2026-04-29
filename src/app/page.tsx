"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Sparkles, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import type { MouseEvent } from "react";
import { DentistToolsIcon, ToothIcon, TeethIcon } from "@/components/CustomIcons";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  const whatsappLink = "https://wa.me/5511977196686?text=Oi!%20Vi%20o%20anuncio%20e%20quero%20marcar%20uma%20consulta.";

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -340 : 340;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const journeySteps = [
    { 
      num: "01", 
      title: "Agendamento", 
      desc: "Sua jornada começa com um contato inicial. Nossa equipe irá entender suas necessidades, esclarecer dúvidas e agendar o melhor horário para sua visita ao consultório, garantindo um atendimento personalizado desde o primeiro momento.",
      img: "https://marthanardy.com.br/_assets/media/6b8dc258ee1cfac4c83c88a9578ed192.jpg"
    },
    { 
      num: "02", 
      title: "Avaliação & Diagnóstico", 
      desc: "No consultório, a Dra. Martha fará uma avaliação clínica detalhada para diagnosticar com precisão o que precisa ser tratado. Utilizamos nossa expertise e equipamentos adequados para planejar o seu tratamento.",
      img: "https://marthanardy.com.br/_assets/media/591cc8eb615bf9bc1846ca2b9aef6542.jpg"
    },
    { 
      num: "03", 
      title: "Tratamento", 
      desc: "Com o plano de tratamento definido, iniciamos os procedimentos necessários, que podem variar de limpeza preventiva a tratamentos de canal ou próteses. Nosso foco é sempre o seu conforto e a recuperação da sua saúde bucal.",
      img: "https://marthanardy.com.br/_assets/media/e7744603da382f809f4fc34d8ed4eb4a.jpg"
    },
    { 
      num: "04", 
      title: "Acompanhamento", 
      desc: "Nosso cuidado não termina após o procedimento. Fazemos o acompanhamento da sua recuperação e incentivamos a manutenção preventiva regular para que seu sorriso permaneça saudável ao longo dos anos.",
      img: "https://marthanardy.com.br/_assets/media/3b130a3454d634987ee4c20882fe2c90.jpg"
    },
  ];

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
  const ActionButton = ({ text = "Agendar pelo WhatsApp", isHeader = false, showPhone = false }: { text?: string, isHeader?: boolean, showPhone?: boolean }) => (
    <a
      href={whatsappLink}
      className={`inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#2AD1A9] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(42,209,169,0.25)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(42,209,169,0.45)] hover:bg-[#4DE0BE] ${
        isHeader ? "px-6 py-2.5 text-sm" : "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
      }`}
      onClick={trackWhatsAppClick}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <WhatsAppIcon className={isHeader ? "w-5 h-5" : "w-6 h-6"} />
      </motion.div>
      <span>{text}</span>
      {showPhone && <span className="font-normal opacity-90 whitespace-nowrap">(11) 97719-6686</span>}
    </a>
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
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

      {/* Hero Section - Redesenhado para visual mais premium/moderno com elementos odontológicos */}
      <section className="relative bg-[#4A9FD4] overflow-hidden pt-[40px] md:pt-[160px] pb-20 md:pb-[120px] mt-[65px] md:mt-[57px]">
        {/* Elementos de fundo para profundidade */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#2AD1A9]/30 rounded-full blur-[150px]"></div>
          <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="absolute top-[40%] left-[20%] w-48 h-48 bg-[#4DE0BE]/20 rounded-full blur-[60px]"></div>
          
          {/* Ícones flutuantes decorativos (Opacidade baixa) */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[10%] text-white/10"
          >
            <Sparkles size={64} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] left-[5%] text-white/10"
          >
            {/* Ícone de Dente Customizado */}
            <ToothIcon className="w-20 h-20" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[60%] right-[30%] text-[#2AD1A9]/20"
          >
             {/* Ícone de Ferramentas Customizado */}
             <DentistToolsIcon className="w-16 h-16" />
          </motion.div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            {/* Coluna de Texto */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              variants={fadeIn} 
              viewport={{ once: true }} 
              className="order-2 lg:order-1 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2AD1A9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2AD1A9]"></span>
                </span>
                Cirurgiã-Dentista | Endodontista
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold mb-6 text-white leading-[1.1] tracking-tight drop-shadow-sm">
                Dra. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2AD1A9] to-[#bafff0] font-semibold">Martha Nardy</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/95 font-light max-w-[90%] drop-shadow-sm">
                Com mais de <strong className="font-semibold text-white">30 anos de experiência</strong> e especialização pela <strong className="font-semibold text-white">USP Bauru</strong>, ofereço um atendimento odontológico de excelência em São Paulo. Meu compromisso é unir um cuidado humanizado à precisão técnica.
              </p>
              
              <div className="bg-white/15 border-l-4 border-[#2AD1A9] p-4 mb-10 rounded-r-lg backdrop-blur-sm shadow-sm">
                <p className="text-white font-medium text-[16px] md:text-[18px]">
                  Atendimento exclusivo particular. Não trabalhamos com convênios.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center w-full sm:w-auto">
                <ActionButton />
                <div className="flex items-center gap-3 text-white/90 text-sm font-medium drop-shadow-sm">
                  <MapPin className="w-5 h-5 text-[#2AD1A9]" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </motion.div>

            {/* Coluna da Imagem */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} 
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              {/* Card de Estatística Flutuante 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-10 -left-6 lg:-left-12 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 flex items-center gap-4 hidden sm:flex"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#E6F7F3] to-[#2AD1A9]/20 rounded-full flex items-center justify-center text-[#2AD1A9]">
                  {/* Ícone de Dente para o Card */}
                  <TeethIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800 leading-none">+ de 30 anos</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">de Experiência</div>
                </div>
              </motion.div>

              {/* Card de Estatística Flutuante 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 -right-6 lg:-right-8 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 flex items-center gap-4 hidden sm:flex"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-[#4A9FD4]/20 rounded-full flex items-center justify-center text-[#4A9FD4]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800 leading-none">USP</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Especialização</div>
                </div>
              </motion.div>

              {/* Imagem Principal com Decoração */}
              <div className="relative z-10 w-full h-[360px] sm:h-[600px] max-w-[500px] mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2AD1A9] to-[#4A9FD4] rounded-3xl transform rotate-3 scale-[1.03] opacity-60 blur-xl group-hover:rotate-6 transition-transform duration-700"></div>
                <div className="absolute inset-0 border-[3px] border-white/60 rounded-3xl transform -rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
                <img
                  src="https://marthanardy.com.br/_assets/media/fde1c4171d0941f466a82108e88c558a.jpg"
                  alt="Dra. Martha Nardy - Consultório odontológico"
                  className="w-full h-full object-cover object-bottom sm:object-center rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section - Estilo Grades do Referência */}
      <section id="servicos" className="py-[100px] md:py-[140px] bg-[#f8f9fa] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight">Nossos Tratamentos</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 relative">
            
            {/* Coluna 1 */}
            <div className="flex flex-col gap-8 md:gap-12">
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-light text-slate-800 mb-2">Clínica Geral & Prevenção</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Check-ups regulares, limpeza profissional e orientações para manter seus dentes e gengivas saudáveis. A prevenção é a chave.</p>
                <div className="w-full flex justify-center opacity-80 mix-blend-multiply mt-auto">
                  <img src="/icons/dental-care.svg" alt="Prevenção" className="h-24 object-contain" />
                </div>
              </motion.div>

              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-light text-slate-800 mb-2">Estética Dental</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Soluções estéticas desenvolvidas para realçar sua beleza natural e lhe dar um sorriso confiante e radiante.</p>
                <div className="w-full flex justify-center opacity-80 mix-blend-multiply mt-auto">
                  <img src="/icons/dentist.svg" alt="Estética" className="h-24 object-contain" />
                </div>
              </motion.div>
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col gap-8 md:gap-12">
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-light text-slate-800 mb-2">Endodontia (Canal)</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Especialidade da Dra. Martha. Tratamentos de canal precisos para aliviar a dor e salvar seu dente natural, com conforto.</p>
                <div className="w-full flex justify-center opacity-80 mix-blend-multiply mt-auto">
                  <img src="/icons/tooth.svg" alt="Endodontia" className="h-24 object-contain" />
                </div>
              </motion.div>

              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-light text-slate-800 mb-2">Clareamento Dentário</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Técnicas seguras para dentes mais claros e brilhantes sem comprometer a estrutura dentária, garantindo um sorriso perfeito.</p>
                <div className="w-full flex justify-center opacity-80 mix-blend-multiply mt-auto">
                  <Sparkles size={80} className="text-slate-700" strokeWidth={1} />
                </div>
              </motion.div>
            </div>

            {/* Coluna 3 */}
            <div className="flex flex-col gap-8 md:gap-12">
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-light text-slate-800 mb-2">Periodontia & Saúde</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Tratamento avançado das gengivas e estruturas de suporte dos dentes, garantindo uma base sólida para a sua saúde bucal.</p>
                <div className="w-full flex justify-center opacity-80 mix-blend-multiply mt-auto">
                  <img src="/icons/dentist-tools.svg" alt="Periodontia" className="h-24 object-contain" />
                </div>
              </motion.div>

              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-light text-slate-800 mb-2">Próteses & Implantes</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Utilizando materiais modernos, restauramos dentes ausentes ou danificados com resultados naturais que melhoram a função.</p>
                <div className="w-full flex justify-center opacity-80 mix-blend-multiply mt-auto">
                  <img src="/icons/implant.svg" alt="Implantes" className="h-24 object-contain" />
                </div>
              </motion.div>
            </div>

          </div>

          {/* Botão único de WhatsApp abaixo dos cards */}
          <div className="flex justify-center mt-16">
            <ActionButton />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-[100px] bg-white border-y border-slate-100 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#2AD1A9] rounded-lg z-0 hidden md:block"></div>
              <img
                src="https://marthanardy.com.br/_assets/media/6b8dc258ee1cfac4c83c88a9578ed192.jpg"
                alt="Dra. Martha Nardy"
                className="w-full rounded-lg shadow-xl relative z-10 block"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight mb-4">Prazer, sou a Dra. Martha Nardy</h2>
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

      {/* Como Funciona Section - Sua Jornada de Tratamento (Horizontal Scroll) */}
      <section className="py-[100px] md:py-[140px] bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tight mb-16">Sua Jornada de Tratamento</h2>
          
          <div className="relative">
            {/* Setas de Navegação */}
            <button 
              onClick={() => scroll("left")} 
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-slate-600 hover:text-[#4A9FD4] hover:shadow-xl transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-slate-600 hover:text-[#4A9FD4] hover:shadow-xl transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Faixa de Rolagem Horizontal */}
            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {journeySteps.map((step, index) => (
                <motion.div 
                  key={step.num} 
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }}
                  className="snap-center shrink-0 w-[80vw] sm:w-[45vw] md:w-[calc(25%-24px)] flex flex-col items-center text-center relative"
                >
                  {/* Imagem Circular */}
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 shadow-lg border-4 border-white z-10 bg-slate-100">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Linha de Conexão (entre os itens, exceto o último) */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-slate-200 -z-0"></div>
                  )}
                  
                  {/* Número */}
                  <div className="text-5xl md:text-6xl font-light text-[#4A9FD4] mb-2">{step.num}</div>
                  
                  {/* Título */}
                  <h3 className="text-xl md:text-2xl font-light text-slate-800 mb-4">{step.title}</h3>
                  
                  {/* Descrição */}
                  <p className="text-sm text-slate-500 leading-relaxed px-2 md:px-0">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Indicadores de Scroll (Mobile) */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {journeySteps.map((step, idx) => (
              <div key={step.num} className={`h-1.5 rounded-full transition-all ${idx === 0 ? 'w-6 bg-[#4A9FD4]' : 'w-1.5 bg-slate-300'}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-[100px] bg-white scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
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
              { text: "Saúde bucal é um assunto importante. Sou paciente da Dra. Martha há mais de 12 anos. É uma excelente profissional, com preços muito justos.", author: "Katia Orberg", initials: "KO", color: "bg-rose-100 text-rose-600" },
              { text: "Sou paciente da Dra Martha desde 2006. Ela é uma profissional muito competente e está se atualizando constantemente. Habilidosa e perfeccionista, seu trabalho é impecável e de alta qualidade. No campo pessoal é simpática e comunicativa, sempre de bom humor.", author: "Roberto Baptista", initials: "RB", color: "bg-sky-100 text-sky-600" },
              { text: "A Dra. Martha é exceptional! Todo mundo em casa só passa com ela, é de muita confiança, cuidado e sempre realiza o necessário para a higiene da minha boca. Recomendo mil vezes.", author: "Camila Gregório", initials: "CG", color: "bg-emerald-100 text-emerald-600" }
            ].map((testi, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-[#fafaf9] p-8 rounded-lg border border-slate-200 relative pt-10 flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#2AD1A9] rounded-b-sm"></div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-4 ${testi.color}`}>
                  {testi.initials}
                </div>
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
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="text-4xl font-semibold mb-3">Cuide do seu sorriso!</h2>
            <p className="text-lg mb-8 text-white/70 max-w-2xl mx-auto">Agende sua consulta e faça sua avaliação. Atendimento humanizado e de qualidade.</p>
            <ActionButton />
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-[100px] bg-[#fafaf9] border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
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
        <div className="max-w-[1200px] mx-auto px-6">
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
