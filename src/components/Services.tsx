import { Cog, Wrench, Factory, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cog,
      title: 'Automotive Exhaust System Parts',
      description: 'Specialized tools for exhaust system components including flanges, pipes, and catalytic converter parts',
      color: 'blue',
    },
    {
      icon: Settings,
      title: 'Automotive Suspension Parts',
      description: 'Precision tools for suspension components, brackets, and mounting systems',
      color: 'cyan',
    },
    {
      icon: Wrench,
      title: 'Seating Components',
      description: 'Manufacturing tools for automotive seating bollers and related parts',
      color: 'green',
    },
    {
      icon: Factory,
      title: 'Sheet Metal Components',
      description: 'Press tools, fixtures, and panel checkers for critical sheet metal parts',
      color: 'yellow',
    },
  ];

  const capabilities = [
    {
      title: 'Design & Engineering',
      items: ['3D CAD Design', 'Tool Design', 'Process Planning', 'DFM Analysis'],
    },
    {
      title: 'Manufacturing',
      items: ['VMC Machining', 'Conventional Machining', 'Heat Treatment', 'Assembly'],
    },
    {
      title: 'Quality Control',
      items: ['CMM Inspection', 'In-Process Checks', 'Final Testing', 'Documentation'],
    },
    {
      title: 'Services',
      items: ['MIG Welding', 'Tool Maintenance', 'Modifications', 'Technical Support'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services & Capabilities</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tooling solutions for the automotive industry with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              cyan: 'bg-cyan-100 text-cyan-600',
              green: 'bg-green-100 text-green-600',
              yellow: 'bg-yellow-100 text-yellow-600',
            };
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-blue-600 mb-4">{capability.title}</h4>
                <ul className="space-y-2">
                  {capability.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">VMC Hartford LG1370</div>
            <p className="text-blue-100">Advanced CNC Machining Center</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">3 Press Machines</div>
            <p className="text-cyan-100">83, 110, and 160 Ton Capacity</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">5000 Sq. Ft</div>
            <p className="text-green-100">State-of-the-art Facility</p>
          </div>
        </div>
      </div>
    </section>
  );
}
