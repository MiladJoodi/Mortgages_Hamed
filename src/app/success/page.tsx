import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Application Submitted Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for submitting your mortgage loan application. We will
          review your information and get back to you soon.
        </p>
        <Button
          type="submit"
          className="w-full bg-applyBtnOrange hover:bg-applyBtnOrange hover:opacity-80 transition-all p-6 text-lg duration-150"
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
