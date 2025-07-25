'use client'

import { Leaf } from 'lucide-react';
import React from 'react';
import Image from 'next/image'

export default function Footer() {
  const contactInfo = {
    email: { label: 'Email', value: 'iplanttech.ai@gmail.com', link: 'mailto:iplanttech.ai@gmail.com' },
    phone: { label: 'Phone', value: '+233 50 024 2059', link: 'tel:+23350242059' },
    location: { label: 'Location', value: 'Accra, Ghana' },
    availability: { label: 'Availability', value: 'Mon - Fri: 9 AM - 5 PM' },
  };

  return (
    <footer className="bg-[#1c2a1c] text-white py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <Image src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg" alt="logo" width={32} height={32} className="h-8 w-auto" />
            </div>
            <p className="text-gray-400">Transforming planting with smart technology since 2025</p>
          </div>

          <div className="text-left">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">

              <li>
                <a href="https://iplantechsite.vercel.app/" className="text-gray-400 hover:text-white transition-colors">
                 Direct Website
                </a>
              </li>
              
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-bold mb-4">Contact Us</h3>
            {Object.entries(contactInfo).map(([key, info]) => (
              <p key={key} className="text-gray-400 mb-2">
                {info.label}:{" "}
                {info.link ? (
                  <a href={info.link} className="hover:text-white transition-colors underline">
                    {info.value}
                  </a>
                ) : (
                  info.value
                )}
              </p>
            ))}
          </div>

         
        </div>

        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} iPlantTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
