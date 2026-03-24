import {
  MessageSquare,
  Users,
  Scale,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import heroBg from "@/assets/7e73778ff2b7d283667d8af7e0d5912a02ee4fb2.png";
import heroBgMobile from "@/assets/10c8f7353ea862478caf79a37795f22d1eaa6127.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const handleWhatsAppClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: MessageSquare,
      text: "Atención personalizada en forma presencial y virtual",
    },
    { icon: Users, text: "Equipo de profesionales" },
    {
      icon: Scale,
      text: "Experiencia en múltiples áreas del derecho",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]"
    >
      {/* Background Image with subtle zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity hidden sm:block"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `url('${heroBg}')`,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity sm:hidden"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `url('${heroBgMobile}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-20 pb-24 sm:pb-20 w-full mt-16">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Estudio Jurídico <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ac6d] to-[#f3dca8]">
              Integral en Paraná
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed font-light max-w-2xl"
          >
            Equipo de abogados especializados que brinda
            asesoramiento legal y representación profesional en
            diversas áreas del derecho.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mb-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#ffffff]/5 border border-[#ffffff]/10 backdrop-blur-sm px-4 py-3 rounded-xl"
                >
                  <Icon className="w-5 h-5 text-[#d8ac6d] flex-shrink-0" />
                  <span className="text-white/90 text-sm font-medium">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="w-full sm:w-auto"
          >
            <motion.button
              onClick={handleWhatsAppClick}
              className="relative group overflow-hidden bg-[#d8ac6d] text-black w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(216,172,109,0.3)] hover:shadow-[0_0_40px_rgba(216,172,109,0.5)] flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              {/* Mobile layout */}
              <span className="sm:hidden relative z-10 flex items-center justify-between w-full px-1">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="tracking-wide uppercase text-sm">
                    Solicitar Consulta
                  </span>
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/15">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </span>
              {/* Desktop layout */}
              <MessageCircle className="hidden sm:block w-5 h-5 relative z-10 flex-shrink-0" />
              <span className="hidden sm:inline relative z-10">
                Solicitar consulta por WhatsApp
              </span>
              <ArrowRight className="hidden sm:block w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator — hidden on very small screens to avoid CTA overlap */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#d8ac6d] rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-3 bg-[#d8ac6d] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}