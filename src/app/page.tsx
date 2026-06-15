import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "@/components/home/LandingPage";
import HomeHero from "@/components/home/home-hero";
import OnePlatform from "@/components/home/one-platform";
import FinanceControl from "@/components/home/finance-control";
import AlwaysSecure from "@/components/home/always-secure";
import CustomizedNeeds from "@/components/home/customized-needs";
import FindUs from "@/components/home/find-us";
import TeamUp from "@/components/home/team-us";
import Navbar from "@/components/shared/navbar";

export default function Home() {
  return (
    <div>
      <div className="hero-bg">
        <Navbar />
        <HomeHero />
      </div>
      <OnePlatform />
      <FinanceControl />
      <AlwaysSecure />
      <CustomizedNeeds />
      <FindUs />
      <TeamUp />
      {/* <LandingPage /> */}
    </div>
  )
}
