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
            className="block md:hidden p-3 bg-transparent border-none cursor-pointer mr-2"
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: 'none',
            }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-6 h-0.5 bg-primary mb-1 block rounded-full"></span>
              <span className="w-6 h-0.5 bg-primary mb-1 block rounded-full"></span>
              <span className="w-6 h-0.5 bg-primary block rounded-full"></span>
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
            className="w-4/5 max-w-sm h-full glass shadow-lg p-6 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-primary">Menu</span>
              <button
                className="p-2 text-text-secondary hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                style={{ background: 'transparent', border: 'none' }}
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="text-left py-4 px-4 text-lg text-text-secondary hover:text-primary hover:bg-surface-light transition-all duration-300 font-medium rounded-lg"
                  onClick={() => scrollToSection(item.id)}
                  style={{ background: 'transparent', border: 'none' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-surface-light">
              <p className="text-text-muted text-sm text-center">
                &copy; 2024 Mateen Qazi
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 