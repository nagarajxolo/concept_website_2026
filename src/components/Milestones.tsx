import { Calendar, TrendingUp, Award, Building } from 'lucide-react';

export default function Milestones() {
  const milestones = [
    {
      year: '2011',
      title: 'Company Founded',
      description: 'Started as small tool manufacturing company',
      icon: Building,
    },
    {
      year: '2012',
      title: 'Infrastructure Expansion',
      description: 'Installed all conventional Machine setup',
      icon: Building,
    },
    {
      year: '2013',
      title: 'Revenue Milestone',
      description: 'Crossed 1 crore turnover',
      icon: TrendingUp,
    },
    {
      year: '2014',
      title: 'Facility Growth',
      description: 'Increased company setup and working area',
      icon: Building,
    },
    {
      year: '2017',
      title: 'Technology Upgrade',
      description: 'Installed VMC Hartford machine',
      icon: Award,
    },
    {
      year: '2018',
      title: 'Tier 1 Supplier',
      description: 'Selected as Tier1 supplier for Tenneco Clean Air India',
      icon: Award,
    },
    {
      year: '2019',
      title: 'Major Expansion',
      description: 'Increased working area up to 5000 sq. ft.',
      icon: Building,
    },
    {
      year: '2020',
      title: 'ISO Certified',
      description: 'ISO 9001:2015 certification achieved',
      icon: Award,
    },
    {
      year: '2021',
      title: 'Production Capacity',
      description: 'Installed 3 pneumatic Press machines',
      icon: Building,
    },
  ];

  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of continuous growth, innovation, and excellence
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className={`flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="bg-white border-2 border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <div className={`flex items-center space-x-3 mb-3 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <Calendar className="text-blue-600" size={20} />
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-2/12 justify-center my-8 lg:my-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  <div className="w-full lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">13+ Years of Excellence</h3>
          <p className="text-xl text-blue-50">
            From a small tool manufacturing company to a leading press tool design & manufacturing company serving major automotive clients across the nation
          </p>
        </div>
      </div>
    </section>
  );
}
