export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">CONCEPT ENGINEERING</h3>
            <p className="text-gray-400 mb-4">
              Leading Press Tool Design & Manufacturing Company since 2011. ISO 9001:2015 Certified.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="px-3 py-1 bg-gray-800 rounded-full">ISO 9001:2015</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full">Tier 1 Supplier</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Clients
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Bhosari, Pune - 411026</li>
              <li>+91-9890534363</li>
              <li>+91-9881140634</li>
              <li>conceptengg.11@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Concept Engineering. All rights reserved.</p>
          <p className="mt-2">GSTIN: 27AAHFC6413A1ZY</p>
        </div>
      </div>
    </footer>
  );
}
