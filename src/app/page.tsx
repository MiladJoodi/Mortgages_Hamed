import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import Loan from "@/components/Loan/Loan";
import Navbar from "@/components/Navbar";
import Rates from "@/components/Rates/Rates";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[2000px] dark:bg-gray-700">
      <Container>
          <Hero />
          <Rates />
          <Loan />
      </Container>
    </div>
  );
}
// https://illuminate.marketingmortgagewebsites.com/
