import Image from "next/image";
// import Container from "../Container/Container";
import { Button } from "../ui/button";
import Container from "@/Components/Container/Container";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-10vh)] flex items-center justify-between">
      <Container>
        <div className="flex items-center justify-center gap-8">
          {/* Left */}
          <div>
            <Image src="/Hero2.jpg" alt="" width={1000} height={300} className="w-[500px]" />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 w-[450px]">
            <h4 className="text-[40px] text-dolphin font-black ">
              A Mortgage Designed For You
            </h4>
            <p className="text-2xl text-dolphin">
              In a digital world, we still believe in old fashioned customer
              values.
            </p>
            <Button className="bg-[#e7590d] px-4 py-7 rounded-full text-white text-xl font-semibold text-center shadow-2xl capitalize border-2 hover:border-2 border-[#e65100] box-border hover:bg-white hover:text-[#e65100] w-[290px] duration-300">Get Start</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
