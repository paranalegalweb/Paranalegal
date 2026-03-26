import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcela R.',
    location: 'Paraná, Entre Ríos',
    text: 'Me ayudaron con un trámite sucesorio que llevaba años sin resolverse. El trato fue muy amable y me explicaron todo paso a paso. Quedé muy conforme con el resultado.',
    area: 'Derecho Sucesorio',
    rating: 5,
  },
  {
    name: 'Rodrigo T.',
    location: 'Paraná, Entre Ríos',
    text: 'Consulté por un problema laboral y me orientaron muy bien desde el primer momento. Respondieron mis dudas con claridad y sin hacerme sentir ignorante. Lo recomiendo.',
    area: 'Derecho Laboral',
    rating: 5,
  },
  {
    name: 'Valeria M.',
    location: 'Crespo, Entre Ríos',
    text: 'Pasé por un proceso de divorcio complicado y el acompañamiento fue excelente. Siempre estuvieron disponibles para responder mis consultas. Muy profesionales.',
    area: 'Derecho de Familia',
    rating: 5,
  },
  {
    name: 'Carlos F.',
    location: 'Paraná, Entre Ríos',
    text: 'Tuve un accidente de tránsito y no sabía por dónde empezar. Me asesoraron muy bien y logramos un acuerdo justo. Estoy agradecido por la dedicación.',
    area: 'Accidentes de Tránsito',
    rating: 5,
  },
  {
    name: 'Graciela P.',
    location: 'Diamante, Entre Ríos',
    text: 'Necesitaba regularizar una propiedad familiar y el trámite fue más sencillo de lo que esperaba gracias a su gestión. Muy atentos y claros en todo momento.',
    area: 'Derecho Inmobiliario',
    rating: 5,
  },
  {
    name: 'Sebastián L.',
    location: 'Paraná, Entre Ríos',
    text: 'Me asesoraron en la constitución de mi empresa. Todo muy claro y ordenado. Se nota que saben lo que hacen y que se toman en serio cada caso.',
    area: 'Derecho Comercial',
    rating: 5,
  },
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.95,
  }),
};

const avatarColors = [
  'from-[#d8ac6d] to-[#b3884b]',
  'from-[#8b7355] to-[#6b5640]',
  'from-[#c4956a] to-[#a07850]',
  'from-[#bfa27e] to-[#9a825f]',
  'from-[#d4a96a] to-[#ab8750]',
  'from-[#9c8465] to-[#7a6548]',
];

function TestimonialCard({ t, index = 0, className = "" }: { t: typeof testimonials[0]; index?: number; className?: string }) {
  const initials = t.name.split(' ').map(w => w.charAt(0)).join('').slice(0, 2);

  return (
    <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col gap-5 hover:border-[#d8ac6d]/40 hover:bg-white/[0.07] transition-all duration-500 group ${className}`}>
      <div className="flex items-center justify-between">
        <Quote className="w-7 h-7 lg:w-8 lg:h-8 text-[#d8ac6d] opacity-60" />
        <div className="flex gap-1">
          {Array.from({ length: t.rating }).map((_, s) => (
            <Star key={s} className="w-3.5 h-3.5 fill-[#d8ac6d] text-[#d8ac6d]" />
          ))}
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed flex-1 text-sm lg:text-base">"{t.text}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <span className="text-white text-xs font-bold tracking-wide">{initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.location}</p>
        </div>
        <span className="text-[10px] text-[#d8ac6d] border border-[#d8ac6d]/25 rounded-full px-2.5 py-0.5 flex-shrink-0 hidden sm:inline-block">
          {t.area}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = testimonials.length;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((c) => (c + newDirection + total) % total);
  };

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (current + i) % total;
      items.push({ ...testimonials[idx], _idx: idx });
    }
    return items;
  };

  return (
    <section id="testimonios" className="py-16 sm:py-24 lg:py-32 bg-[#000000] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#d8ac6d 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d8ac6d]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d8ac6d]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d8ac6d]/30 bg-[#d8ac6d]/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d8ac6d]" />
            <span className="text-[#d8ac6d] text-sm font-semibold tracking-wider uppercase">
              Testimonios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
            Lo que dicen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ac6d] to-[#b3884b]">
              nuestros clientes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            La confianza de quienes nos eligen es nuestro mayor respaldo.
          </p>
        </motion.div>

        {/* Cards — lg: 3 columnas, sm: 2, mobile: 1 */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
          <AnimatePresence mode="popLayout" custom={direction}>
            {getVisible().map((t, i) => (
              <motion.div
                key={`${current}-${i}`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={i === 2 ? 'hidden lg:block' : ''}
              >
                <TestimonialCard t={t} index={t._idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: horizontal swipe scroll */}
        <div className="sm:hidden mb-10 -mx-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide">
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center shrink-0 w-[85vw]">
                <TestimonialCard t={t} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls — desktop only */}
        <motion.div
          className="hidden sm:flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => paginate(-1)}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d8ac6d] hover:text-[#d8ac6d] transition-colors duration-300"
            aria-label="Anterior"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? 'w-8 bg-[#d8ac6d]'
                    : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={() => paginate(1)}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d8ac6d] hover:text-[#d8ac6d] transition-colors duration-300"
            aria-label="Siguiente"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
