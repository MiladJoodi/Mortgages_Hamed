"use client";
import Container from "@/components/Container";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
} from "recharts";
import { numberWithCommas } from "@/lib/numberWithCommas";

interface LoanDetails {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  amortizationSchedule: {
    month: number;
    emi: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

const Page: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [loanDetails, setLoanDetails] = useState<LoanDetails | null>(null);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTerm * 12;
    const x = Math.pow(1 + monthlyRate, totalMonths);
    const emi = (loanAmount * x * monthlyRate) / (x - 1);

    let balance = loanAmount;
    const amortizationSchedule: LoanDetails["amortizationSchedule"] = [];
    let totalInterest = 0;

    for (let i = 1; i <= totalMonths; i++) {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance -= principal;
      totalInterest += interest;

      amortizationSchedule.push({
        month: i,
        emi: emi,
        principal: principal,
        interest: interest,
        balance: balance > 0 ? balance : 0,
      });
    }

    setLoanDetails({
      emi: emi,
      totalInterest: totalInterest,
      totalPayment: loanAmount + totalInterest,
      amortizationSchedule: amortizationSchedule,
    });
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const loanWithComma = formatCurrency(loanAmount);

  return (
    <section className="w-full mt-4 p-2">
      <Container>
        <div className="container flex gap-2 justify-center mx-auto p-4">
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Mortgage EMI Calculator
                </CardTitle>
                <CardDescription className="text-lg text-center">
                  Calculate your monthly mortgage payments and view details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8">
                  <div className="space-y-2">
                    <Label className="text-lg" htmlFor="loanAmount">
                      Loan Amount $
                    </Label>
                    <Input
                      className="text-lg"
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                    />
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      max={1000000}
                      step={1000}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <Label className="text-lg" htmlFor="interestRate">
                      Interest Rate (%)
                    </Label>
                    <Input
                      id="interestRate"
                      className="text-lg"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      step={0.1}
                    />
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      max={20}
                      step={0.1}
                    />
                    <div className="flex justify-center gap-2 pt-4">
                      {[4.02, 3.08, 4.5, 5, 5.2].map((rate) => (
                        <Button
                          key={rate}
                          onClick={() => setInterestRate(rate)}
                          value={rate}
                          variant="secondary"
                          className={`${
                            interestRate === rate
                              ? "bg-applyBtnOrange text-white"
                              : ""
                          } hover:bg-applyBtnOrange hover:text-white text-lg shadow`}
                        >
                          {rate} %
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <Label className="text-lg" htmlFor="loanTerm">
                      Loan Term (Years)
                    </Label>
                    <Input
                      id="loanTerm"
                      className="text-lg"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                    />
                    <Slider
                      value={[loanTerm]}
                      onValueChange={(value) => setLoanTerm(value[0])}
                      max={40}
                      step={1}
                    />
                    <div className="flex justify-center gap-2 pt-4">
                      {[10, 15, 20, 25, 30].map((term) => (
                        <Button
                          key={term}
                          onClick={() => setLoanTerm(term)}
                          value={term}
                          variant="secondary"
                          className={`${
                            loanTerm === term
                              ? "bg-applyBtnOrange text-white"
                              : ""
                          } hover:bg-applyBtnOrange hover:text-white text-lg shadow`}
                        >
                          {term}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            {loanDetails && (
              <div className="flex flex-col gap-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Loan Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <p className="text-md font-medium flex gap-2 items-center">
                          Monthly EMI
                          <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                          </span>
                        </p>
                        <p className="text-2xl font-bold text-applyBtnOrange">
                          {formatCurrency(loanDetails.emi)}
                        </p>
                      </div>
                      <div>
                        <p className="text-md font-medium">Total Interest</p>
                        <p className="text-2xl font-bold">
                          {formatCurrency(loanDetails.totalInterest)}
                        </p>
                      </div>
                      <div>
                        <p className="text-md font-medium">Total Pay</p>
                        <p className="text-2xl font-bold">
                          {formatCurrency(loanDetails.totalPayment)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Amortization Chart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart
                        data={loanDetails.amortizationSchedule}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          stroke="#8884d8"
                          fill="#e65100"
                        />
                        <Area
                          type="monotone"
                          dataKey="interest"
                          stroke="#82ca9d"
                          fill="#82ca9d"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pie Chart</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center">
                    <h3 className="absolute font-bold text-2xl">
                      {formatCurrency(loanDetails.emi)} <br /> /month
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={[
                            {
                              name: "Total Interest",
                              value: loanDetails.amortizationSchedule.reduce(
                                (acc, cur) => acc + cur.interest,
                                0
                              ),
                            },
                            {
                              name: "Total Pay",
                              value: loanDetails.totalPayment,
                            },
                            {
                              name: "Principal",
                              value: loanDetails.amortizationSchedule.reduce(
                                (acc, cur) => acc + cur.principal,
                                0
                              ),
                            },
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          innerRadius={70}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          nameKey="name"
                          label={({ name, value }) =>
                            `${name}: ${value.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}`
                          }
                        >
                          <Cell fill="#0088FE" />
                          <Cell fill="#00C49F" />
                          <Cell fill="#FFBB28" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Amortization Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="text-lg">
                          <TableHead>Month</TableHead>
                          <TableHead>EMI</TableHead>
                          <TableHead>Principal</TableHead>
                          <TableHead>Interest</TableHead>
                          <TableHead>Balance</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loanDetails.amortizationSchedule
                          .slice(0, 20)
                          .map((row) => (
                            <TableRow className="text-base" key={row.month}>
                              <TableCell>{row.month}</TableCell>
                              <TableCell>{formatCurrency(row.emi)}</TableCell>
                              <TableCell>
                                {formatCurrency(row.principal)}
                              </TableCell>
                              <TableCell>
                                {formatCurrency(row.interest)}
                              </TableCell>
                              <TableCell>
                                {formatCurrency(row.balance)}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    {loanDetails.amortizationSchedule.length > 12 && (
                      <div className="mt-4 text-center">
                        <Button
                          type="button"
                          className="w-full font-bold bg-applyBtnOrange hover:bg-applyBtnOrange hover:opacity-80 transition-all duration-150"
                        >
                          View Full Schedule
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
