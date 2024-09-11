import Container from "@/components/Container";
import Hero from "@/components/Hero/Hero";
import Loan from "@/components/Loan/Loan";
import Rates from "@/components/Rates/Rates"; 

export default function Home() {
  return (
    <main className="h-[2000px] mt-5 space-y-4 flex items-center flex-col">
      {/* Home */}
          <Hero />
          <Rates />
          <Loan />
    </main>
  );
}
// https://illuminate.marketingmortgagewebsites.com/
