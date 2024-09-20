"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2, Upload } from "lucide-react";
import Container from "@/components/Container";
import { submitApply } from "@/lib/action";
import { ToastAction } from "@/components/ui/toast";

// Zod schema for validation
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  loanAmount: z
    .number()
    .min(1000, { message: "Loan amount must be at least $1,000." })
    .max(1000000, { message: "Loan amount cannot exceed $1,000,000." }),
  loanPurpose: z.string().min(1, { message: "Loan purpose is required." }),
  employmentStatus: z.enum(["employed", "self-employed", "unemployed"]),
  annualIncome: z
    .number()
    .min(0, { message: "Annual income cannot be negative." }),
  creditScore: z
    .number()
    .min(300, { message: "Credit score must be at least 300." })
    .max(850, { message: "Credit score cannot exceed 850." }),
  hasCollateral: z.boolean(),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the terms and conditions.",
    }),
});

// Define TypeScript types for form data
type FormData = z.infer<typeof formSchema>;

const Page = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Set up form handling with TypeScript types
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanAmount: 10000,
      creditScore: 700,
      hasCollateral: false,
      agreeToTerms: false,
    },
  });

  const watchFields = watch();

  const updateProgress = () => {
    const totalFields = Object.keys(formSchema.shape).length;
    const filledFields = Object.values(watchFields).filter(Boolean).length;
    setProgress((filledFields / totalFields) * 100);
  };

  // Handle form submission with typed data
  const onSubmit: SubmitHandler<FormData> = async (data:z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Fetch
    await submitApply(data as any);
    
    
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    toast({
      title: "Application Submitted",
      description: "Your loan application has been successfully submitted.",
      className: "bg-white",
      action: <ToastAction altText="Goto schedule to undo">👍</ToastAction>,
    });
    setIsSubmitting(false);
  };

  return (
    <section className="w-full mt-4 p-2">
      <Container>
        <Card className="w-full p-4 mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-3xl flex items-center gap-2">
              
              Loan Application
              <span className="relative flex size-4">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex size-4 rounded-full bg-teal-500"></span>
                        </span>
               </CardTitle>
            <CardDescription className="text-lg">
              Please fill out the form below to apply for a loan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              onChange={updateProgress}
              className="space-y-8 p-4"
            >
              <Progress value={progress} className="w-full" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-lg">Full Name</Label>
                    <Input type="text" id="fullName" className="text-lg" {...register("fullName")} />
                    {errors.fullName && (
                      <p className="text-sm text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input id="email" className="text-lg" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-lg">Phone Number</Label>
                  <Input type="number" id="phoneNumber" className="text-lg" {...register("phoneNumber")} />
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Loan Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="loanAmount" className="text-lg">Loan Amount</Label>
                  <Slider
                    id="loanAmount"
                    min={1000}
                    max={1000000}
                    step={1000}
                    className="text-lg"
                    value={[watchFields.loanAmount]}
                    onValueChange={(value) => setValue("loanAmount", value[0])}
                  />
                  <div className="text-right text-lg font-bold">
                    ${watchFields.loanAmount?.toLocaleString()}
                  </div>
                  {errors.loanAmount && (
                    <p className="text-sm text-red-500">
                      {errors.loanAmount.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loanPurpose" className="text-lg">Loan Purpose</Label>
                  <Select
                    onValueChange={(value) => setValue("loanPurpose", value)}
                  >
                    <SelectTrigger id="loanPurpose">
                      <SelectValue className="text-lg" placeholder="Select loan purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="text-lg" value="business">Business</SelectItem>
                      <SelectItem className="text-lg" value="personal">Personal</SelectItem>
                      <SelectItem className="text-lg" value="education">Education</SelectItem>
                      <SelectItem className="text-lg" value="debt-consolidation">
                        Debt Consolidation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.loanPurpose && (
                    <p className="text-sm text-red-500">
                      {errors.loanPurpose.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Employment Information
                </h3>
                <div className="space-y-2">
                  <Label className="text-lg">Employment Status</Label>
                  <RadioGroup
                    onValueChange={(value: any) =>
                      setValue("employmentStatus", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="employed" id="employed" />
                      <Label htmlFor="employed" className="text-lg">Employed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="self-employed"
                        id="self-employed"
                      />
                      <Label htmlFor="self-employed" className="text-lg">Self-employed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unemployed" id="unemployed" />
                      <Label htmlFor="unemployed" className="text-lg">Unemployed</Label>
                    </div>
                  </RadioGroup>
                  {errors.employmentStatus && (
                    <p className="text-sm text-red-500">
                      {errors.employmentStatus.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="annualIncome" className="text-lg">Annual Income</Label>
                  <Input
                    id="annualIncome"
                    type="number"
                    className="text-lg"
                    {...register("annualIncome", { valueAsNumber: true })}
                  />
                  {errors.annualIncome && (
                    <p className="text-sm text-red-500">
                      {errors.annualIncome.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="creditScore" className="text-lg">Credit Score</Label>
                  <Slider
                    id="creditScore"
                    min={300}
                    max={850}
                    step={1}
                    className="text-lg"
                    value={[watchFields.creditScore]}
                    onValueChange={(value) => setValue("creditScore", value[0])}
                  />
                  <div className="text-right">{watchFields.creditScore}</div>
                  {errors.creditScore && (
                    <p className="text-sm text-red-500">
                      {errors.creditScore.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="hasCollateral"
                    className="text-lg"
                    checked={watchFields.hasCollateral}
                    onCheckedChange={(checked) =>
                      setValue("hasCollateral", checked)
                    }
                  />
                  <Label htmlFor="hasCollateral" className="text-lg">
                    I have collateral for this loan
                  </Label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Document Upload</h3>
                <div className="space-y-2">
                  <Label htmlFor="documents" className="text-lg">Upload Documents</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="documents"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-base">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          PDF, PNG, JPG or GIF (MAX. 10MB)
                        </p>
                      </div>
                      <input
                        id="documents"
                        type="file"
                        className="hidden"
                        multiple
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="agreeToTerms"
                  checked={watchFields.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setValue("agreeToTerms", checked)
                  }
                />
                <Label htmlFor="agreeToTerms">
                  I agree to the terms and conditions
                </Label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-sm text-red-500">
                  {errors.agreeToTerms.message}
                </p>
              )}

              <Button type="submit" className="w-full bg-applyBtnOrange hover:bg-applyBtnOrange hover:opacity-80 transition-all p-6 text-lg duration-150" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default Page;
