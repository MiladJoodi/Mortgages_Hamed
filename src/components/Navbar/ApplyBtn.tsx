import Link from "next/link";
import { Button } from "../ui/button";

const ApplyBtn = () => {
  return (
    <Link className="hidden lg:flex" href="/apply">
      <Button className="bg-applyBtnOrange h-11 w-34 text-[15px] rounded outline-none shadow-[rgba(0,0,0,0.15) 0px 8px 16px 0px] shadow-xl cursor-pointer px-4 py-2 text-white hover:text-applyBtnOrange hover:bg-white font-semibold duration-300">
        Apply now
      </Button>
    </Link>
  );
};

export default ApplyBtn;
