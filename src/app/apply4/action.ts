"use server";

import { MortgageApplicationInputs } from "@/components/apply4/MortgageLoanForm";
import prisma from "@/lib/db";
import { z } from "zod";

export const createApplyForm4 = async (formData: MortgageApplicationInputs) => {
  try {
    const application = await prisma.mortgageApplication.create({
      data: {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        loanAmount: formData.loanAmount,
        propertyValue: formData.propertyValue,
        creditScore: formData.creditScore,
        employmentStatus: formData.employmentStatus,
        annualIncome: formData.annualIncome,
      },
    });
    console.log("created");
    return application;
  } catch (error) {
    console.log(error);
  }

  // const fullName = formData.get("fullName")
};

// const prisma = new PrismaClient()

// const MortgageApplicationSchema = z.object({
//   fullName: z.string().min(2, 'Full name must be at least 2 characters'),
//   email: z.string().email('Invalid email address'),
//   phoneNumber: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
//   loanAmount: z.coerce.number().positive('Loan amount must be positive'),
//   propertyValue: z.coerce.number().positive('Property value must be positive'),
//   employmentStatus: z.enum(['Employed', 'Self-Employed', 'Unemployed']),
//   annualIncome: z.coerce.number().positive('Annual income must be positive'),
//   creditScore: z.coerce.number().int().min(300).max(850),
//   propertyType: z.enum(['Single Family', 'Multi Family', 'Condo', 'Townhouse']),
//   propertyAddress: z.string().min(5, 'Property address must be at least 5 characters'),
//   downPayment: z.coerce.number().positive('Down payment must be positive'),
//   loanTerm: z.coerce.number().int().positive('Loan term must be positive'),
// })

// export async function submitMortgageApplication(prevState: any, formData: FormData) {
//   const validatedFields = MortgageApplicationSchema.safeParse({
//     fullName: formData.get('fullName'),
//     email: formData.get('email'),
//     phoneNumber: formData.get('phoneNumber'),
//     loanAmount: formData.get('loanAmount'),
//     propertyValue: formData.get('propertyValue'),
//     employmentStatus: formData.get('employmentStatus'),
//     annualIncome: formData.get('annualIncome'),
//     creditScore: formData.get('creditScore'),
//     propertyType: formData.get('propertyType'),
//     propertyAddress: formData.get('propertyAddress'),
//     downPayment: formData.get('downPayment'),
//     loanTerm: formData.get('loanTerm'),
//   })

//   if (!validatedFields.success) {
//     return { error: 'Invalid form data. Please check your inputs.' }
//   }

//   try {
//     await prisma.mortgageApplication.create({
//       data: validatedFields.data,
//     })
//     return { success: true }
//   } catch (error) {
//     console.error('Error submitting application:', error)
//     return { error: 'Failed to submit application. Please try again.' }
//   } finally {
//     await prisma.$disconnect()
//   }
// }
