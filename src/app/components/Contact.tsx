import { useState, useRef } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import gareisFoto from '@/assets/319580ecb14ee19e4837478307535e23137c8e4d.webp';
import fowlerFoto from '@/assets/9c59ee4dd4fbff84b2045070d6201afd4aaff0b6.webp';
import harringtonFoto from '@/assets/60de1ab3dd863e350d2c56b64d6db05cf9351f5e.webp';

const professionals = [
  { name: 'Dr. Joaquín Gareis', role: 'Derecho Administrativo, Constitucional y Laboral', whatsapp: '5493434519112', image: gareisFoto },
  { name: 'Dra. Julieta Fowler', role: 'Derecho de Daños y Laboral', whatsapp: '5493436101776', image: fowlerFoto },
  { name: 'Dra. María Carolina Harrington', role: 'Derecho de Familia, Sucesiones y Daños', whatsapp: '5493434757858', image: harringtonFoto },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [selectedPro, setSelectedPro] = useState<number | null>(null);
  const [attempted, setAttempted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) return;

    const target = selectedPro !== null ? professionals[selectedPro] : null;
    const whatsappPhone = target ? target.whatsapp : '5493434706093';

    let whatsappMessage = `Hola${target ? ` ${target.name.split(' ')[1]}` : ''}, soy ${formData.name}.\n`;
    whatsappMessage += `Teléfono: ${formData.phone}\n`;
    if (formData.email) {
      whatsappMessage += `Email: ${formData.email}\n`;
    }
    whatsappMessage += `\nConsulta: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappPhone}?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    { id: 'name', label: 'Nombre Completo', type: 'text', placeholder: 'Ej: Juan Pérez', required: true },
    { id: 'phone', label: 'Teléfono / WhatsApp', type: 'tel', placeholder: 'Ej: +54 343 000 0000', required: true },
    { id: 'email', label: 'Email (opcional)', type: 'email', placeholder: 'ejemplo@correo.com', required: false },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-[#d8ac6d]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#d8ac6d] font-bold tracking-widest uppercase text-sm block mb-3">Asesoramiento Legal</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Solicitar Consulta
          </h2>
          <p className="text-gray-400 text-lg mb-2 max-w-2xl mx-auto">
            Envíenos su consulta. Nuestro equipo se pondrá en contacto para brindarle una respuesta precisa y confidencial.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className={`bg-[#0a0a0a]/95 border border-[#ffffff]/10 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl relative ${attempted ? 'group/form' : ''}`}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] pointer-events-none" />

          {/* Selector de profesional */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <label className="block text-gray-300 text-sm font-medium mb-3 pl-1">
              ¿Con quién desea consultar?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {professionals.map((pro, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => setSelectedPro(selectedPro === index ? null : index)}
                  className={`relative text-left p-4 rounded-xl border transition-all duration-300 group flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 ${
                    selectedPro === index
                      ? 'border-[#d8ac6d] bg-[#d8ac6d]/10'
                      : 'border-[#ffffff]/10 bg-[#000000]/30 hover:border-[#d8ac6d]/40 hover:bg-[#ffffff]/5'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className={`absolute top-3 right-3 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    selectedPro === index
                      ? 'border-[#d8ac6d] bg-[#d8ac6d]'
                      : 'border-[#ffffff]/20'
                  }`}>
                    {selectedPro === index && (
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      />
                    )}
                  </div>
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className={`w-9 h-9 rounded-lg object-cover object-top sm:mb-3 flex-shrink-0 transition-all duration-300 ${
                      selectedPro === index ? 'ring-2 ring-[#d8ac6d]' : 'opacity-70 grayscale-[30%]'
                    }`}
                  />
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm leading-tight mb-0.5 sm:mb-1 transition-colors duration-300 ${
                      selectedPro === index ? 'text-[#d8ac6d]' : 'text-white'
                    }`}>
                      {pro.name}
                    </p>
                    <p className="text-gray-500 text-xs leading-tight">
                      {pro.role}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
            {selectedPro === null && (
              <p className="text-gray-600 text-xs mt-2 pl-1">Opcional — si no elige, recibiremos su consulta en el estudio.</p>
            )}
          </motion.div>

          {/* Campos del formulario */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {fields.map((field, index) => (
              <motion.div
                key={field.id}
                className={field.id === 'email' ? 'md:col-span-2' : ''}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <label htmlFor={field.id} className="block text-gray-300 text-sm font-medium mb-2 pl-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required={field.required}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className={`w-full bg-[#000000]/50 border text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d8ac6d] focus:border-transparent transition-all duration-300 placeholder-gray-600 hover:border-[#ffffff]/20 ${
                    attempted && field.required && !formData[field.id as keyof typeof formData].trim()
                      ? 'border-red-500/60 ring-1 ring-red-500/30'
                      : 'border-[#ffffff]/10'
                  }`}
                  placeholder={field.placeholder}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2 pl-1">
              Detalle de su Consulta
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-[#000000]/50 border text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d8ac6d] focus:border-transparent transition-all duration-300 resize-none placeholder-gray-600 hover:border-[#ffffff]/20 ${
                attempted && !formData.message.trim()
                  ? 'border-red-500/60 ring-1 ring-red-500/30'
                  : 'border-[#ffffff]/10'
              }`}
              placeholder="Describa brevemente su situación..."
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full relative group overflow-hidden bg-gradient-to-r from-[#d8ac6d] to-[#b3884b] text-black font-bold px-6 py-4 md:py-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(216,172,109,0.2)] hover:shadow-[0_0_40px_rgba(216,172,109,0.4)] flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <MessageCircle className="w-5 h-5 relative z-10 flex-shrink-0" />
            <span className="relative z-10 text-base md:text-lg leading-tight text-center">
              {selectedPro !== null
                ? <>
                    <span className="hidden sm:inline">{`Enviar consulta a ${professionals[selectedPro].name.split(' ').slice(0, 2).join(' ')}`}</span>
                    <span className="sm:hidden">{`Consultar a ${professionals[selectedPro].name.split(' ')[1]}`}</span>
                  </>
                : <>
                    <span className="hidden sm:inline">Enviar consulta por WhatsApp</span>
                    <span className="sm:hidden">Enviar consulta por WhatsApp</span>
                  </>
              }
            </span>
            <Send className="w-4 h-4 relative z-10 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform hidden sm:block" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
