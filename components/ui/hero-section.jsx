import React from 'react';

export function HeroSection({ 
  backgroundImage, 
  title, 
  description, 
  layout = "default", 
  overlayOpacity = "bg-black/50", 
  height = "h-[400px]" 
}) {
  return (
    <section 
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
} 