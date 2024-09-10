import Container from "@/Components/container/Container";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar";
import Rates from "@/Components/Rates/Rates";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[2000px]">
      <Container>
          <Hero />
          <Rates />
      </Container>
    </div>
  );
}
// https://illuminate.marketingmortgagewebsites.com/
