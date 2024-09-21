"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { submitApply3 } from "@/lib/action";
import Container from "@/components/Container";

const schema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    dob: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "Date of birth must be in YYYY-MM-DD format"
      ),
  }),
  loanInfo: z.object({
    loanType: z.enum(["mortgage", "personal", "auto"]),
    loanAmount: z.number().min(1000, "Loan amount must be at least $1,000"),
    loanTerm: z.number().min(1, "Loan term must be at least 1 year"),
    interestRate: z.number().min(0, "Interest rate cannot be negative"),
  }),
  employmentInfo: z.object({
    employmentStatus: z.enum(["employed", "self-employed", "unemployed"]),
    employerName: z.string().optional(),
    annualIncome: z.number().min(0, "Annual income cannot be negative"),
    yearsAtJob: z.number().min(0, "Years at job cannot be negative"),
  }),
  assets: z.array(
    z.object({
      assetType: z.enum(["savings", "investments", "property"]),
      value: z.number().min(0, "Asset value cannot be negative"),
    })
  ),
  liabilities: z.array(
    z.object({
      liabilityType: z.enum(["credit_card", "student_loan", "car_loan"]),
      amount: z.number().min(0, "Liability amount cannot be negative"),
    })
  ),
  documents: z.object({
    idProof: z.instanceof(File).optional(),
    incomeProof: z.instanceof(File).optional(),
    bankStatements: z.instanceof(File).optional(),
  }),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

type FormData = z.infer<typeof schema>;

const page = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitApply3(data);
      setSubmitResult(result);
      console.log(result)
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An error occurred while submitting your application.",
      });
    }
    setIsSubmitting(false);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-center text-3xl flex items-center gap-2">
                Personal Information
              </CardTitle>
              <CardDescription className="text-lg">
                Please provide your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-lg">
                    First Name
                  </Label>
                  <Input
                    className="text-lg"
                    id="firstName"
                    {...register("personalInfo.firstName")}
                  />
                  {errors.personalInfo?.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.personalInfo.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-lg">
                    Last Name
                  </Label>
                  <Input
                    className="text-lg"
                    id="lastName"
                    {...register("personalInfo.lastName")}
                  />
                  {errors.personalInfo?.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.personalInfo.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <Input
                  className="text-lg"
                  id="email"
                  type="email"
                  {...register("personalInfo.email")}
                />
                {errors.personalInfo?.email && (
                  <p className="text-red-500 text-sm">
                    {errors.personalInfo.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone" className="text-lg">
                  Phone
                </Label>
                <Input
                  className="text-lg"
                  id="phone"
                  {...register("personalInfo.phone")}
                />
                {errors.personalInfo?.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.personalInfo.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="dob" className="text-lg">
                  Date of Birth
                </Label>
                <Input
                  className="text-lg"
                  id="dob"
                  type="date"
                  {...register("personalInfo.dob")}
                />
                {errors.personalInfo?.dob && (
                  <p className="text-red-500 text-sm">
                    {errors.personalInfo.dob.message}
                  </p>
                )}
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-center text-3xl flex items-center gap-2">
                Loan Information
              </CardTitle>
              <CardDescription className="text-lg">
                Please provide details about the loan you're applying for
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="loanType">Loan Type</Label>
                <Select {...register("loanInfo.loanType")}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
                  <option value="mortgage">Mortgage</option>
                  <option value="personal">Personal Loan</option>
                  <option value="auto">Auto Loan</option>
                </Select>
                {errors.loanInfo?.loanType && (
                  <p className="text-red-500 text-sm">
                    {errors.loanInfo.loanType.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  {...register("loanInfo.loanAmount", { valueAsNumber: true })}
                />
                {errors.loanInfo?.loanAmount && (
                  <p className="text-red-500 text-sm">
                    {errors.loanInfo.loanAmount.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="loanTerm">Loan Term (years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  {...register("loanInfo.loanTerm", { valueAsNumber: true })}
                />
                {errors.loanInfo?.loanTerm && (
                  <p className="text-red-500 text-sm">
                    {errors.loanInfo.loanTerm.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  {...register("loanInfo.interestRate", {
                    valueAsNumber: true,
                  })}
                />
                {errors.loanInfo?.interestRate && (
                  <p className="text-red-500 text-sm">
                    {errors.loanInfo.interestRate.message}
                  </p>
                )}
              </div>
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle>Employment Information</CardTitle>
              <CardDescription>
                Please provide details about your employment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="employmentStatus">Employment Status</Label>
                <Select {...register("employmentInfo.employmentStatus")}>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                </Select>
                {errors.employmentInfo?.employmentStatus && (
                  <p className="text-red-500 text-sm">
                    {errors.employmentInfo.employmentStatus.message}
                  </p>
                )}
              </div>
              {watch("employmentInfo.employmentStatus") !== "unemployed" && (
                <div>
                  <Label htmlFor="employerName">Employer Name</Label>
                  <Input
                    id="employerName"
                    {...register("employmentInfo.employerName")}
                  />
                  {errors.employmentInfo?.employerName && (
                    <p className="text-red-500 text-sm">
                      {errors.employmentInfo.employerName.message}
                    </p>
                  )}
                </div>
              )}
              <div>
                <Label htmlFor="annualIncome">Annual Income</Label>
                <Input
                  id="annualIncome"
                  type="number"
                  {...register("employmentInfo.annualIncome", {
                    valueAsNumber: true,
                  })}
                />
                {errors.employmentInfo?.annualIncome && (
                  <p className="text-red-500 text-sm">
                    {errors.employmentInfo.annualIncome.message}
                  </p>
                )}
              </div>
              {watch("employmentInfo.employmentStatus") !== "unemployed" && (
                <div>
                  <Label htmlFor="yearsAtJob">Years at Current Job</Label>
                  <Input
                    id="yearsAtJob"
                    type="number"
                    {...register("employmentInfo.yearsAtJob", {
                      valueAsNumber: true,
                    })}
                  />
                  {errors.employmentInfo?.yearsAtJob && (
                    <p className="text-red-500 text-sm">
                      {errors.employmentInfo.yearsAtJob.message}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </>
        );
      case 4:
        return (
          <>
            <CardHeader>
              <CardTitle>Assets and Liabilities</CardTitle>
              <CardDescription>
                Please provide information about your assets and liabilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Assets</Label>
                {/* This is a simplified version. In a real application, you'd want to allow adding multiple assets dynamically */}
                <div className="grid grid-cols-2 gap-4">
                  <Select {...register("assets.0.assetType")}>
                    <option value="savings">Savings</option>
                    <option value="investments">Investments</option>
                    <option value="property">Property</option>
                  </Select>
                  <Input
                    type="number"
                    {...register("assets.0.value", { valueAsNumber: true })}
                    placeholder="Value"
                  />
                </div>
                {errors.assets && (
                  <p className="text-red-500 text-sm">
                    Please provide valid asset information
                  </p>
                )}
              </div>
              <div>
                <Label>Liabilities</Label>
                {/* This is a simplified version. In a real application, you'd want to allow adding multiple liabilities dynamically */}
                <div className="grid grid-cols-2 gap-4">
                  <Select {...register("liabilities.0.liabilityType")}>
                    <option value="credit_card">Credit Card</option>
                    <option value="student_loan">Student Loan</option>
                    <option value="car_loan">Car Loan</option>
                  </Select>
                  <Input
                    type="number"
                    {...register("liabilities.0.amount", {
                      valueAsNumber: true,
                    })}
                    placeholder="Amount"
                  />
                </div>
                {errors.liabilities && (
                  <p className="text-red-500 text-sm">
                    Please provide valid liability information
                  </p>
                )}
              </div>
            </CardContent>
          </>
        );
      case 5:
        return (
          <>
            <CardHeader>
              <CardTitle>Document Upload</CardTitle>
              <CardDescription>
                Please upload the required documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="idProof">ID Proof</Label>
                <Input
                  id="idProof"
                  type="file"
                  {...register("documents.idProof")}
                />
                {errors.documents?.idProof && (
                  <p className="text-red-500 text-sm">
                    {errors.documents.idProof.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="incomeProof">Income Proof</Label>
                <Input
                  id="incomeProof"
                  type="file"
                  {...register("documents.incomeProof")}
                />
                {errors.documents?.incomeProof && (
                  <p className="text-red-500 text-sm">
                    {errors.documents.incomeProof.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="bankStatements">Bank Statements</Label>
                <Input
                  id="bankStatements"
                  type="file"
                  {...register("documents.bankStatements")}
                />
                {errors.documents?.bankStatements && (
                  <p className="text-red-500 text-sm">
                    {errors.documents.bankStatements.message}
                  </p>
                )}
              </div>
            </CardContent>
          </>
        );
      case 6:
        return (
          <>
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
              <CardDescription>
                Please review and accept our terms and conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="termsAccepted" {...register("termsAccepted")} />
                <Label htmlFor="termsAccepted">
                  I accept the terms and conditions
                </Label>
              </div>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm">
                  {errors.termsAccepted.message}
                </p>
              )}
            </CardContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full mt-4 p-2">
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl w-full mx-auto py-8"
        >
          <Card className="h-[550px] ">
            {renderStep()}
            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button
                  className="hover:bg-applyBtnOrange hover:text-white hover:opacity-80 transition-all p-6 text-lg duration-150"
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                >
                  Previous
                </Button>
              )}
              {step < 6 ? (
                <Button
                  className="bg-applyBtnOrange hover:bg-applyBtnOrange hover:opacity-80 transition-all p-6 text-lg duration-150"
                  type="button"
                  onClick={nextStep}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </CardFooter>
          </Card>
          <Progress value={(step / 6) * 100} className="mt-4" />
          {submitResult && (
            <div
              className={`mt-4 p-4 ${
                submitResult.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              } rounded`}
            >
              {submitResult.message}
            </div>
          )}
        </form>
      </Container>
    </section>
  );
};

export default page;
