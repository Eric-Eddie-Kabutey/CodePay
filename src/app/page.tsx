import Navbar from "@/components/shared/navbar";
import HomeHero from "@/components/home/home-hero";
import WhatIsCodePay from "@/components/home/find-us";
import AdminLayers from "@/components/home/finance-control";
import DevCta from "@/components/home/DevCta";
import Testimonials from "@/components/home/Testimonials";
import FooterCTA from "@/components/home/FooterCta";
import BuildStats from "@/components/home/BuildStats";
import OnePlatform from "@/components/home/one-platform";

export const metadata = {
  title: 'CodePay — Remittance and Banking Infrastructure for Africa',
  description:
    "CodePay is Africa's first AI-powered remittance infrastructure, built on blockchain and modern cryptography. Launch your fintech, bank, or remittance business in 8–12 weeks.",
};

export default function Home() {
  return (
    <div>
      <div className="hero-bg">
        <Navbar />
        <HomeHero />
      </div>
      <WhatIsCodePay />
      <OnePlatform />
      <AdminLayers />
      <BuildStats />
      <DevCta />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}
