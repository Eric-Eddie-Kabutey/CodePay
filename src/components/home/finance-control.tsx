"use client"
import React, { useEffect, useRef, useState } from 'react'

interface ScrollItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
}

function FinanceControl() {
    const [activeScrollItem, setActiveScrollItem] = useState<string>('scroll1');
    const textItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const scrollItems: ScrollItem[] = [
    {
      id: 'scroll1',
      title: 'Remittance Made Simple',
      description: 'Launch international and local money transfers across 15+ African countries. Handle multiple currency pairs, dynamic exchange rates, and payout rail management all in one platform.',
      buttonText: 'Explore Remittance Engine',
      buttonLink: '/products#remittance',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187a6b5d483c5a0d6b1067_00__Homepage%20-%20Feat%201.png',
      imageAlt: 'Remittance and transfer features'
    },
    {
      id: 'scroll2',
      title: 'Banking Without Borders',
      description: 'Build complete digital banking services. Account creation, card issuance, loans, and multi-bank management. Integrate with existing banking infrastructure or build from scratch.',
      buttonText: 'Explore Banking Suite',
      buttonLink: '/products#banking',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63248eebe3ce6c477fefd39c_01__Homepage%20-%20Feat%202.png',
      imageAlt: 'Banking suite features'
    },
    {
      id: 'scroll3',
      title: 'Agent Networks at Scale',
      description: 'Manage distributed cash networks across your entire continent. Master agents, sub-agents, settlement, commissions, and customer discovery. No limits to how many you onboard.',
      buttonText: 'Explore Agent Network',
      buttonLink: '/products#agents',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63248de10957f67b02f7882c_01__Homepage%20-%20Feat%203.png',
      imageAlt: 'Agent network management'
    }
    ];

    useEffect(() => {
        const handleScroll = () => {
          if (!imageContainerRef.current) return;
    
          const containerRect = imageContainerRef.current.getBoundingClientRect();
          const containerBottom = containerRect.bottom;
          const triggerThreshold = containerRect.height * 0.2;
    
          textItemsRef.current.forEach((item, index) => {
            if (!item) return;
            
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top <= containerBottom - triggerThreshold && 
                itemRect.bottom >= containerBottom - triggerThreshold) {
              setActiveScrollItem(scrollItems[index].id);
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight text-navy-900">
            Build What You Need
          </h1>
          
          <div className="relative">
            {/* Mobile View - Stacked Cards */}
            <div className="lg:hidden space-y-8">
              {scrollItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="mb-6">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="text-2xl font-normal mb-4">{item.title}</h2>
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  <a
                    href={item.buttonLink}
                    className="inline-block bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {item.buttonText}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Desktop View - Sticky Scroll */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
                {/* Text Column */}
                <div className="space-y-12 sm:space-y-16 lg:space-y-24">
                  {scrollItems.map((item, index) => (
                    <div 
                      key={item.id}
                      ref={(el) => {
                        if (el) {
                          textItemsRef.current[index] = el;
                        }
                      }}
                      className="scroll-text-item min-h-[60vh] sm:min-h-[80vh] flex flex-col justify-start"
                      style={{ paddingTop: index === 0 ? '0' : '3rem' }}
                    >
                      <div className={`transition-opacity duration-500 ${activeScrollItem === item.id ? 'opacity-100' : 'opacity-40'}`}>
                        <h2 className="text-2xl sm:text-[2rem] leading-[1.2] font-normal mb-4 sm:mb-6">
                          {item.title}
                        </h2>
                        <p className="text-xl sm:text-[1.5rem] leading-[1.4] text-gray-700 mb-6 sm:mb-8">
                          {item.description}
                        </p>
                        <a 
                          href={item.buttonLink} 
                          className="inline-block bg-navy-600 hover:bg-navy-700 text-white text-base sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-colors"
                        >
                          {item.buttonText}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Image Column */}
                <div 
                  ref={imageContainerRef}
                  className="sticky top-24 h-[calc(100vh-6rem)]"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
                    {scrollItems.map((item) => (
                      <div 
                        key={item.id}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${activeScrollItem === item.id ? 
                          'opacity-100 z-10' : 
                          'opacity-0 z-0'}`}
                      >
                        <div className="w-full h-full flex items-start justify-center p-4 sm:p-8">
                          <img
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            className="w-full h-auto max-h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FinanceControl