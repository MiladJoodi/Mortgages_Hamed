import Link from "next/link";
import { Button } from "../ui/button";

const ApplyBtn = () => {
  return (
    <Link className="hidden lg:flex" href="/apply2">
      <Button className="bg-applyBtnOrange h-11 w-34 text-[15px] rounded outline-none shadow-md hover:shadow-2xl cursor-pointer px-4 py-2 text-white hover:bg-text-applyBtnOrange hover:mb-2 transition-all font-semibold duration-400 delay-100 ease-in-out">
        Apply now
      </Button>
    </Link>
  );
};

export default ApplyBtn;
