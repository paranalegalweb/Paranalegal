import { motion, useInView } from 'motion/react';
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

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const visibleCount = 3;
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(current + i) % total]);
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
          transition={{ duration: 0.7 }}
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
          {getVisible().map((t, i) => (
            <motion.div
              key={`${current}-${i}`}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col gap-5 hover:border-[#d8ac6d]/40 hover:bg-white/[0.07] transition-all duration-500 group ${
                i === 2 ? 'hidden lg:flex' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="w-7 h-7 lg:w-8 lg:h-8 text-[#d8ac6d] opacity-60" />
              <p className="text-gray-300 leading-relaxed flex-1 text-sm lg:text-base">"{t.text}"</p>
              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#d8ac6d] text-[#d8ac6d]" />
                  ))}
                </div>
                <p className="text-white font-semibold text-sm lg:text-base">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.location}</p>
                <span className="inline-block mt-2 text-xs text-[#d8ac6d] border border-[#d8ac6d]/30 rounded-full px-3 py-0.5">
                  {t.area}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: 1 card */}
        <div className="sm:hidden mb-10">
          <motion.div
            key={current}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Quote className="w-7 h-7 text-[#d8ac6d] opacity-60" />
            <p className="text-gray-300 leading-relaxed text-sm">"{testimonials[current].text}"</p>
            <div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonials[current].rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#d8ac6d] text-[#d8ac6d]" />
                ))}
              </div>
              <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[current].location}</p>
              <span className="inline-block mt-2 text-xs text-[#d8ac6d] border border-[#d8ac6d]/30 rounded-full px-3 py-0.5">
                {testimonials[current].area}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d8ac6d] hover:text-[#d8ac6d] transition-colors duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-[#d8ac6d]'
                    : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d8ac6d] hover:text-[#d8ac6d] transition-colors duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
