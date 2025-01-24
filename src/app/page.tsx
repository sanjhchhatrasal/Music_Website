'use client'

import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import UpcomingWebniers from "@/components/UpcomingWebniers";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <GridBackground />
      <UpcomingWebniers />
      <Instructors />
      <Footer />
    </main>
  );
}
