import AboutSections from "@/components/about";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/footer";
import NavigationBar from "@/components/header";
import HeroSection from "@/components/HeroSection ";
import Image from "next/image";

export default function Home() {
  return (
  <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <NavigationBar />

        {/* Hero section */}
        <HeroSection />

        {/* Main content */}
        <div className="relative z-30">
          <AboutSections />
          {/* <Service />
          <Skils />
          <Project />
          // */}
<ContactUsSection/> 
          <Footer />
        </div>
      </div>
    </div>
  );
}
