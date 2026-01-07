'use client';

export default function About() {
  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Industry Solutions' },
    { number: '24/7', label: 'Support Available' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation First',
      description: 'We leverage cutting-edge technology to create solutions that push boundaries and drive progress.',
    },
    {
      icon: '🤝',
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.',
    },
    {
      icon: '⚡',
      title: 'Quality & Reliability',
      description: 'Our solutions are built to last, with rigorous testing and quality assurance at every stage.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'We serve clients worldwide, bringing innovative solutions to diverse industries and markets.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-[#2D7AFD] to-[#004AAD] bg-clip-text text-transparent">Blumos Labs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of technology with innovative hardware and software solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Industries Through Technology
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Blumos Labs is a dynamic technology company specializing in cutting-edge hardware and software solutions.
                We focus on GPS technology, EV battery management systems, and custom solutions across various industries.
              </p>
              <p>
                Our expertise spans from embedded systems and IoT devices to cloud-based software platforms and mobile applications.
                We combine deep technical knowledge with industry insights to deliver solutions that drive real business value.
              </p>
              <p>
                While we excel in the electric vehicle sector with advanced battery management systems, our versatile approach
                allows us to serve diverse industries including logistics, manufacturing, agriculture, and smart cities.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#2D7AFD] to-[#004AAD] rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2D7AFD] transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Technologies We Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['IoT', 'GPS', 'BMS', 'Cloud Computing', 'AI/ML', 'Embedded Systems', 'Mobile Apps', 'Web Platforms', 'Data Analytics', 'Blockchain', 'Edge Computing', '5G'].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg hover:bg-[#2D7AFD] hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
