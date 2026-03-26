import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '@/assets/6748625df0920d908e397e95d9b2dd954daeb897.webp';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    { label: 'Sobre Nosotros', id: 'about' },
    { label: 'Áreas de Práctica', id: 'areas' },
    { label: 'Equipo', id: 'team' },
    { label: 'Consultas', id: 'faq' },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6"
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        paddingTop: isScrolled ? '12px' : '0px'
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <motion.nav
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-xl rounded-2xl' 
            : 'bg-transparent'
        }`}
        animate={{
          borderRadius: isScrolled ? '16px' : '0px',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <motion.div 
          className="max-w-7xl mx-auto px-6"
          animate={{
            paddingTop: isScrolled ? '12px' : '16px',
            paddingBottom: isScrolled ? '12px' : '16px',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={logoImage}
                alt="Paraná Legal — Estudio Jurídico Integral en Paraná, Entre Ríos"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-0' : 'brightness-0 invert'
                }`}
                animate={{
                  height: isScrolled ? '48px' : '60px',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium hover:text-[#d8ac6d] transition-colors ${
                    isScrolled ? 'text-[#000000]' : 'text-white'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-[#d8ac6d] hover:bg-[#c99b5c] text-white px-6 py-2 rounded-lg transition-colors duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contacto
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-[#000000]' : 'text-white'}`}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className={`md:hidden pt-4 pb-6 px-2 space-y-1 origin-top ${
                  !isScrolled ? 'bg-black/90 backdrop-blur-md rounded-2xl mt-2' : ''
                }`}
                initial={{ opacity: 0, scaleY: 0.6 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.6 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium hover:bg-[#d8ac6d]/10 hover:text-[#d8ac6d] transition-colors ${
                      isScrolled ? 'text-[#000000]' : 'text-white'
                    }`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#d8ac6d] hover:bg-[#c99b5c] text-white text-base font-semibold px-6 py-3 rounded-xl transition-colors duration-300 w-full mt-3"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                >
                  Contacto
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}