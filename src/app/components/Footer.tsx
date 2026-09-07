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

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590219767349',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/parana.legal/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@parana.legal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-9 h-9 rounded-full bg-[#d8ac6d]/10 text-[#d8ac6d] flex items-center justify-center hover:bg-[#d8ac6d] hover:text-white transition-colors duration-200"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}

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
            <a href="mailto:estudioparanalegal@gmail.com" className="flex items-center gap-1.5 hover:text-[#d8ac6d] transition-colors break-all">
              <Mail className="w-3.5 h-3.5 text-[#d8ac6d] flex-shrink-0" />
              estudioparanalegal@gmail.com
            </a>
          </div>
          <SocialLinks className="justify-center" />
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
            <SocialLinks className="mt-1" />
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
                  href="mailto:estudioparanalegal@gmail.com"
                  className="text-[#524F4C] text-sm hover:text-[#d8ac6d] transition-colors break-all"
                >
                  estudioparanalegal@gmail.com
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
