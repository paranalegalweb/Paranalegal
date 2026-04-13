import { MapPin, Phone, Mail } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import logoImage from '@/assets/96541324be65db62bc366547e85317d16df43ad4.webp';

const navLinks = [
  { label: 'Inicio', id: 'hero' },
  { label: 'Nosotros', id: 'about' },
  { label: 'Áreas de práctica', id: 'areas' },
  { label: 'Equipo', id: 'team' },
  { label: 'Testimonios', id: 'testimonios' },
  { label: 'Contacto', id: 'contact' },
];

const areas = [
  'Derecho de Familia y Sucesiones',
  'Daños y Perjuicios',
  'Derecho Administrativo',
  'Amparos',
  'Derecho de las Cosas y las Personas',
  'Derecho Laboral',
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white overflow-hidden" ref={ref}>
      {/* Línea dorada superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d8ac6d] to-transparent" />
      {/* Franja lateral izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d8ac6d]/0 via-[#d8ac6d]/30 to-[#d8ac6d]/0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-8">

        {/* Mobile: layout compacto */}
        <motion.div
          className="md:hidden flex flex-col items-center text-center gap-4 mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img
            src={logoImage}
            alt="Paraná Legal"
            className="h-12 w-auto object-contain"
          />
          <p className="text-[#524F4C] text-xs leading-relaxed max-w-xs">
            Estudio jurídico de consulta integral con sede en Paraná, Entre Ríos.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[#524F4C] text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d8ac6d]" />
              Santa Fe 53, Paraná
            </span>
            <a href="tel:+543434706093" className="flex items-center gap-1.5 hover:text-[#d8ac6d] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#d8ac6d]" />
              343 470 6093
            </a>
            <a href="mailto:consultas@paranalegal.com.ar" className="flex items-center gap-1.5 hover:text-[#d8ac6d] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#d8ac6d]" />
              consultas@paranalegal.com.ar
            </a>
          </div>
        </motion.div>

        {/* Desktop: grid completo 4 columnas */}
        <div className="hidden md:grid md:grid-cols-4 gap-12 mb-14">

          {/* Col 1 — Logo + descripción */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logoImage}
              alt="Paraná Legal — Estudio Jurídico en Paraná, Entre Ríos"
              className="h-16 w-auto object-contain object-left"
            />
            <p className="text-[#524F4C] text-sm leading-relaxed max-w-xs">
              Estudio jurídico de consulta integral con sede en Paraná, Entre Ríos.
              Comprometidos con la excelencia y la confianza de nuestros clientes.
            </p>
            <div className="w-10 h-[2px] bg-[#d8ac6d] rounded-full" />
          </motion.div>

          {/* Col 2 — Navegación */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#000000] text-xs font-semibold tracking-widest uppercase mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#524F4C] text-sm hover:text-[#d8ac6d] transition-colors duration-200"
                    whileTap={{ scale: 0.95, color: '#d8ac6d' }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Áreas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[#000000] text-xs font-semibold tracking-widest uppercase mb-4">
              Áreas
            </p>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-[#524F4C] text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#000000] text-xs font-semibold tracking-widest uppercase mb-6">
              Contacto
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d8ac6d]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#d8ac6d]" />
                </div>
                <span className="text-[#524F4C] text-sm leading-relaxed">
                  Santa Fe 53<br />Paraná, Entre Ríos
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d8ac6d]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#d8ac6d]" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+543434706093" className="text-[#524F4C] text-sm hover:text-[#d8ac6d] transition-colors">
                    +54 343 470 6093
                  </a>
                  <a href="tel:+543434530103" className="text-[#524F4C] text-sm hover:text-[#d8ac6d] transition-colors">
                    +54 343 453 0103
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d8ac6d]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#d8ac6d]" />
                </div>
                <a
                  href="mailto:consultas@paranalegal.com.ar"
                  className="text-[#524F4C] text-sm hover:text-[#d8ac6d] transition-colors break-all"
                >
                  consultas@paranalegal.com.ar
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pie de página */}
        <motion.div
          className="border-t border-gray-100 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#524F4C]/50 text-xs sm:text-sm text-center md:text-left">
            © 2026 Paraná Legal — Todos los derechos reservados
          </p>
          <p className="text-[#524F4C]/40 text-xs">
            Estudio Jurídico Integral · Paraná, Entre Ríos
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
