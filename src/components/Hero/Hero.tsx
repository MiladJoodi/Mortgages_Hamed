import Image from "next/image";
// import Container from "../Container/Container";
import { Button } from "../ui/button"; 
import Container from "@/components/Container";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className="h-[calc(100vh-11vh)] md:h-[50%] flex pb-8 flex-col md:flex-row items-center justify-center overflow-hidden gap-2">
          {/* Left */}
          <div className="flex flex-1 p-4 overflow-hidden">
            <Image src="/hero.png" alt="" width={500} height={300} className="w-full object-cover object-center" />
          </div>

          {/* Right */}
          <div className="flex flex-1 flex-col gap-8 lg:gap-16 p-6 lg:p-16">
            <h4 className="text-3xl lg:text-5xl text-dolphin font-black leading-tight">
              A Mortgage Designed For You
            </h4>
            <p className="text-xl md:text-2xl text-dolphin">
              In a digital world, we still believe in old fashioned customer
              values.
            </p>
            <Button className="flex self-center bg-[#e7590d] px-4 py-7 rounded-full text-white text-xl font-semibold text-center shadow-2xl capitalize border-2 hover:border-2 border-[#e65100] box-border hover:bg-white hover:text-[#e65100] w-[290px] duration-300">Get Start</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
