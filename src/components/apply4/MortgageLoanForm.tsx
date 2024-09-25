"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormState } from "react-dom";
import { createApplyForm4 } from "@/app/apply4/action";
import { toast } from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  DollarSign,
  Home,
  Briefcase,
  CreditCard,
  Building,
  MapPin,
  Percent,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Container from "../Container";
import { Button } from "../ui/button";

const MortgageApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  loanAmount: z.coerce.number().positive("Loan amount must be positive"),
  propertyValue: z.coerce.number().positive("Property value must be positive"),
  employmentStatus: z.enum(["Employed", "Self-Employed", "Unemployed"]),
  annualIncome: z.coerce.number().positive("Annual income must be positive"),
  creditScore: z.coerce.number().int().min(300).max(850),
  propertyType: z.enum(["Single Family", "Multi Family", "Condo", "Townhouse"]),
  propertyAddress: z
    .string()
    .min(5, "Property address must be at least 5 characters"),
  downPayment: z.coerce.number().positive("Down payment must be positive"),
  loanTerm: z.coerce.number().int().positive("Loan term must be positive"),
});

export type MortgageApplicationInputs = z.infer<
  typeof MortgageApplicationSchema
>;

export default function MortgageLoanForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MortgageApplicationInputs>({
    resolver: zodResolver(MortgageApplicationSchema),
  });
  //   const [state, formAction] = useFormState(submitMortgageApplication, null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  //   sleep
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit: SubmitHandler<MortgageApplicationInputs> = async (
    data: MortgageApplicationInputs
  ) => {
    setIsSubmitting(true);

    try {
      const result = await createApplyForm4(data);
      toast.success("Application submitted successfully!");
      await sleep(2000);
      router.push("/success");
    } catch (error) {
      toast.error("Failed to submit application.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }

    //   const formData = new FormData();
    //   console.log(formData)
    //   setIsSubmitting(false);

    // Object.entries(data).forEach(([key, value]) => {
    //   formData.append(key, value.toString());
    // });

    // const result = await formAction(formData);
    // setIsSubmitting(false);

    // if (result && result.error) {
    //   toast.error(result.error);
    // } else if (result && result.success) {
    //   toast.success("Application submitted successfully!");
    //   router.push("/success");
    // }
  };

  return (
    <section className="w-full mt-4 p-2">
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8 max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6 text-center flex items-center gap-2">
            Mortgage Loan Application
            <span className="relative flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex size-4 rounded-full bg-teal-500"></span>
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                {...register("fullName")}
                placeholder="Full Name"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Phone
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                {...register("phoneNumber")}
                placeholder="Phone Number"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="relative">
              <DollarSign
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                {...register("loanAmount")}
                placeholder="Loan Amount"
                type="number"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.loanAmount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.loanAmount.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Home className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                {...register("propertyValue")}
                placeholder="Property Value"
                type="number"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.propertyValue && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.propertyValue.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Briefcase
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <select
                {...register("employmentStatus")}
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Employment Status</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
              </select>
              {errors.employmentStatus && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.employmentStatus.message}
                </p>
              )}
            </div>

            <div className="relative">
              <DollarSign
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                {...register("annualIncome")}
                placeholder="Annual Income"
                type="number"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.annualIncome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.annualIncome.message}
                </p>
              )}
            </div>

            <div className="relative">
              <CreditCard
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                {...register("creditScore")}
                placeholder="Credit Score"
                type="number"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.creditScore && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.creditScore.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Building
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <select
                {...register("propertyType")}
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Property Type</option>
                <option value="Single Family">Single Family</option>
                <option value="Multi Family">Multi Family</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
              </select>
              {errors.propertyType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.propertyType.message}
                </p>
              )}
            </div>

            <div className="relative">
              <MapPin
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                {...register("propertyAddress")}
                placeholder="Property Address"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.propertyAddress && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.propertyAddress.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Percent
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                {...register("downPayment")}
                placeholder="Down Payment"
                type="number"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.downPayment && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.downPayment.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Calendar
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <input
                {...register("loanTerm")}
                placeholder="Loan Term (years)"
                type="number"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.loanTerm && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.loanTerm.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full bg-applyBtnOrange hover:bg-applyBtnOrange hover:opacity-80 transition-all p-6 text-lg duration-150"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>

          {/* {state && state.error && (
            <p className="text-red-500 text-sm mt-2">{state.error}</p>
          )} */}
        </form>
      </Container>
    </section>
  );
}
