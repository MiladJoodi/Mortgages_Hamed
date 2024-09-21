"use server";

import Post from "@/models/PostModel";
import dbConnect from "./connectToDb";
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import Apply from "@/models/ApplyModel";

// export interface FormDataType {
//   title: string;
//   content: string;
//   imageUrl: string;
// }

// POST Method
export const addPost = async (formData: any) => {

  try {
    await dbConnect();
    const data = {
      title: formData.title,
      content: formData.content,
      imageUrl: formData.imageUrl,
    };
    const saveUser = await new Post(data).save();
    revalidatePath('/blog')
    console.log(saveUser);
  } catch (error) {
    console.log(error);
  }
};

// GET Method
export const getPosts = async () => {
  try {
    await dbConnect();
    const response = await Post.find().exec();
    console.log(response);
    return response;

  } catch (error) {
    console.log(error);
  }
};

// POST APPLY 2
// zod Schema Validation
const applyFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phoneNumber:  z.string().min(10).refine(val => /^\d+$/.test(val), {
    message: "Phone number must contain only digits"
  }),
  loanAmount: z.number().min(1000).max(1000000),
  loanPurpose: z.string(),
  employmentStatus: z.string(),
annualIncome: z.number(),
creditScore: z.number().min(300).max(800),
hasCollateral: z.boolean(),
agreeToTerms: z.boolean(),
});

export const submitApply = async (data: z.infer<typeof applyFormSchema>)=>{
  console.log("pre try")
  try{
    await dbConnect();
    console.log("Connected to database");

    const validatedData = applyFormSchema.parse(data);
    
    // const applicationData = {
    //   ...validatedData
    // }
    const saveForm = await new Apply(validatedData).save();
    // revalidatePath('/blog')
    console.log("Application saved:", saveForm);
    return { success: true, message: "Application submitted successfully." };

  } catch(error){
    console.error('Error submitting loan application:', error)
    return { success: false, message: "There was an error submitting your application. Please try again." }
  }
}


// POST APPLY 3
const applicationSchema = z.object({
  personalInfo: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    dob: z.string(),
  }),
  loanInfo: z.object({
    loanType: z.enum(["mortgage", "personal", "auto"]),
    loanAmount: z.number(),
    loanTerm: z.number(),
    interestRate: z.number(),
  }),
  employmentInfo: z.object({
    employmentStatus: z.enum(["employed", "self-employed", "unemployed"]),
    employerName: z.string().optional(),
    annualIncome: z.number(),
    yearsAtJob: z.number(),
  }),
  assets: z.array(z.object({
    assetType: z.enum(["savings", "investments", "property"]),
    value: z.number(),
  })),
  liabilities: z.array(z.object({
    liabilityType: z.enum(["credit_card", "student_loan", "car_loan"]),
    amount: z.number(),
  })),
  documents: z.object({
    idProof: z.any().optional(),
    incomeProof: z.any().optional(),
    bankStatements: z.any().optional(),
  }),
  termsAccepted: z.boolean(),
})

export async function submitApply3(data: z.infer<typeof applicationSchema>) {
  try {
    // Validate the data
    const validatedData = applicationSchema.parse(data)

    // In a real application, you would process the file uploads here
    // For this example, we'll just remove the file objects
    const applicationData = {
      ...validatedData,
      documents: {
        idProof: validatedData.documents.idProof ? 'Uploaded' : 'Not provided',
        incomeProof: validatedData.documents.incomeProof ? 'Uploaded' : 'Not provided',
        bankStatements: validatedData.documents.bankStatements ? 'Uploaded' : 'Not provided',
      },
    }

    // Save the application to the database
    const saveForm3 = await new Apply(validatedData).save();
    // revalidatePath('/blog')
    console.log("Application saved:", saveForm3);
    return { success: true, message: "Application submitted successfully." };

    // In a real application, you might want to send an email to the applicant here

    return { success: true, message: "Your loan application has been submitted successfully!" }
  } catch (error) {
    console.error('Error submitting loan application:', error)
    return { success: false, message: "There was an error submitting your application. Please try again." }
  }
}




