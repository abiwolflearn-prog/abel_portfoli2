import React from 'react';
import { Section } from './ui/Section';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const categories = [
    { title: 'Frontend Development', data: SKILLS.frontend },
    { title: 'Backend Development', data: SKILLS.backend },
    { title: 'Tools & Workflow', data: SKILLS.tools },
    { title: 'Media & Content', data: SKILLS.media },
  ];

  return (
    <Section id="skills" className="bg-white">
      <div className="text-center mb-16">
        <h3 className="text-papayaDark font-bold uppercase tracking-widest text-sm mb-2">Expertise</h3>
        <h2 className="text-4xl font-heading font-bold text-darkBrown">Technical Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-offWhite rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:border-papaya transition-colors"
          >
            <h4 className="font-heading font-semibold text-lg text-darkBrown mb-6 pb-2 border-b border-gray-200">
              {cat.title}
            </h4>
            <div className="flex flex-col gap-3">
              {cat.data.map((skill) => (
                <div key={skill} className="flex items-center justify-center">
                  <div className="w-full bg-white py-2 rounded-lg text-gray-600 text-sm font-medium shadow-sm border border-gray-50">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};