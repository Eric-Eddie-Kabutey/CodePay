import React from 'react'

function HomeHero() {
  return (
    <div className='w-full'>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                Unified Remittance<br />
                Infrastructure for Africa
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Launch fintech, remittance, and banking platforms across Africa in 8–12 weeks. One platform. Every country. No rebuilds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="inline-block bg-navy-600 text-white text-base sm:text-lg px-8 py-3 sm:py-4 rounded-lg hover:bg-navy-700 transition-colors font-semibold">
                  Book a Demo
                </a>
                <a href="/developers" className="inline-block border-2 border-navy-600 text-navy-600 text-base sm:text-lg px-8 py-3 sm:py-4 rounded-lg hover:bg-navy-50 transition-colors font-semibold">
                  Explore Platform
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187552840368fe09a74d71_Homepage%20-%20Hero.png"
                alt="CodePay platform dashboard"
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
  )
}

export default HomeHero