// src/app/entertainment/page.js
export default function EntertainmentPage() {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <div className="absolute inset-0 bg-black/40" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/api/placeholder/1920/1080')`
            }}
          />
          <div className="relative h-full flex items-center justify-center text-white">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Entertainment Options
              </h1>
              <p className="text-xl mb-8">
                Discover our diverse range of professional entertainment services
              </p>
            </div>
          </div>
        </section>
  
        {/* Entertainment Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Live Bands</h2>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
                  <p className="text-gray-600">
                    Our professional live bands bring energy and excitement to any event. From jazz ensembles to rock bands, we have the perfect musical group for your occasion.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">DJs & Sound</h2>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
                  <p className="text-gray-600">
                    Experienced DJs with state-of-the-art sound equipment, providing the perfect soundtrack for your event with seamless mixing and professional sound management.
                  </p>
                </div>
              </div>
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Solo Artists</h2>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
                  <p className="text-gray-600">
                    Talented solo performers including pianists, guitarists, and vocalists. Perfect for creating ambiance at cocktail hours or intimate gatherings.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Specialty Acts</h2>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
                  <p className="text-gray-600">
                    Unique entertainment options including string quartets, jazz trios, and acoustic duos. Add a special touch to your event with our diverse selection of specialty performers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pricing Packages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Entertainment Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Basic Package</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    4-Hour Performance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional Sound System
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Lighting Setup
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Get Quote
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600">
                <h3 className="text-2xl font-bold mb-4">Premium Package</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    6-Hour Performance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Premium Sound System
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced Lighting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    MC Services
                  </li>
                </ul>
                <a href="/contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Get Quote
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Custom Package</h3>
                <p className="text-gray-600 mb-8">
                  Need something specific? We'll create a custom entertainment package tailored to your event requirements.
                </p>
                <a href="/contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Entertainment?</h2>
            <p className="text-xl mb-8">Contact us to discuss your event needs and get a customized quote</p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    )};