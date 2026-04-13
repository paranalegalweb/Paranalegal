import { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronRight, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import fowlerFoto from '@/assets/9c59ee4dd4fbff84b2045070d6201afd4aaff0b6.webp';
import gareisFoto from '@/assets/319580ecb14ee19e4837478307535e23137c8e4d.webp';
import harringtonFoto from '@/assets/60de1ab3dd863e350d2c56b64d6db05cf9351f5e.webp';

const contacts = [
  { name: 'Dra. Julieta Fowler', short: 'Julieta', role: 'Daños y Laboral', whatsapp: '5493436101776', image: fowlerFoto },
  { name: 'Dr. Joaquín Gareis', short: 'Joaquín', role: 'Administrativo y Constitucional', whatsapp: '5493434519112', image: gareisFoto },
  { name: 'Dra. M. Carolina Harrington', short: 'Carolina', role: 'Familia, Sucesiones y Daños', whatsapp: '5493434757858', image: harringtonFoto },
];

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show buttons based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
      setShowScrollTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const openWhatsApp = (phone: string, name: string) => {
    const msg = encodeURIComponent(`Hola ${name}, me gustaría consultar sobre servicios legales.`);
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Selector panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-5 sm:right-8 z-[61] w-[calc(100vw-2.5rem)] sm:w-80"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#0a0a0a] border border-[#ffffff]/15 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden" role="dialog" aria-label="Seleccionar profesional para WhatsApp">
              {/* Header */}
              <div className="px-5 pt-5 pb-3">
                <p className="text-white font-bold text-base">¿Con quién desea hablar?</p>
                <p className="text-gray-500 text-xs mt-1">Seleccione un profesional o consulte al estudio</p>
              </div>

              {/* Contact list */}
              <div className="px-3 pb-3 space-y-1">
                {contacts.map((contact, i) => (
                  <motion.button
                    key={i}
                    onClick={() => openWhatsApp(contact.whatsapp, contact.short)}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#ffffff]/8 transition-colors duration-200 group text-left"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={contact.image}
                      alt={contact.name}
                      loading="lazy"
                      className="w-10 h-10 rounded-xl object-cover object-top flex-shrink-0 border border-[#d8ac6d]/20"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate group-hover:text-[#d8ac6d] transition-colors duration-200">
                        {contact.name}
                      </p>
                      <p className="text-gray-500 text-xs truncate">{contact.role}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#d8ac6d] flex-shrink-0 group-hover:translate-x-0.5 transition-all duration-200" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Arrow pointing to FAB */}
            <div className="flex justify-end pr-7">
              <div className="w-4 h-4 bg-[#0a0a0a] border-r border-b border-[#ffffff]/15 rotate-45 -mt-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {show && showScrollTop && !isOpen && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-[88px] right-5 sm:right-8 z-[62] w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white/70 hover:text-[#d8ac6d] hover:border-[#d8ac6d]/40 transition-colors duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <AnimatePresence>
        {show && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-5 sm:right-8 z-[62] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.5)] transition-shadow duration-300"
            style={{ backgroundColor: isOpen ? '#1a1a1a' : '#25D366' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label={isOpen ? 'Cerrar selector' : 'Contactar por WhatsApp'}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="wa"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Pulse ring when closed */}
      <AnimatePresence>
        {show && !isOpen && (
          <motion.div
            className="fixed bottom-6 right-5 sm:right-8 z-[59] w-14 h-14 rounded-full pointer-events-none"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ backgroundColor: '#25D366' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
