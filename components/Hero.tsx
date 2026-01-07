'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2D7AFD]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#004AAD]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2D7AFD]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white shadow-xl rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/icon.png"
                alt="Blumos Labs"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                priority
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Innovating the Future with
            <span className="block mt-2 bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] bg-clip-text text-transparent">
              Smart Solutions
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2D7AFD] mb-4 tracking-wide">
            Powering the Edge
          </p>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hardware & Software Solutions for GPS, EV Battery Management, and Beyond
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#solutions"
              className="w-full sm:w-auto bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Solutions
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-white text-[#004AAD] border-2 border-[#2D7AFD] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D7AFD] hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#2D7AFD] text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">GPS Technology</h3>
              <p className="text-gray-600 text-sm">Advanced tracking and navigation solutions</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#2D7AFD] text-4xl mb-4">🔋</div>
              <h3 className="font-bold text-lg mb-2">EV Battery Systems</h3>
              <p className="text-gray-600 text-sm">Intelligent battery management software</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#2D7AFD] text-4xl mb-4">🔧</div>
              <h3 className="font-bold text-lg mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">Tailored hardware & software products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2D7AFD] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2D7AFD] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
