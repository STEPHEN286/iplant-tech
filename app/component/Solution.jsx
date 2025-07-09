'use client'

import React from 'react'

export default function Solution() {
  return (
     <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Meet iPlantTech</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          A smart sensor and app that work together to help you care for your plants in real time. No stress. No dying plants. Just peace of mind.
        </p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          <li className="bg-green-600 p-4 rounded-xl shadow">
            
            🌿 Monitors moisture, sunlight, temperature, nutrients, and health

          </li>
          <li className="bg-green-600 p-4 rounded-xl shadow">
            📲 Sends real-time care alerts to your phone
          </li>
          <li className="bg-green-600 p-4 rounded-xl shadow">
            🔔 Reminds you exactly when to water or move your plant
          </li>
          <li className="bg-green-600 p-4 rounded-xl shadow">
            🧠 Learns from your care habits to offer smarter advice
          </li>
        </ul>
      </section>

  )
}
