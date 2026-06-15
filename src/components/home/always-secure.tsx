import React from 'react'

function AlwaysSecure() {
  return (
    <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left side - Navy background with text at bottom */}
            <div className="bg-navy-600 p-6 sm:p-8 md:p-12 rounded-xl flex flex-col justify-end min-h-[300px] sm:min-h-[400px]">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                <span className="text-teal-300">Blockchain-secured</span><br />
                transactions you can trust.
              </h1>
            </div>

            {/* Right side - Two stacked teal cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-teal-500 p-6 sm:p-8 rounded-xl h-[150px] sm:h-[180px] md:h-[200px] flex items-center justify-center text-white">
                <p className="text-lg sm:text-xl lg:text-2xl text-center font-semibold">
                  AI-Powered KYC & Liveness Detection
                </p>
              </div>

              <div className="bg-teal-500 p-6 sm:p-8 rounded-xl h-[150px] sm:h-[180px] md:h-[200px] flex items-center justify-center text-white">
                <p className="text-lg sm:text-xl lg:text-2xl text-center font-semibold">
                  Bank-Grade Encryption & Fraud Monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AlwaysSecure