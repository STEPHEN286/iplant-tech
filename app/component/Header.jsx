'use client'
import React, { useState } from 'react'
// import { a } from 'react-router-dom'
import { Leaf } from "lucide-react"
import Image from 'next/image'

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
     <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <Image src="https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg" alt="logo" width={20} height={20} className="h-5 w-auto" />
            </a>
          </div>

          
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#features" className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
              Features
            </a>
            {/* <a href="#waitlist" className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
              Join Waitlist
            </a> */}
            <a href="/contact" className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
              Contact
            </a>
          </nav>

       
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900 p-2"
            aria-label="toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-900 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-900 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
           
              <a
                href="/contact"
                className="text-gray-900 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
  )
}
