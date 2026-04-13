import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import gareisFoto from '@/assets/319580ecb14ee19e4837478307535e23137c8e4d.webp';
import fowlerFoto from '@/assets/9c59ee4dd4fbff84b2045070d6201afd4aaff0b6.webp';
import harringtonFoto from '@/assets/60de1ab3dd863e350d2c56b64d6db05cf9351f5e.webp';

const team = [
  {
    image: fowlerFoto,
    name: 'Dra. Julieta Fowler',
    role: 'Socia',
    description: 'Especialista en Derecho de Daños y Derecho Laboral',
    whatsapp: '5493436101776',
    objectPosition: 'object-top'
  },
  {
    image: gareisFoto,
    name: 'Dr. Joaquín Gareis',
    role: 'Socio fundador',
    description: 'Especialista en Derecho Administrativo y Constitucional y Laboral',
    whatsapp: '5493434519112',
    objectPosition: 'object-top'
  },
  {
    image: harringtonFoto,
    name: 'Dra. María Carolina Harrington',
    role: 'Socia',
    description: 'Especialista en Derecho de Familia, Sucesiones y de Daños',
    whatsapp: '5493434757858',
    objectPosition: 'object-center'
  }
];

const getInitial = (name: string): string => {
  const parts = name.split(' ');
  return parts[1]?.charAt(0).toUpperCase() || parts[0]?.charAt(0).toUpperCase() || '?';
};

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="team" className="py-16 sm:py-24 bg-[#f9f9f9] relative" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#d8ac6d] font-bold tracking-widest uppercase text-sm block mb-3">Nuestros Profesionales</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] tracking-tight">
            Equipo Legal
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-[0_20px_50px_rgb(216,172,109,0.12)]"
              initial={{ opacity: 0, y: 60, scale: 0.93 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.img
                  src={member.image}
                  alt={`${member.name} — ${member.description}, Paraná Legal`}
                  loading="lazy"
                  className={`w-full h-full object-cover ${member.objectPosition} grayscale-[30%] group-hover:grayscale-0 transition-all duration-700`}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* WhatsApp hover overlay — desktop only */}
                <motion.div
                  className="absolute bottom-6 left-0 w-full hidden md:flex justify-center z-20"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(`Hola ${member.name.split(' ')[1]}, me gustaría consultar sobre servicios legales`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d8ac6d] hover:bg-[#524F4C] text-white p-2.5 rounded-full transition-colors shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500"
                    tabIndex={-1}
                    aria-label={`WhatsApp ${member.name}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <div className="p-6 sm:p-8 relative">
                {/* Initial badge */}
                <motion.div
                  className="absolute top-0 right-6 sm:right-8 -translate-y-1/2 w-12 h-12 bg-[#000000] text-[#d8ac6d] rounded-xl flex items-center justify-center font-serif text-2xl font-bold shadow-lg border border-[#d8ac6d]/20"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {getInitial(member.name)}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#000000] mb-2 group-hover:text-[#d8ac6d] transition-colors duration-300 sm:min-h-[3.5rem] lg:min-h-[4rem]">
                  {member.name}
                </h3>
                <p className="text-[#d8ac6d] font-semibold text-sm uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#d8ac6d] to-transparent mb-4 group-hover:w-20 transition-all duration-500" />
                <p className="text-[#524F4C] leading-relaxed text-sm sm:text-base mb-4 md:mb-0 sm:min-h-[3rem]">
                  {member.description}
                </p>

                {/* WhatsApp button — mobile only */}
                <a
                  href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(`Hola ${member.name.split(' ')[1]}, me gustaría consultar sobre servicios legales`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden flex items-center justify-center gap-2 w-full bg-[#d8ac6d] hover:bg-[#c99b5c] text-white text-sm font-semibold py-3 rounded-xl transition-colors"
                  aria-label={`Consultar a ${member.name} por WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
