import Image from "next/image";
import { Button } from "../ui/button";

const Loan = () => {
  return (
    <div className="flex flex-col md:flex-row mt-24 sm:px-16 items-center justify-evenly gap-12">
      {/* Left */}
      <div className="flex flex-col gap-6 flex-1">
        <h4 className="text-5xl text-dolphin">Fund Your Loan Today</h4>

        <p className="text-gray-600 text-2xl">
          With today's historically low rates, now is a great time to get
          financing. Complete our quick secure application, and we will get you
          a custom quote with different options and review which one best fits
          your needs!
        </p>

        <Button className="bg-[#e7590d] px-4 py-7 rounded-full text-white text-xl font-semibold text-center shadow-2xl capitalize border-2 hover:border-2 border-[#e65100] box-border hover:bg-white hover:text-[#e65100] w-[290px] duration-300">Get Start</Button>

      </div>

      {/* Right */}
      <div className="flex">
        <Image
          src="/Loan.jpg"
          alt=""
          width={1000}
          height={300}
          className="w-[400px]"
        />
      </div>
    </div>
  );
};

export default Loan;
