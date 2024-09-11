import Image from "next/image";
import { Button } from "../ui/button";
import Container from "../Container";

const Loan = () => {
  return (
    <section className="">
      <Container>
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-2 p-4">
      {/* Left */}
      <div className="flex flex-1 flex-col gap-8 p-4">
        <h4 className="text-3xl font-semibold lg:text-5xl text-dolphin">Fund Your Loan Today</h4>

        <p className="text-gray-600 text-xl text-justify md:justify-left leading-7">
          With today's historically low rates, now is a great time to get
          financing. Complete our quick secure application, and we will get you
          a custom quote with different options and review which one best fits
          your needs!
        </p>

        <Button className="self-center md:self-auto bg-[#e7590d] px-4 py-7 rounded-full text-white text-xl font-semibold text-center shadow-2xl capitalize border-2 hover:border-2 border-[#e65100] box-border hover:bg-white hover:text-[#e65100] w-[290px] duration-300">Get Start</Button>

      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col items-center gap-8 lg:py-8">
        <Image
          src="/Loan.png"
          alt=""
          width={1000}
          height={300}
          className="w-[500px]"
        />
      </div>
    </div>
    </Container>
      </section>
  );
};

export default Loan;
