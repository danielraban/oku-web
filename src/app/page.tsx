import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import AITherapy from "@/components/AITherapy";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import CrisisSupport from "@/components/CrisisSupport";
import FAQ from "@/components/FAQ";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Features />
        <ProductShowcase />
        <AITherapy />
        <SocialProof />
        <HowItWorks />
        <CrisisSupport />
        <FAQ />
        <EarlyAccessForm />
      </main>
      <Footer />
    </>
  );
}
