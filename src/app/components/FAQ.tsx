import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const faqs = [
  {
    question: '¿Cómo puedo realizar una consulta?',
    answer: 'Podés comunicarte con nuestro estudio a través del formulario de contacto o directamente por WhatsApp para recibir asesoramiento. También ofrecemos atención por redes sociales y videollamada para tu comodidad.'
  },
  {
    question: '¿La primera consulta tiene costo?',
    answer: 'La consulta inicial permite evaluar el caso y definir el asesoramiento adecuado según cada situación, lo que permite indicar su costo.'
  },
  {
    question: '¿Atienden solo en Paraná?',
    answer: 'Nuestro estudio tiene sede en Paraná y brinda atención en toda la provincia de Entre Ríos. También ofrecemos consultas por videollamada para mayor accesibilidad.'
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#f9f9f9] to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-[#d8ac6d]/10 mb-6 text-[#d8ac6d]">
            <MessageCircleQuestion className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-4 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-[#524F4C] text-lg max-w-2xl mx-auto">
            Resolvemos sus dudas iniciales para que pueda tomar la mejor decisión con confianza.
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden data-[state=open]:border-[#d8ac6d]/30 transition-all duration-300"
              >
                <Accordion.Trigger className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 hover:bg-[#fcfcfc] transition-colors group">
                  <span className="text-left font-bold text-[#000000] text-base sm:text-lg group-data-[state=open]:text-[#d8ac6d] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-[#d8ac6d]/10 transition-colors">
                    <ChevronDown className="w-5 h-5 text-[#524F4C] group-data-[state=open]:text-[#d8ac6d] transition-transform duration-500 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_300ms_ease-out] data-[state=closed]:animate-[slideUp_300ms_ease-out]">
                  <div className="px-6 sm:px-8 pb-6 pt-2 text-[#524F4C] leading-relaxed text-base sm:text-lg">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}