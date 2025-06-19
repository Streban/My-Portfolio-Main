import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu on nav click
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between pt-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '0.5rem 0',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="block md:hidden p-2 bg-transparent border-none cursor-pointer"
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: 'none',
            }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-5 h-0.5 bg-primary mb-1 block"></span>
              <span className="w-5 h-0.5 bg-primary mb-1 block"></span>
              <span className="w-5 h-0.5 bg-primary block"></span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <motion.div
            className="w-3/4 max-w-xs h-full bg-white dark:bg-gray-900 shadow-lg p-8 flex flex-col gap-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-8 text-2xl text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              &times;
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-lg text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-left"
                onClick={() => scrollToSection(item.id)}
                style={{ background: 'transparent', border: 'none', padding: '1rem 0' }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 