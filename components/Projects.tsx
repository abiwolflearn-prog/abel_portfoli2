import React from 'react';
import { Section } from './ui/Section';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-offWhite">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-papayaDark font-bold uppercase tracking-widest text-sm mb-2">Portfolio</h3>
        <h2 className="text-4xl font-heading font-bold text-darkBrown">Recent Projects</h2>
        <p className="text-gray-600 mt-4">
          A selection of my favorite works, ranging from utility apps to creative web platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden h-64">
              <div className="absolute inset-0 bg-darkBrown/10 group-hover:bg-darkBrown/0 transition-colors duration-300 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-papaya/10">
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold text-darkBrown mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-softBrown bg-papaya px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100">
                <a 
                  href={project.demoLink} 
                  className="flex items-center text-sm font-semibold text-darkBrown hover:text-softBrown transition-colors"
                >
                  Live Demo <ExternalLink className="ml-1 w-4 h-4" />
                </a>
                <a 
                  href={project.repoLink} 
                  className="flex items-center text-sm font-semibold text-darkBrown hover:text-softBrown transition-colors"
                >
                  GitHub <Github className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};