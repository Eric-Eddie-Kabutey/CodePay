import React from 'react'

function TeamUp() {
  return (
    <div className="flex justify-center items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl bg-gradient-to-r from-navy-600 to-navy-700 border border-navy-500 rounded-xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="space-y-6 sm:space-y-8">
            {/* <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Your Fintech. Our Infrastructure. <br className="hidden sm:block" />
              Africa's Future.
            </p> */}
            <p className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-light leading-[1.3]">
              Launch a complete fintech platform in 8–12 weeks. No rebuilds. No country limits. Just one powerful infrastructure serving Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 sm:py-4 bg-white text-navy-600 rounded-lg hover:bg-neutral-100 transition-colors duration-300 text-base sm:text-lg font-semibold"
              >
                Book a Demo
              </a>
              <a
                href="/developers"
                className="inline-block px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-navy-600 transition-colors duration-300 text-base sm:text-lg font-semibold"
              >
                Explore Platform
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TeamUp