import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import gareisFoto from '@/assets/319580ecb14ee19e4837478307535e23137c8e4d.png';
import fowlerFoto from '@/assets/9c59ee4dd4fbff84b2045070d6201afd4aaff0b6.png';
import harringtonFoto from '@/assets/60de1ab3dd863e350d2c56b64d6db05cf9351f5e.png';

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

// Extrae la inicial del primer nombre real (saltando el prefijo Dr./Dra.)
const getInitial = (name: string): string => {
  const parts = name.split(' ');
  // parts[0] = "Dr." o "Dra.", parts[1] = primer nombre real
  return parts[1]?.charAt(0).toUpperCase() || parts[0]?.charAt(0).toUpperCase() || '?';
};

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-16 sm:py-24 bg-[#f9f9f9] relative" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.objectPosition} grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105`}
                />

                {/* WhatsApp hover overlay — desktop only */}
                <div className="absolute bottom-6 left-0 w-full hidden md:flex justify-center z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(`Hola ${member.name.split(' ')[1]}, me gustaría consultar sobre servicios legales`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d8ac6d] hover:bg-[#524F4C] text-white p-2.5 rounded-full transition-colors shadow-lg"
                    aria-label={`WhatsApp ${member.name}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8 relative">
                {/* Initial badge */}
                <div className="absolute top-0 right-6 sm:right-8 -translate-y-1/2 w-12 h-12 bg-[#000000] text-[#d8ac6d] rounded-xl flex items-center justify-center font-serif text-2xl font-bold shadow-lg border border-[#d8ac6d]/20 group-hover:scale-110 transition-transform duration-300">
                  {getInitial(member.name)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#000000] mb-2 group-hover:text-[#d8ac6d] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#d8ac6d] font-semibold text-sm uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#d8ac6d] to-transparent mb-4" />
                <p className="text-[#524F4C] leading-relaxed text-sm sm:text-base mb-4 md:mb-0">
                  {member.description}
                </p>

                {/* WhatsApp button — mobile only */}
                <a
                  href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(`Hola ${member.name.split(' ')[1]}, me gustaría consultar sobre servicios legales`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden flex items-center justify-center gap-2 w-full bg-[#d8ac6d] hover:bg-[#c99b5c] text-white text-sm font-semibold py-3 rounded-xl transition-colors"
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