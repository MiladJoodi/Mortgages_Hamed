import Container from "@/components/Container";
import Hero from "@/components/Hero/Hero";
import Loan from "@/components/Loan/Loan";
import Rates from "@/components/Rates/Rates"; 

export default function Home() {
  return (
    <main className="h-[2000px] mt-5 flex items-center flex-col">
      {/* Home */}
      <Container>
          <Hero />
          <Rates />
          <Loan />
      </Container>
    </main>
  );
}
// https://illuminate.marketingmortgagewebsites.com/
