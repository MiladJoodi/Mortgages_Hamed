import Container from "@/components/Container";
import PostCard from "@/components/Post/PostCard";
import { getPosts, getPostsPrisma } from "@/lib/action";
import Link from "next/link";
import PostCardPrisma from "./Postcardprisma";



const BlogPrisma = async () => {

   const posts = await getPostsPrisma();
   
  return (
    <div className="mt-4">
      <Container>
        <div className="rounded-xl p-4 md:p-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">My Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between flex-wrap gap-8">
              {posts !== undefined && posts?.map((post, index)=> (
                  <div key={index}>
                     <PostCardPrisma title={post.title} description={post.description} imageUrl={post.imageUrl} />
                  </div>
              ))}
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPrisma;
