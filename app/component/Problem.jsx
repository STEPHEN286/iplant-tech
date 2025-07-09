'use client'

import React from 'react'

export default function Problem() {
  return (
        <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-800">The Problem</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          7 out of 10 indoor plant owners struggle to keep their plants alive. Overwatering, forgetfulness, and confusing care instructions lead to frustrated plant lovers and sad, dying greenery.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-green-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Overwatering</h3>
            <p>Most people water too much, drowning their plants unknowingly.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Insufficient Knowledge</h3>
            <p>It's hard to know what each plant needs, every species is different.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Busy Lifestyle</h3>
            <p>Plant care often takes a back seat in the rush of modern life.</p>
          </div>
        </div>
      </section>
  )
}
