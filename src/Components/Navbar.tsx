import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="">
      {/* Left - Logo */}
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="" width={120} height={80} />
        <h1 className="">Mortgage</h1>
      </div>

      {/* Right */}
      <div>
        <div className="">
          <Link href="#">Purchase</Link>
          <Link href="#">Refinance</Link>
          <Link href="#">Tools</Link>
          <Link href="#">Contact Us</Link>
        </div>
        {/* Phone */}
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <span>+1 416 869 8458</span>
        </div>
      </div>

      {/* Apply */}
      <div>
        <Button className="bg-[#e65100]">Apply</Button>
      </div>
    </div>
  );
};

export default Navbar;
