import Image from "next/image";
import Link from "next/link";

interface PostProps {
  title: string;
  content: string;
  imageUrl: string;
}

const PostCard = ({ title, content, imageUrl }: PostProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image src={imageUrl} width={500} height={400} alt={title} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>

        <Link href="#">
          <h3 className="mt-0.5 text-lg text-gray-900 line-clamp-1">
            {title}
            </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {content}
          </p>
      </div>
    </div>
  );
};

export default PostCard;
