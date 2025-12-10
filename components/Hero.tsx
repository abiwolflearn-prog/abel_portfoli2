import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { ArrowRight, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-papaya rounded-full blur-3xl opacity-60"
        />
        <motion.div 
           animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-80 h-80 bg-beige rounded-full blur-3xl opacity-70"
        />
        <motion.div 
           animate={{ 
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-papayaDark/20 rounded-full blur-3xl"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          <h2 className="text-softBrown font-medium text-xl tracking-wide uppercase">
            Full Stack Developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-darkBrown leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-softBrown to-papayaDark">Abel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            I build modern, clean, and user-friendly web experiences. Bridging the gap between code and creativity as a video editor and YouTuber.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href="#projects" variant="primary">
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me <Mail className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
             {/* Soft decorative ring */}
            <div className="absolute inset-0 border-2 border-papaya rounded-full transform translate-x-4 translate-y-4"></div>
            <div className="w-full h-full rounded-full overflow-hidden shadow-soft border-4 border-white bg-white">
              <img 
                src="https://picsum.photos/800/800" 
                alt="Abel" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-papaya"
            >
              <span className="text-2xl">🎥</span>
              <span className="font-bold text-darkBrown ml-2">Content Creator</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};