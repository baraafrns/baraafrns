import { motion } from 'motion/react';
import GlassCard from './GlassCard';
import { biodata, education, projects, techStack, socials } from '../data';
import { Github, Instagram, MessageCircle, ExternalLink, ArrowRight, Smartphone, BookOpen, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import React, { useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  const { setCurrentView } = useAppContext();
  const featuredProjects = projects.filter(p => p.featured);
  
  const [contactMsg, setContactMsg] = useState('');

  const handleWhatsappSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(contactMsg || "Hello, I would like to connect!");
    window.open(`${socials.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-24">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex flex-col items-center text-center gap-8 pt-10 md:pt-20"
      >
        <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full liquid-glass text-sm font-medium tracking-wide">
          Based in {biodata.location}
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden liquid-glass-strong border-4 border-[var(--glass-border)] shadow-2xl relative"
          >
            <img src={biodata.avatar} alt={biodata.name} className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight leading-tight">
          Crafting Digital <br className="hidden md:block"/>
          <span className="opacity-50">Experiences.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl text-lg md:text-xl opacity-80 font-light leading-relaxed">
          I am a {biodata.role} specializing in building exceptional digital experiences with a focus on modern design and scalable architecture.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex gap-4 mt-4">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-[var(--text-color)] text-[var(--bg-color)] font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Get in touch
          </button>
          <button 
            onClick={() => setCurrentView('projects')}
            className="px-8 py-4 rounded-full liquid-glass font-medium transition-transform hover:scale-105 active:scale-95"
          >
            View Work
          </button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <GlassCard className="md:col-span-8 flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-widest opacity-60 mb-6 font-medium">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight">
              Driven by curiosity and a passion for creating seamless software solutions.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-current/10">
            <div>
              <p className="text-sm opacity-60 mb-1">Name</p>
              <p className="font-medium text-lg">{biodata.name}</p>
            </div>
            <div>
              <p className="text-sm opacity-60 mb-1">Role</p>
              <p className="font-medium text-lg">{biodata.role}</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="md:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <BookOpen className="opacity-60" size={20} />
            <h2 className="text-sm uppercase tracking-widest opacity-60 font-medium">Education</h2>
          </div>
          <div className="mt-auto">
            <p className="text-sm font-medium opacity-60 mb-2">{education.period}</p>
            <p className="text-lg font-medium">{education.school}</p>
            <p className="opacity-80 mt-1">{education.major}</p>
          </div>
        </GlassCard>

        <GlassCard className="md:col-span-12">
          <h2 className="text-sm uppercase tracking-widest opacity-60 mb-6 font-medium">Hobbies & Interests</h2>
          <div className="flex flex-wrap gap-3">
            {biodata.hobbies.map(hobby => (
              <span key={hobby} className="px-5 py-2 rounded-full border border-current/10 text-sm font-medium hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors">
                {hobby}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.section>

      {/* Tech Stack */}
      <motion.section 
        id="stack"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex flex-col gap-8"
      >
        <h2 className="text-3xl font-display font-medium text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <motion.div 
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-4 rounded-2xl liquid-glass font-medium tracking-wider text-sm flex items-center justify-center min-w-[120px] gap-3"
            >
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
              {tech.name}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex flex-col gap-10"
      >
        <div className="flex justify-between items-end">
          <h2 className="text-3xl md:text-5xl font-display font-medium">Featured Work</h2>
          <button 
            onClick={() => setCurrentView('projects')}
            className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity pb-2 border-b border-current/20"
          >
            View All <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <GlassCard key={project.id} className="group cursor-none flex flex-col gap-6 overflow-hidden relative">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden">
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
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs font-medium px-2 py-1 bg-[var(--text-color)] text-[var(--bg-color)] rounded-md opacity-80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentView('projects')}
          className="md:hidden flex items-center justify-center gap-2 px-6 py-4 rounded-full liquid-glass"
        >
          View All Projects <ArrowRight size={16} />
        </button>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <GlassCard className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">Let's Connect</h2>
            <p className="opacity-70 text-lg">Have a project in mind or just want to say hi? Send me a message directly on WhatsApp.</p>
          </div>
          
          <form onSubmit={handleWhatsappSend} className="flex flex-col gap-4 mt-auto">
            <textarea 
              value={contactMsg}
              onChange={(e) => setContactMsg(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-4 rounded-xl liquid-glass outline-none resize-none h-32 focus:ring-1 ring-current/20 transition-shadow bg-transparent"
              required
            />
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] font-medium hover:opacity-90 transition-opacity"
            >
              Send via WhatsApp <Send size={18} />
            </button>
          </form>
        </GlassCard>

        <div className="flex flex-col gap-6">
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="flex-1">
            <GlassCard strong className="h-full flex items-center justify-between group hover:bg-[#E1306C] hover:text-white transition-colors cursor-none border-transparent hover:border-[#E1306C]/50">
              <div className="flex items-center gap-4">
                <Instagram size={28} className="text-[#E1306C] group-hover:text-white transition-colors" />
                <span className="text-xl font-medium">Instagram</span>
              </div>
              <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </GlassCard>
          </a>
          
          <a href={socials.github} target="_blank" rel="noreferrer" className="flex-1">
            <GlassCard strong className="h-full flex items-center justify-between group hover:bg-[#181717] dark:hover:bg-white dark:hover:text-[#181717] hover:text-white transition-colors cursor-none border-transparent hover:border-[#181717]/50">
              <div className="flex items-center gap-4">
                <Github size={28} className="text-[#181717] dark:text-white group-hover:text-white dark:group-hover:text-[#181717] transition-colors" />
                <span className="text-xl font-medium">GitHub</span>
              </div>
              <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </GlassCard>
          </a>
          
          <a href={socials.discord} target="_blank" rel="noreferrer" className="flex-1">
            <GlassCard strong className="h-full flex items-center justify-between group hover:bg-[#5865F2] hover:text-white transition-colors cursor-none border-transparent hover:border-[#5865F2]/50">
              <div className="flex items-center gap-4">
                <MessageCircle size={28} className="text-[#5865F2] group-hover:text-white transition-colors" />
                <span className="text-xl font-medium">Discord</span>
              </div>
              <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </GlassCard>
          </a>
        </div>
      </motion.section>
      
      {/* Footer Space for mobile nav */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
}
