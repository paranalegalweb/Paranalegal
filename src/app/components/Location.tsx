import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const details = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Santa Fe 53, Paraná',
    sub: 'Entre Ríos, Argentina',
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: 'Lun – Vie: 8:00 – 18:00',
    sub: 'Consultas virtuales disponibles',
  },
  {
    icon: Navigation,
    label: 'Cómo llegar',
    value: 'Centro de Paraná',
    sub: 'Fácil acceso y estacionamiento cercano',
  },
];

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Top fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#000000] to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-0 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d8ac6d]/30 bg-[#d8ac6d]/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d8ac6d] animate-pulse" />
            <span className="text-[#d8ac6d] text-sm font-medium tracking-wider uppercase">Cómo encontrarnos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ac6d] to-[#f3dca8]">Ubicación</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Estamos en el corazón de Paraná, listos para atenderte de forma presencial o virtual.
          </p>
        </motion.div>

        {/* Info cards row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-[#ffffff]/5 border border-[#ffffff]/8 rounded-2xl px-6 py-5 hover:border-[#d8ac6d]/30 hover:bg-[#d8ac6d]/5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#d8ac6d]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d8ac6d]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#d8ac6d]" />
                </div>
                <div>
                  <p className="text-[#d8ac6d] text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Map container — full width, sin padding lateral */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        {/* Gold border top */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d8ac6d]/40 to-transparent" />

        {/* Map wrapper con overlay de color corporativo */}
        <div className="relative h-[420px] md:h-[500px] overflow-hidden">
          {/* Color tint overlay para integrar el mapa al diseño oscuro */}
          <div className="absolute inset-0 pointer-events-none z-10 mix-blend-multiply bg-[#524F4C]/20" />

          <iframe
            src="https://maps.google.com/maps?q=Santa%20Fe%2053%2C%20Paran%C3%A1%2C%20Entre%20R%C3%ADos%2C%20Argentina&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(30%) contrast(1.05) brightness(0.85)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Paraná Legal — Santa Fe 53, Paraná"
          />

          {/* Gradientes laterales para fundir el mapa con el fondo */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-20" />

          {/* Pin personalizado centrado */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-30 pointer-events-none">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#000000] border-2 border-[#d8ac6d] text-white px-4 py-2 rounded-xl shadow-[0_4px_24px_rgba(216,172,109,0.35)] mb-2 whitespace-nowrap">
                <p className="font-bold text-sm text-[#d8ac6d]">Paraná Legal</p>
                <p className="text-gray-300 text-xs">Santa Fe 53, Paraná</p>
              </div>
              <div className="w-3 h-3 bg-[#d8ac6d] rotate-45 -mt-2 shadow-lg" />
            </motion.div>
          </div>
        </div>

        {/* Gold border bottom */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d8ac6d]/40 to-transparent" />

        {/* CTA abrir en Google Maps */}
        <div className="absolute bottom-6 right-6 z-30">
          <motion.a
            href="https://www.google.com/maps/search/Santa+Fe+53,+Paraná,+Entre+Ríos,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#000000]/80 backdrop-blur-sm border border-[#d8ac6d]/40 hover:border-[#d8ac6d] text-[#d8ac6d] text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-[#d8ac6d]/10 shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MapPin className="w-4 h-4" />
            Abrir en Google Maps
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}