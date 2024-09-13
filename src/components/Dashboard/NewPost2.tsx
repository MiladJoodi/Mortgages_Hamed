"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormStatus } from "react-dom";

import { toast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { ToastAction } from "../ui/toast";
import { addPost } from "@/lib/action";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

export const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
  imageUrl: z.string().min(2, {
    message: "Image URL must be at least 2 characters.",
  }),
});

export function NewPost2() {
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const categories = ["Technology", "Travel", "Food", "Lifestyle", "Fashion"];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const { reset } = form;

  const sleep = (ms:number)=> new Promise(r=> setTimeout(r, ms));

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)
    await addPost(data);

    await sleep(3000)
    
    // Toast
    toast({
      title: "Done! ",
      description: "Misson completed succesfully",
      className: "bg-white",
      action: <ToastAction altText="Goto schedule to undo">👍</ToastAction>,
    });
    
    reset({title:"", content:"", imageUrl:""})
    setIsSubmitting(false)
  }

  return (
    <div className="bg-gray-50 p-8 flex flex-col gap-4 ">
      <h2 className="text-2xl">Create a new post</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="text-lg">Post Title</FormLabel>
                  <FormControl>
                    <Input
                      className="text-lg"
                      placeholder="Enter post title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <>
                {/* Post Title Input */}

                <FormItem>
                  <FormLabel className="text-lg">Post Content</FormLabel>
                  <FormControl>
                    <Textarea
                      className="text-lg"
                      placeholder="Write your post content here..."
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          {/* Image URl */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <>
                {/* Post Title Input */}

                <FormItem>
                  <FormLabel className="text-lg">Image URL</FormLabel>
                  <FormControl>
                    <Input
                      className="text-lg"
                      placeholder="Enter Image URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Posting...' : 'Post'}
      </Button>

        </form>
      </Form>
    </div>
  );
}
