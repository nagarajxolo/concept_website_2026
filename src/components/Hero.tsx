import { ArrowRight, Award } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <Award className="text-blue-600" size={20} />
              <span className="text-blue-600 font-medium text-sm">ISO 9001:2015 Certified</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Precision Engineering
              <span className="block text-blue-600">Excellence Since 2011</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Leading manufacturer of press tools, jigs, fixtures, rubber moulds, and press components for the automotive industry.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">13+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">Sq. Ft. Facility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">12+</div>
                <div className="text-sm text-gray-600">Major Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Manufacturers of:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-lg">PRESS TOOLS & JIGS</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-lg">FIXTURES</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-lg">RUBBER MOULDS</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span className="text-lg">PRESS COMPONENTS</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-blue-100 text-sm">
                  Specializing in automotive exhaust systems, suspension parts, and sheet metal components
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
