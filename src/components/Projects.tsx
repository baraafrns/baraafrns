import { motion } from 'motion/react';
import GlassCard from './GlassCard';
import { projects } from '../data';
import { ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Projects() {
  const { setCurrentView } = useAppContext();

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2 mb-6 opacity-60 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium"
          >
            All Projects
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <GlassCard className="h-full group flex flex-col gap-6 overflow-hidden">
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-current/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-3 flex-grow">
                <h3 className="text-2xl font-display font-medium">{project.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-2 py-1 bg-[var(--text-color)] text-[var(--bg-color)] rounded-md opacity-80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Space for mobile nav */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
}
