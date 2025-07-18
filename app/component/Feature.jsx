'use client'
import { Droplet, Sun, Wind } from 'lucide-react'
import React from 'react'

export default function Feature() {
  return (
    <section id="features" className="py-16 md:py-20 bg-[#f8f9f2]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
                Smart pod Features for Smart Planting
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Our comprehensive plant care system combines cutting-edge technology with planting expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-lg border border-green-100 p-6 hover:shadow-md transition-all">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Irrigation</h3>
                <p>Automated watering system that adapts to your crops' needs and local weather conditions.</p>
              </div>

              
              <div className="bg-white rounded-lg border border-green-100 p-6 hover:shadow-md transition-all">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Crop Monitoring</h3>
                <p>Track sunlight exposure and soil conditions to optimize growth and yield.</p>
              </div>

              <div className="bg-white rounded-lg border border-green-100 p-6 hover:shadow-md transition-all sm:col-span-2 md:col-span-1">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Climate Analysis</h3>
                <p>Monitor temperature and humidity to create the perfect environment for your crops.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-lg text-gray-600 mb-6">
                Ready to transform your plant care experience?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#waitlist" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Join the Waitlist
                </a>
                <a href="/contact" className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}
