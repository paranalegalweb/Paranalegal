import { Heart, Car, Building2, Briefcase, Scale, Shield, BookOpen } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const areas = [
  {
    icon: Heart,
    title: 'Derecho de Familia y Sucesiones',
    description: 'Divorcios, alimentos, régimen de comunicación, compensaciones económicas, uniones convivenciales, adopciones, violencia de género, violencia familiar, permisos, régimen de bienes, filiaciones, sucesiones ab intestato, y planificación sucesoria.'
  },
  {
    icon: Car,
    title: 'Daños y Perjuicios',
    description: 'Accidentes de tránsito, mala praxis médica, seguros, reclamos por daños contractuales, defensa del consumidor, responsabilidad civil en general, prevención del daño.'
  },
  {
    icon: Building2,
    title: 'Derecho Administrativo',
    description: 'Asesoramiento y representación en recursos administrativos, relaciones de empleo público, régimen de contrataciones públicas, responsabilidad del Estado y procedimientos administrativos.'
  },
  {
    icon: Shield,
    title: 'Amparos',
    description: 'Amparos de salud, discapacidad, género, medio ambiente, previsionales (jubilaciones, pensiones, ANSES), amparos contra el Estado (actos arbitrarios, omisiones, demoras administrativas), amparos por acceso a medicamentos de alto costo, y toda violación de derechos constitucionales.'
  },
  {
    icon: BookOpen,
    title: 'Derecho de las Cosas y las Personas',
    description: 'Derechos de las personas, derechos sobre muebles e inmuebles, usucapiones, contratos, pólizas de seguro, asesoramiento en todas las etapas, alquileres, compraventas, desalojos, ejecuciones de contratos, embargos, cobros de sumas de dinero. Cartas documento.'
  },
  {
    icon: Briefcase,
    title: 'Derecho Laboral',
    description: 'Despidos, accidentes laborales, indemnizaciones, licencias, asesoramiento individual y colectivo, negociaciones colectivas y todo tipo de conflictos laborales.'
  }
];

export function PracticeAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="areas" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden" ref={ref}>
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d8ac6d]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#524F4C]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d8ac6d]/30 bg-[#d8ac6d]/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d8ac6d] animate-pulse" />
            <span className="text-[#d8ac6d] text-sm font-medium tracking-wider uppercase">Nuestra Especialidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8ac6d] to-white">Práctica</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Acompañamos a nuestros clientes con excelencia y compromiso en diversas ramas del derecho.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative bg-[#ffffff]/5 border border-[#ffffff]/10 p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-[#ffffff]/10 hover:border-[#d8ac6d]/50"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d8ac6d]/0 via-[#d8ac6d]/0 to-[#d8ac6d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-start gap-6">
                  <motion.div
                    className="bg-gradient-to-br from-[#d8ac6d] to-[#b3884b] p-4 rounded-xl flex-shrink-0 shadow-lg shadow-[#d8ac6d]/20"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#d8ac6d] transition-colors duration-300 sm:min-h-[3.5rem] lg:min-h-[4rem]">
                      {area.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
