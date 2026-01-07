'use client';

export default function Solutions() {
  const solutions = [
    {
      icon: '🛰️',
      title: 'GPS & Vehicle Tracking',
      description: 'Enterprise GPS tracking solutions with 4G LTE connectivity, real-time monitoring, and cloud-based fleet management for commercial vehicles and logistics.',
      features: ['Real-time tracking', 'Fleet management', 'Driver behavior analysis', 'Route optimization', 'Geofencing alerts'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: '🔋',
      title: 'Battery Management Systems',
      description: 'Professional BMS software and hardware solutions for lithium-ion battery packs, EV batteries, and energy storage systems with comprehensive monitoring and configuration.',
      features: ['SOC/SOH monitoring', 'Cell balancing', 'BMS configuration', 'Data logging', 'Multi-protocol support'],
      color: 'from-[#2D7AFD] to-[#004AAD]',
    },
    {
      icon: '☁️',
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud platform for managing GPS trackers, battery systems, and IoT devices with real-time data analytics and custom dashboards.',
      features: ['Multi-device management', 'Real-time analytics', 'API integration', 'Mobile & web access', 'Custom alerts'],
      color: 'from-indigo-500 to-purple-700',
    },
    {
      icon: '🔧',
      title: 'Custom Hardware Development',
      description: 'Design and manufacturing of custom IoT hardware including GPS trackers, battery monitors, and embedded systems for specialized applications.',
      features: ['PCB design', 'Embedded firmware', 'Sensor integration', 'Prototyping', 'Manufacturing support'],
      color: 'from-cyan-500 to-blue-700',
    },
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions including desktop applications, mobile apps, and web platforms for industrial and commercial applications.',
      features: ['Desktop applications', 'Mobile apps', 'Web platforms', 'Database design', 'Cloud integration'],
      color: 'from-blue-600 to-indigo-700',
    },
    {
      icon: '⚡',
      title: 'Edge Computing Solutions',
      description: 'Edge computing and data processing solutions for real-time decision making, reducing latency and bandwidth requirements.',
      features: ['Real-time processing', 'Local data analytics', 'Reduced latency', 'Offline capability', 'Edge AI'],
      color: 'from-slate-600 to-slate-800',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive hardware and software solutions designed to drive innovation across multiple industries
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#2D7AFD]"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2D7AFD] transition-colors">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#2D7AFD] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
