import React from "react";
import { trustBar, whatIsCodePay } from "@/content/homepage";
import OnePlatform from "./one-platform";

function TrustAndIdentity() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ── TRUST BAR ───────────────────────────────────────────── */}
        <div className="py-12 sm:py-14">
          <p className="mb-16 text-center text-sm xl:text-base font-light uppercase tracking-[0.18em]">
            {trustBar.label}
          </p>

          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-3">
            {trustBar.items.slice(0, 3).map((item, index) => (
              <div
                key={item.text}
                className={`${
                  index !== 2 ? "" : ""
                } ${
                  index === 0 ? "lg:pr-6" : index === 1 ? "lg:px-6" : "lg:pl-6"
                }`}
              >
                <div className="grid grid-cols-[auto_1fr] items-start gap-x-5">
                  <h3 className="text-5xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                    {index === 0 && "15+"}
                    {index === 1 && "100%"}
                    {index === 2 && "AI"}
                  </h3>

                  <p className="pt-2 text-lg leading-snug text-gray-700 sm:text-xl lg:text-2xl">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHAT IS CODEPAY ────────────────────────────────────── */}
        <div className="py-20 sm:py-24">
          {/* Header left, body right */}
          <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="max-w-xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                {whatIsCodePay.headline}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="max-w-2xl space-y-5">
                {whatIsCodePay.body.split("\n\n").map((para, index) => (
                  <p
                    key={index}
                    className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Differentiator Cards - Infinite Horizontal Scroll */}
          <OnePlatform />
        </div>
      </div>
    </section>
  );
}

export default TrustAndIdentity;
