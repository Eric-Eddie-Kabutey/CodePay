"use client"
import React, { useState } from 'react'

interface LocationItem {
  id: string;
  title: string;
  image: string;
  srcSet: string;
  address: string;
  mapLink: string;
}

const locations: LocationItem[] = [
    {
      id: 'London',
      title: 'London',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1.jpg 2362w',
      address: 'Nairobi, Kenya (HQ)\nServing 15+ African Markets\nAfrica-first fintech infrastructure',
      mapLink: 'https://maps.app.goo.gl/'
    },
    {
      id: 'Singapore',
      title: 'Lagos',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1.jpg 1766w',
      address: 'Lagos, Nigeria\nWest African Operations\nServing fintech ecosystem across WAMZ',
      mapLink: 'https://maps.app.goo.gl/'
    },
    {
      id: 'Ho Chi Minh City',
      title: 'Johannesburg',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive.jpg 2346w',
      address: 'Johannesburg, South Africa\nSouthern African Hub\nSupporting sub-Saharan expansion',
      mapLink: 'https://maps.app.goo.gl/'
    },
    {
      id: 'Bangkok',
      title: 'Kigali',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower.jpg 881w',
      address: 'Kigali, Rwanda\nEast African Growth Center\nDriving fintech innovation across EAC',
      mapLink: 'https://maps.app.goo.gl/'
    }
  ];

function FindUs() {
    const [activeLocation, setActiveLocation] = useState<string>('London');

    const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];
  return (
    <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-navy-900">Global African Headquarters</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Location Tabs - Left Side */}
            <div className="lg:w-1/4 bg-white">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setActiveLocation(location.id)}
                  className={`w-full text-left p-3 sm:p-4 mb-1 sm:mb-2 transition-colors ${activeLocation === location.id ? 'text-black font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <div className="text-lg sm:text-xl">{location.title}</div>
                </button>
              ))}
            </div>
            
            {/* Location Content - Right Side */}
            <div className="lg:w-3/4 bg-neutral-50 rounded-lg overflow-hidden border border-neutral-200">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    src={currentLocation.image}
                    alt={currentLocation.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 50vw"
                    srcSet={currentLocation.srcSet}
                  />
                </div>

                {/* Address and Button */}
                <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <p className="whitespace-pre-line text-base sm:text-lg mb-4 sm:mb-6 text-neutral-700 font-medium">
                      {currentLocation.address}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <a
                      href={currentLocation.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-2 border-navy-600 text-navy-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-navy-600 hover:text-white transition-colors font-semibold"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FindUs