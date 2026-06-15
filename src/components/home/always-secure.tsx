import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import {
  Rocket,
  Globe2,
  WalletCards,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { stats, devTeaser } from "@/content/homepage";

function StatsAndDev() {
  const statStyles = [
    {
      icon: Rocket,
      bg: "bg-[#F1D8AE]",
      badge: "bg-white/80",
      border: "border-[#F1D8AE]",
    },
    {
      icon: Globe2,
      bg: "bg-[#CBEBD5]",
      badge: "bg-white/80",
      border: "border-[#CBEBD5]",
    },
    {
      icon: WalletCards,
      bg: "bg-[#F1EAFE]",
      badge: "bg-white/80",
      border: "border-[#DACBF4]",
    },
    {
      icon: BrainCircuit,
      bg: "bg-[#ECFAF1]",
      badge: "bg-white/80",
      border: "border-[#CBEBD5]",
    },
    {
      icon: ShieldCheck,
      bg: "bg-[#FFF4E0]",
      badge: "bg-white/80",
      border: "border-[#F1D8AE]",
    },
    {
      icon: Smartphone,
      bg: "bg-[#EAF5FF]",
      badge: "bg-white/80",
      border: "border-[#C9DFF4]",
    },
  ];

  return (
    <>
      {/* ── STATS ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 max-w-4xl">
            <h2 className="text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              {stats.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.items.map((item, index) => {
              const style = statStyles[index % statStyles.length];
              const Icon = style.icon;

              return (
                <div
                  key={item.value}
                  className={`group rounded-md relative min-h-[290px] overflow-hidden ${style.bg} px-6 py-7 transition-all duration-300 sm:px-8 sm:py-8`}
                >
                  <div className="flex h-full flex-col justify-between">
                    {/* Icon */}
                    <Icon className="h-8 w-8 text-black/75 font-light transition-transform duration-500 ease-out group-hover:scale-125" />

                    <div className="mt-16">
                      <div className="text-4xl font-light tracking-tight text-black sm:text-5xl lg:text-6xl">
                        {item.value}
                      </div>

                      <p className="mt-4 max-w-[18rem] text-base leading-relaxed text-gray-700 sm:text-lg">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEVELOPER TEASER ───────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid rounded-lg bg-gray-100 grid-cols-1 gap-6 lg:grid-cols-3">
            <Link
              href={devTeaser.cta.href}
              className="group relative col-span-1 min-h-[320px] overflow-hidden rounded-md px-6 sm:px-8 py-8 sm:py-16 transition-all duration-300 lg:col-span-3"
            >
              <div className="flex h-full flex-col justify-between">
                {/* Top Row */}
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <Code2 className="h-8 w-8 text-black/75 transition-transform duration-500 ease-out group-hover:scale-125" />

                    <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                      Developers
                    </p>
                  </div>

                  <ArrowUpRight className="h-8 w-8 origin-center text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.6] group-hover:rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>

                {/* Bottom Content */}
                <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-8">
                    <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
                      {devTeaser.headline}
                    </h2>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                      {devTeaser.body}
                    </p>
                  </div>

                  <div className="lg:col-span-4 lg:flex lg:justify-end">
                    <span className="inline-flex items-center border-b border-black pb-1 text-lg font-medium text-black">
                      {devTeaser.cta.label}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatsAndDev;
