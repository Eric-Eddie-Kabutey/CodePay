import React from 'react';
import Link from 'next/link';
import { hero } from '@/content/homepage';

function HomeHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24 pb-16 lg:pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Text */}
        <div className="lg:w-1/2 space-y-7">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
            {hero.headline}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              href={hero.primaryCTA.href}
              className="inline-block text-center bg-navy-900 text-white text-base font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-700 transition-colors"
            >
              {hero.primaryCTA.label}
            </Link>
            <Link
              href={hero.secondaryCTA.href}
              className="inline-block text-center border border-navy-200 text-navy-900 text-base font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-50 transition-colors"
            >
              {hero.secondaryCTA.label}
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={hero.imageUrl}
            alt={hero.imageAlt}
            className="w-full h-auto max-h-[460px] object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
