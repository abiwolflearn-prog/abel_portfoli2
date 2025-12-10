import React from 'react';
import { Section } from './ui/Section';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-12 gap-12">
        
        {/* Bio */}
        <div className="md:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-papayaDark font-bold uppercase tracking-widest text-sm mb-2">About Me</h3>
            <h2 className="text-4xl font-heading font-bold text-darkBrown mb-6">
              Blending Tech & Creativity
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hello! I'm Abel, a passionate developer who loves turning complex problems into simple, beautiful, and intuitive interface designs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              My journey started with video editing, teaching me the importance of storytelling and flow. Now, I apply those same principles to Full Stack Development, ensuring every user interaction feels seamless. When I'm not coding, I'm creating content for YouTube, sharing my learning journey and tech tips.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="md:col-span-5">
          <h3 className="text-xl font-heading font-semibold text-darkBrown mb-8">My Journey</h3>
          <div className="space-y-8 border-l-2 border-papaya ml-3 pl-8 relative">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-papaya border-4 border-white shadow-sm"></span>
                <h4 className="text-lg font-bold text-darkBrown">{exp.role}</h4>
                <span className="text-sm text-softBrown font-medium bg-papaya/30 px-2 py-1 rounded-md inline-block my-1">
                  {exp.period}
                </span>
                <p className="text-gray-500 text-sm mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};