import { createPostPrisma } from "@/lib/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// Zod Validation
const postPrismaSchema = z.object({
  title: z.string().min(1, "Title is required").max(100,"Title must be less than 100 characters"),
  description: z.string().min(1, "Title is description").max(500,"description must be less than 500 characters"),
  imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
});

type FormData = z.infer<typeof postPrismaSchema>



const NewPostPrisma = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(postPrismaSchema),
      })
    
    //   On Submit
      const onSubmit = async (data: FormData)=>{
        setIsSubmitting(true)
        try{
            const result = await createPostPrisma(data)
            if(result.success){
                toast.success('Post created successfully!');
                reset();
            }else{
                toast.error(result.message || 'Failed to create post')
            }
        }catch(error){
            toast.error("An unexpected error occurred")
        }finally {
            setIsSubmitting(false)
          }
      }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-md mx-auto"
      >
        <div>
          <Input
            {...register("title")}
            placeholder="Title"
            className={errors.title ? "border-red-500" : ""}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <Textarea
            {...register("description")}
            placeholder="Description"
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <Input
            {...register("imageUrl")}
            placeholder="Image URL (optional)"
            className={errors.imageUrl ? "border-red-500" : ""}
          />
          {errors.imageUrl && (
            <p className="text-red-500 text-sm mt-1">
              {errors.imageUrl.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Post"}
        </Button>
      </form>
    </div>
  );
};

export default NewPostPrisma;
