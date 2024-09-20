"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/components/Container";

// Define a type for the results
interface Results {
  maxMortgage: string;
  monthlyPayment: string;
  downPaymentPercentage: string;
}

export default function MortgageCalculator() {
  const [annualIncome, setAnnualIncome] = useState<number>(50000);
  const [monthlyDebts, setMonthlyDebts] = useState<number>(500);
  const [downPayment, setDownPayment] = useState<number>(20000);
  const [interestRate, setInterestRate] = useState<number>(3.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [creditScore, setCreditScore] = useState<number>(700);
  const [results, setResults] = useState<Results | null>(null);

  const calculateAffordability = () => {
    // Monthly income
    const monthlyIncome = annualIncome / 12;

    // Maximum monthly payment (using 28/36 rule)
    const maxMonthlyPayment = Math.min(
      monthlyIncome * 0.28,
      monthlyIncome * 0.36 - monthlyDebts
    );

    // Calculate maximum loan amount
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const maxLoanAmount =
      (maxMonthlyPayment / monthlyInterestRate) *
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Total mortgage amount (including down payment)
    const totalMortgage = maxLoanAmount + downPayment;

    // Monthly mortgage payment
    const monthlyMortgagePayment =
      (maxLoanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setResults({
      maxMortgage: totalMortgage.toFixed(2),
      monthlyPayment: monthlyMortgagePayment.toFixed(2),
      downPaymentPercentage: ((downPayment / totalMortgage) * 100).toFixed(2),
    });
  };

  return (
    <section className="w-full mt-4 p-2">
      <Container>
        <Card className="w-full max-w-3xl mx-auto my-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Mortgage Affordability Calculator
            </CardTitle>
            <CardDescription className="text-lg text-center">
              Calculate how much home you can afford based on your financial
              situation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-applyBtnOrange text-white">
                <TabsTrigger value="basic" className="text-lg">
                  Basic Info
                </TabsTrigger>
                <TabsTrigger value="advanced" className="text-lg">
                  Advanced Options
                </TabsTrigger>
              </TabsList>
              <TabsContent value="basic">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="annualIncome" className="text-lg">
                      Annual Income ($)
                    </Label>
                    <Input
                    className="text-lg"
                      id="annualIncome"
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="monthlyDebts" className="text-lg">
                      Monthly Debts ($)
                    </Label>
                    <Input
                    className="text-lg"
                      id="monthlyDebts"
                      type="number"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="downPayment" className="text-lg">
                      Down Payment ($)
                    </Label>
                    <Input
                    className="text-lg"
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="advanced">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="interestRate" className="text-lg">
                      Interest Rate (%)
                    </Label>
                    <Slider
                      id="interestRate"
                      min={0}
                      max={10}
                      step={0.1}
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                    />
                    <div className="text-right text-sm text-muted-foreground">
                      {interestRate.toFixed(1)}%
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="loanTerm" className="text-lg">
                      Loan Term (years)
                    </Label>
                    <Slider
                      id="loanTerm"
                      min={15}
                      max={30}
                      step={5}
                      value={[loanTerm]}
                      onValueChange={(value) => setLoanTerm(value[0])}
                    />
                    <div className="text-right text-sm text-muted-foreground">
                      {loanTerm} years
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="creditScore" className="text-lg">
                      Credit Score
                    </Label>
                    <Slider
                      id="creditScore"
                      min={300}
                      max={850}
                      step={10}
                      value={[creditScore]}
                      onValueChange={(value) => setCreditScore(value[0])}
                    />
                    <div className="text-right text-sm text-muted-foreground">
                      {creditScore}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button
              onClick={calculateAffordability}
              type="submit"
              className="w-full bg-applyBtnOrange text-lg h-11 hover:bg-applyBtnOrange hover:opacity-80 transition-all duration-150"
            >
              Calculate Affordability
            </Button>
            {results && (
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <div className="grid grid-cols-2 gap-2 text-lg">
                  <div className="flex items-center gap-2">
                    Maximum Mortgage:
                  <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                        </span>
                    </div>
                  <div className="font-medium">${results.maxMortgage}</div>
                  <div>Monthly Payment:</div>
                  <div className="font-medium">${results.monthlyPayment}</div>
                  <div>Down Payment:</div>
                  <div className="font-medium">
                    {results.downPaymentPercentage}%
                  </div>
                </div>
              </div>
            )}
          </CardFooter>
        </Card>
      </Container>
    </section>
  );
}
