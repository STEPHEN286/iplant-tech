import React from 'react';

export function Map({ src, height = "400px", title = "Map" }) {
  return (
    <div className="w-full">
      <iframe
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
} 