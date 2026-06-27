import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreHorizontal, Home, Grid, Moon, Sun, User, Code, Mail } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Navigation() {
  const { currentView, setCurrentView, isDarkMode, toggleDarkMode } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, action: () => setCurrentView('home') },
    { id: 'about', label: 'About', icon: User, action: () => { setCurrentView('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { id: 'stack', label: 'Tech Stack', icon: Code, action: () => { setCurrentView('home'); setTimeout(() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { id: 'projects', label: 'Projects', icon: Grid, action: () => setCurrentView('projects') },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => { setCurrentView('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center px-6 py-3 rounded-full liquid-glass gap-8"
      >
        <div className="flex items-center gap-6 font-display font-medium text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`hover:opacity-60 transition-opacity ${currentView === item.id || (item.id === 'projects' && currentView === 'projects') ? 'opacity-100' : 'opacity-80'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="w-px h-4 bg-current opacity-20" />
        <button onClick={toggleDarkMode} className="hover:opacity-60 transition-opacity p-1">
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </motion.nav>

      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-24 right-6 z-50 md:hidden flex flex-col-reverse items-end gap-4">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full liquid-glass-strong flex items-center justify-center shadow-xl active:scale-95 transition-transform"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <MoreHorizontal size={24} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col gap-3"
            >
              <button 
                onClick={() => { toggleDarkMode(); setIsOpen(false); }}
                className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {[...navItems].reverse().map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => { item.action(); setIsOpen(false); }}
                  className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center"
                >
                  <item.icon size={20} />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
