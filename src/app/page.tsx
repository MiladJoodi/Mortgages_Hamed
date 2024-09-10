import Container from "@/Components/Container/Container";
import Hero from "@/Components/Hero/Hero";
import Loan from "@/Components/Loan/Loan";
import Navbar from "@/Components/Navbar";
import Rates from "@/Components/Rates/Rates";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[2000px]">
      <Container>
          <Hero />
          <Rates />
          <Loan />
      </Container>
    </div>
  );
}
// https://illuminate.marketingmortgagewebsites.com/
