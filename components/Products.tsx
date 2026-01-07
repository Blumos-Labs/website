'use client';

export default function Products() {
  const products = [
    {
      category: 'GPS & Tracking',
      name: 'Blumos Track Pro',
      description: 'Advanced GPS tracking device with real-time monitoring, 4G LTE connectivity, and cloud-based fleet management. Built for commercial vehicles, logistics, and asset tracking.',
      features: [
        'Real-time GPS tracking with 4G LTE',
        'Geofencing and route optimization',
        'Driver behavior monitoring',
        'Cloud-based web & mobile dashboard',
        'Tamper alerts and security features',
        'Historical playback and reports',
      ],
      badge: 'Popular',
      badgeColor: 'bg-green-500',
    },
    {
      category: 'Software - BMS Utility',
      name: 'Smart BMS Utility',
      description: 'Professional Battery Management System software for monitoring, configuring, and analyzing lithium-ion battery packs. Complete solution for EV batteries and energy storage systems.',
      features: [
        'Real-time battery monitoring',
        'Cell voltage and temperature analysis',
        'SOC/SOH estimation and calibration',
        'BMS configuration and parameter setup',
        'Data logging and export',
        'Multi-protocol support (CAN, RS485, Bluetooth)',
      ],
      badge: 'Featured',
      badgeColor: 'bg-[#2D7AFD]',
    },
    {
      category: 'IoT Platform',
      name: 'Blumos Connect',
      description: 'Unified IoT platform for device management, data analytics, and remote monitoring. Connect all your GPS trackers, BMS devices, and sensors in one dashboard.',
      features: [
        'Multi-device management',
        'Real-time data streaming',
        'Custom dashboards and alerts',
        'REST API and webhook integration',
        'Mobile & web access',
        'Historical data analytics',
      ],
      badge: 'New',
      badgeColor: 'bg-purple-500',
    },
    {
      category: 'Hardware',
      name: 'Custom IoT Solutions',
      description: 'Tailored hardware solutions for your specific needs. From GPS trackers to battery monitors, we design and manufacture custom IoT devices for various industries.',
      features: [
        'Custom PCB design',
        'Embedded systems development',
        'Multiple connectivity options',
        'Sensor integration',
        'Ruggedized enclosures',
        'Certification support',
      ],
      badge: null,
      badgeColor: '',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative hardware and software products designed to solve real-world challenges
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2D7AFD] group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm font-semibold text-[#2D7AFD] uppercase tracking-wide mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#2D7AFD] transition-colors">
                    {product.name}
                  </h3>
                </div>
                {product.badge && (
                  <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-[#2D7AFD] mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-block w-full text-center bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-br from-[#2D7AFD] to-[#004AAD] rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Custom Solutions Available
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Need something specific? We design and develop custom hardware and software solutions tailored to your unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold mb-2">R&D Expertise</h4>
              <p className="text-sm opacity-90">Continuous innovation and research-driven development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h4 className="text-xl font-bold mb-2">Rapid Prototyping</h4>
              <p className="text-sm opacity-90">Fast iteration from concept to working prototype</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Full-Stack Development</h4>
              <p className="text-sm opacity-90">Complete end-to-end solution development</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-white text-[#004AAD] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Request Custom Solution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
