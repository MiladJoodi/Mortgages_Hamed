import Container from "@/components/Container";
import { Faq } from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Map from "@/components/Footer/Map";
import Hero from "@/components/Hero/Hero";
import Loan from "@/components/Loan/Loan";
import Rates from "@/components/Rates/Rates"; 
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main className="h-[3000px] w-full mt-5 space-y-4 flex items-center flex-col">
      {/* Home */}
          <Hero />
          <Rates />
          <Loan />
          <Testimonial />
          <Faq />
          <Footer />
          <Map />
    </main>
  );
}
// https://illuminate.marketingmortgagewebsites.com/
