import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-papayaDark";
  
  const variants = {
    primary: "bg-softBrown text-white hover:bg-darkBrown shadow-lg hover:shadow-soft",
    secondary: "bg-papaya text-darkBrown hover:bg-papayaDark shadow-lg hover:shadow-soft",
    outline: "border-2 border-softBrown text-softBrown hover:bg-softBrown hover:text-white",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};