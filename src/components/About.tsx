import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Concept Engineering</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Concept Engineering is one of the leading Press Tool Design & Manufacturing Company, established in the year 2011. We manufacture quality dies, fixtures as per Customer's Requirements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Concept Engineering, our dedication to customers is rooted in a deep sense of responsibility that is shared by all of our employees. Pragati Engineering, an ISO 9001:2015 certified division caters to the entire tooling solutions and has a National reach.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We have well Qualified, Dynamic Engineers in design department and tool room division. We follow straight quality control measures at every stage of manufacturing process.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We have competency in manufacturing of Press tools, fixtures and panel checkers for various critical sheet metal components and assemblies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With new technologies, facilities and experience in press tooling, we are confident to cater any requirements in sheet metal.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg font-semibold text-gray-900">
                Tier 1 Supplier for Leading Automotive Companies
              </p>
              <p className="text-gray-700 mt-2">
                Selected as a trusted partner for major automotive manufacturers including Tenneco Clean Air India.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Eye size={32} />
              <h3 className="text-2xl font-bold">VISION</h3>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed">
              Our Vision is to become a reliable, quality conscious vendor partner to our customers
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Target size={32} />
              <h3 className="text-2xl font-bold">MISSION</h3>
            </div>
            <p className="text-lg text-cyan-50 leading-relaxed">
              Becoming a role model by providing extraordinary quality dies, following with world class system for exponential growth, complete customer & employee satisfaction.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Heart size={32} className="text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">OUR VALUES</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trust & Transparency</h4>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Contribution to Society</h4>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="text-yellow-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Focus</h4>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="text-cyan-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Think Big</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
