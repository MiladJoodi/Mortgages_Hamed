"use server";

import Post from "@/models/PostModel";
import dbConnect from "./connectToDb";

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
