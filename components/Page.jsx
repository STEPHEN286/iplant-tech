'use client'

import React from "react";

export default function PlantPalLandingPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      

   

     

      {/* How It Works Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-800">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6">
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="font-bold text-lg">Insert the Sensor</h3>
            <p>Place the device into your plant’s soil.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-bold text-lg">Connect to App</h3>
            <p>Sync via Bluetooth or Wi-Fi to begin monitoring.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-bold text-lg">Relax</h3>
            <p>iPlantTech watches over your plant’s needs in real time.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">4️⃣</div>
            <h3 className="font-bold text-lg">Get Smart Advice</h3>
            <p>Receive personalized care tips and reminders.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-800">Ready to Grow Smarter?</h2>
        <p className="mt-4 max-w-xl mx-auto">
          Join our waitlist and be the first to experience effortless plant care with a chance to win a free iPlantTech device.
        </p>
        <form id="waitlist" className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-800 transition">
            Join the Waitlist
          </button>
        </form>
      </section>

      
    </div>
  );
}
