import { Award } from 'lucide-react';

export default function Clients() {
  const clients = [
    'Tenneco',
    'Sharda Motor Industries',
    'Nash Inspired Engineering',
    'Montaplast',
    'SM Auto',
    'Active Chromewell Exhaust',
    'Rucha Engineering 2.0',
    'Matrixx Components',
    'AVI Worldwide',
    'Eberspacher',
  ];

  return (
    <section id="clients" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Award className="text-blue-600" size={20} />
            <span className="text-blue-600 font-medium text-sm">Tier 1 Supplier Status</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Esteemed Clients</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading automotive and manufacturing companies across the nation
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 border-2 border-gray-100 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <span className="text-center text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border-t-4 border-blue-600">
            <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
            <p className="text-gray-600 font-medium">Major Clients</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border-t-4 border-cyan-600">
            <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
            <p className="text-gray-600 font-medium">On-Time Delivery</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border-t-4 border-green-600">
            <div className="text-4xl font-bold text-green-600 mb-2">National</div>
            <p className="text-gray-600 font-medium">Reach</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Quality That Speaks for Itself</h3>
          <p className="text-lg text-blue-50">
            Our commitment to excellence has made us the preferred choice for leading automotive manufacturers
          </p>
        </div>
      </div>
    </section>
  );
}
