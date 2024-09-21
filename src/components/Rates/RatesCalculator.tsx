"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CiCalculator2 } from "react-icons/ci";
import { sleep } from "@/lib/sleep";

const RatesCalculator = () => {
  // States
  const [loanAmount, setLoanAmount] = useState<number | string>(100000);
  const [interestRate, setInterestRate] = useState<number | string>(4.02);
  const [loanDuration, setLoanDuration] = useState<number | string>(25);
  // State for storing the calculated EMI
  const [emi, setEmi] = useState<number | null>(null);

// Calculating Loading
    const [calculating, setCalculating] = useState<boolean>(false);

  //   Submit Handler on Calculate Button
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCalculating(true)
    await sleep(2000);
    calculateEMI();
    setCalculating(false)
  };

  //   calculateEMI Function
  const calculateEMI = () => {
    const P = Number(loanAmount); // Principal amount
    const r = Number(interestRate) / 12 / 100; // Monthly interest rate
    const n = Number(loanDuration) * 12; // Loan duration in months

    if (P && r && n) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emi);
    } else {
      alert("Please fill all fields with valid values");
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold mb-2">Calculate EMI Now!</h3>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 p-6 rounded-lg border border-dashed"
      >
        {/* Loan Amount Field */}
        <div className="flex flex-col">
          <Label className="text-xl" htmlFor="loanAmount">
            Loan Amount
          </Label>
          <Input
            onChange={(e) => setLoanAmount(e.target.value)}
            id="loanAmount"
            defaultValue={loanAmount}
            className="text-md"
          />
        </div>

        {/* Interest Rate Field */}
        <div className="flex flex-col">
          <Label className="text-xl" htmlFor="interestRate">
            Interest Rate (%)
          </Label>
          <Input
            onChange={(e) => setInterestRate(e.target.value)}
            id="interestRate"
            defaultValue={interestRate}
            className="text-md"
          />
        </div>

        {/* Loan Duration Field */}
        <div className="flex flex-col">
          <Label className="text-xl" htmlFor="loanDuration">
            Loan Duration (Years)
          </Label>
          <Input
            onChange={(e) => setLoanDuration(e.target.value)}
            id="loanDuration"
            placeholder="Enter Loan Duration"
            defaultValue={loanDuration}
            className="text-md"
          />
        </div>

        <Button
          className="border border-applyBtnOrange bg-transparent text-applyBtnOrange font-semibold text-lg hover:text-white hover:bg-applyBtnOrange"
          type="submit"
          disabled={calculating}
        >
          <CiCalculator2 size={20} className={`ml-2 w-[25px] ${calculating === true && "animate-spin"}`} />
          Calculate EMI
        </Button>

        {/* Display Result */}
        {emi !== null && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-md">
          <h3 className="text-lg font-semibold">
            Estimated EMI: $ {emi.toFixed(2)}
          </h3>
        </div>
      )}
      </form>
      
      
    </div>
  );
};

export default RatesCalculator;
