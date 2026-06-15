import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/homepage";

function Testimonials() {
  const testimonialStyles = ["bg-[#FFF4E0]", "bg-[#ECFAF1]", "bg-[#F1EAFE]"];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {testimonials.headline}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((t, index) => (
            <article
              key={`${t.author}-${index}`}
              className={`group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-md px-6 py-7 transition-all duration-300 sm:px-8 sm:py-8 bg-gray-100`}
            >
              {/* Icon */}
              <Quote
                className={`h-8 w-8 text-black/70 transition-transform duration-500 ease-out group-hover:scale-125 ${
                  testimonialStyles[index % testimonialStyles.length]
                } `}
              />

              {/* Quote */}
              <blockquote className="mt-16 text-xl font-light leading-relaxed tracking-tight text-black sm:text-2xl">
                “{t.quote}”
              </blockquote>

              {/* Author */}
              <div className="mt-10 pt-6">
                {/* Animated author line */}
                <div className="mb-6 h-1 w-full overflow-hidden rounded-full">
                  <div className="h-full w-0 rounded-full bg-teal-500 transition-all duration-700 ease-out group-hover:w-full" />
                </div>

                <div className="text-base font-medium text-black">
                  {t.author}
                </div>

                <div className="mt-1 text-sm text-black/50">{t.location}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
