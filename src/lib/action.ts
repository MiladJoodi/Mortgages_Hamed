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




