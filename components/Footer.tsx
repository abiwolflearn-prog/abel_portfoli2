import React from 'react';
import { Github, Linkedin, Youtube, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-beige py-12 border-t border-papayaDark/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <span className="text-xl font-heading font-bold text-darkBrown tracking-tight block">
            Abel<span className="text-softBrown">.</span>
          </span>
          <p className="text-sm text-gray-500 mt-1">
            &copy; 2025 Abel. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-400 fill-current" />
          <span>and React</span>
        </div>

        <div className="flex gap-6">
           <a href="#" className="text-gray-500 hover:text-softBrown transition-colors">
             <Github size={20} />
           </a>
           <a href="#" className="text-gray-500 hover:text-softBrown transition-colors">
             <Linkedin size={20} />
           </a>
           <a href="#" className="text-gray-500 hover:text-softBrown transition-colors">
             <Youtube size={20} />
           </a>
        </div>
      </div>
    </footer>
  );
};