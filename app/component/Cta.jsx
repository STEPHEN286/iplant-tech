'use client'
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image'

export default function Cta() {
  const contactInfo = {
    email: { address: 'iplanttech.ai@gmail.com', link: 'mailto:iplanttech.ai@gmail.com' },
    phone: { number: '+233 50 024 2059', link: 'tel:+233 27 177 4756' },
    location: { text: 'Accra, Ghana' },
    availability: { text: 'Mon - Fri: 9 AM - 5 PM' },
  };



  return (
    <section id="contact" className="py-16 md:py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
          {/* Left Container: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/disgj6wx5/image/upload/v1750523602/t2iswmrctgp8cabex4lg.jpg"
              alt="Farm Transformation"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>



          <div className="md:w-1/2 bg-white p-8 md:p-12 text-gray-800 flex flex-col justify-between rounded-lg shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="text-lg text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href={contactInfo.email.link}
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      {contactInfo.email.address}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="text-lg text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a
                      href={contactInfo.phone.link}
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      {contactInfo.phone.number}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="text-lg text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600">{contactInfo.location.text}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Clock className="text-lg text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Availability</h4>
                    <p className="text-gray-600">{contactInfo.availability.text}</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}