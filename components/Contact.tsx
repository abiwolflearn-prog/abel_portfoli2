import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, Github, Linkedin, Youtube, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-offWhite to-papaya/20">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-glass overflow-hidden">
        <div className="grid md:grid-cols-2">
          
          {/* Contact Info */}
          <div className="p-10 bg-darkBrown text-papaya flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                Whether you have a project in mind, want to collaborate on a video, or just want to say hi—I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="text-papaya" size={18} />
                  <span>hello@abeldev.com</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Find me on</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-papaya hover:text-darkBrown transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-papaya hover:text-darkBrown transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-papaya hover:text-darkBrown transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-offWhite border border-gray-200 focus:border-papayaDark focus:ring-1 focus:ring-papayaDark outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-offWhite border border-gray-200 focus:border-papayaDark focus:ring-1 focus:ring-papayaDark outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-offWhite border border-gray-200 focus:border-papayaDark focus:ring-1 focus:ring-papayaDark outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
};