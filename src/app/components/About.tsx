import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleConsultClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      title: "Acerca de Paraná Legal",
      text: 'Paraná Legal es un estudio jurídico integral con sede en Paraná, Entre Ríos, que brinda servicios legales especializados con profesionales formados y con amplio expertiz en las áreas del derecho de su especialidad.',
    },
    {
      title: "Nuestro Equipo",
      text: 'Nuestro equipo está conformado por abogados con amplia experiencia en diversas ramas del derecho, comprometidos en la defensa de los intereses de nuestros clientes y en la resolución práctica de los conflictos.',
    },
    {
      title: "Compromiso",
      text: 'Con años de trayectoria en el ejercicio profesional, nos distinguimos por nuestro enfoque personalizado, la atención integral de cada caso y el compromiso con la justicia.',
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#ffffff] relative overflow-hidden" style={{ position: 'relative' }} ref={ref}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <motion.div style={{ y: y1 }} className="absolute -left-64 top-0 w-[500px] h-[500px] bg-[#d8ac6d]/5 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute -right-64 bottom-0 w-[600px] h-[600px] bg-[#524F4C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#000000]/10 bg-white mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#d8ac6d]" />
              <span className="text-[#000000] text-sm font-semibold tracking-wider uppercase">Nuestra Firma</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Defendiendo sus derechos con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ac6d] to-[#b3884b]">excelencia</span>
            </h2>
            <div className="space-y-4 mb-10">
              {[
                "Atención personalizada en cada caso",
                "Estrategias legales innovadoras",
                "Transparencia y ética profesional"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#d8ac6d]" />
                  <span className="text-[#524F4C] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={handleConsultClick}
              className="group relative overflow-hidden bg-[#000000] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <span className="relative z-10">Realizar consulta</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(216,172,109,0.1)] transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#d8ac6d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-bold text-[#000000] mb-3 group-hover:text-[#d8ac6d] transition-colors">{card.title}</h3>
                <p className="text-[#524F4C] leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}