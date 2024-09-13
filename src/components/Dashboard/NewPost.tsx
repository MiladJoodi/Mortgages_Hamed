import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function NewPost() {
  const categories = ["Technology", "Travel", "Food", "Lifestyle", "Fashion"]

  return (
    <div className="w-full mx-auto p-4 bg-slate-50">
      <h1 className="text-2xl font-bold mb-6">Create a New Post</h1>
      <form className="space-y-6">
        <div>
          <Label htmlFor="title" className="text-lg">Post Title</Label>
          <Input id="title" placeholder="Enter post title" className="mt-1 text-md" />
        </div>

        <div>
          <Label htmlFor="content" className="text-lg">Post Content</Label>
          <Textarea id="content" placeholder="Write your post content here..." className="mt-1 text-md" rows={6} />
        </div>

        <div>
          <Label htmlFor="tags" className="text-lg">Tags</Label>
          <Input id="tags" placeholder="Enter tags separated by commas" className="mt-1 text-md" />
        </div>

        <div>
          <Label htmlFor="image" className="text-lg">Upload Image</Label>
          <div className="mt-1 flex items-center">
            <Input
              id="image"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <Label
              htmlFor="image"
              className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Choose file
            </Label>
            <span className="ml-3 text-sm text-gray-500" id="file-name">
              No file chosen
            </span>
          </div>
        </div>

        <div>
          <Label className="mb-2 block text-lg">Categories</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <Checkbox id={category} />
                <Label htmlFor={category} className="ml-2 text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full">
          Create Post
        </Button>

      </form>
    </div>
  )
}