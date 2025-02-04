// src/app/weddings/page.js
export default function WeddingsPage() {
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
                Wedding Entertainment
              </h1>
              <p className="text-xl mb-8">
                Creating the perfect soundtrack for your special day
              </p>
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Wedding Services</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ceremony Music</h3>
                    <p className="text-gray-600">
                      Professional musicians for your wedding ceremony, creating the perfect atmosphere for your special moments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reception Entertainment</h3>
                    <p className="text-gray-600">
                      Full band or DJ services to keep your guests dancing all night long.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Packages</h3>
                    <p className="text-gray-600">
                      Tailored entertainment packages to match your vision and budget.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-200 rounded-lg" />
                <div className="aspect-square bg-gray-200 rounded-lg" />
                <div className="aspect-square bg-gray-200 rounded-lg" />
                <div className="aspect-square bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Couples Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">
                    "The team was absolutely amazing! They made our wedding day truly special with their incredible performance."
                  </p>
                  <p className="font-semibold">- Happy Couple {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How far in advance should we book?</h3>
                  <p className="text-gray-600">
                    We recommend booking at least 6-12 months in advance for wedding services, especially during peak season (May-September). However, we occasionally have availability for shorter notice bookings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What music styles do you offer?</h3>
                  <p className="text-gray-600">
                    Our musicians are versatile and can perform various styles including classical, jazz, contemporary pop, rock, and traditional wedding music. We'll work with you to create the perfect playlist for your special day.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do you provide all necessary equipment?</h3>
                  <p className="text-gray-600">
                    Yes, we bring all required professional-grade sound equipment, lighting, and instruments. We'll coordinate with your venue to ensure proper setup and acoustic requirements are met.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can we request specific songs?</h3>
                  <p className="text-gray-600">
                    Absolutely! We encourage you to provide a list of must-play songs and any songs you'd prefer not to hear. We'll work with you to ensure the music matches your vision perfectly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What happens if there's an emergency?</h3>
                  <p className="text-gray-600">
                    We maintain a network of professional backup musicians and have comprehensive contingency plans in place. Your wedding entertainment is guaranteed to proceed smoothly no matter what.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do you offer ceremony and reception packages?</h3>
                  <p className="text-gray-600">
                    Yes, we offer comprehensive packages that cover both ceremony and reception. We can seamlessly transition between different parts of your wedding day with appropriate music and entertainment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make Your Wedding Day Special?</h2>
            <p className="text-xl mb-8">Contact us today to discuss your wedding entertainment needs</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Get in Touch
              </a>
              <a 
                href="/packages" 
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                View Packages
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }