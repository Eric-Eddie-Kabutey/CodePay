import React from 'react'

function CustomizedNeeds() {
  return (
    <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Image container */}
          <div className="mb-8 sm:mb-12 w-full">
            <div className="bg-neutral-100 p-4 sm:p-6 rounded-xl">
              <img
                src="https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632c18f1bd8a0d65a6c91685_00_Local%20Solutions.png"
                alt="Multi-country platform localisation features"
                className="w-full h-auto object-contain rounded-lg"
                loading="lazy"
                srcSet="
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632c18f1bd8a0d65a6c91685_00_Local%20Solutions-p-800.png 800w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632c18f1bd8a0d65a6c91685_00_Local%20Solutions-p-1080.png 1080w,
                  https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/632c18f1bd8a0d65a6c91685_00_Local%20Solutions-p-1600.png 1600w
                "
              />
            </div>
          </div>

          {/* Centered heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 max-w-4xl mx-auto text-navy-900">
            Scale Across Africa. No Rebuilds.
          </h1>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Left column */}
            <div className="space-y-8 sm:space-y-12">
              {/* Feature 1 */}
              <div className="grid grid-cols-[40px_1fr] gap-4 sm:gap-6 items-start">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-navy-600 text-white flex items-center justify-center font-bold pt-0 text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 leading-snug text-navy-900">
                    One Platform for Every Country
                  </h3>
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                    Launch in 15+ African countries without rebuilding infrastructure. Compliance and regulatory requirements pre-configured.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid grid-cols-[40px_1fr] gap-4 sm:gap-6 items-start">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-navy-600 text-white flex items-center justify-center font-bold pt-0 text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 leading-snug text-navy-900">
                    Multi-Channel Access
                  </h3>
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                    Reach users via mobile app, USSD, WhatsApp, and web. Support urban and rural users with the same backend.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8 sm:space-y-12">
              {/* Feature 3 */}
              <div className="grid grid-cols-[40px_1fr] gap-4 sm:gap-6 items-start">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-navy-600 text-white flex items-center justify-center font-bold pt-0 text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 leading-snug text-navy-900">
                    Multi-Layer Administration
                  </h3>
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                    Super Admin → Country Admin → Master Agent → Sub-Agent structure. Flexible role management and multi-language support.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="grid grid-cols-[40px_1fr] gap-4 sm:gap-6 items-start">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-navy-600 text-white flex items-center justify-center font-bold pt-0 text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 leading-snug text-navy-900">
                    Developer-First APIs
                  </h3>
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                    Built in .NET with REST APIs, SDKs for Node.js and Flutter, comprehensive documentation, and sandbox environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CustomizedNeeds