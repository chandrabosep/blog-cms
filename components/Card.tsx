import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Card({
  title,
  image,
  smallDescription,
  slug,
}: {
  title: string;
  image: string;
  slug: string;
  smallDescription: string;
}) {
  return (
    <div
      className={`w-fit flex flex-wrap border border-[#7777770e] dark:border-[#f3f3f31f] shadow-md dark:shadow-[#f3f3f32a] rounded-xl `}
    >
      <Image
        src={image}
        alt="avatar"
        width={500}
        height={500}
        className={`aspect-[16/9] rounded-t-xl  object-cover`}
      />

      <div className={`py-2.5 gap-5 px-4 flex flex-col justify-evenly`}>
        <div className={`flex flex-col`}>
          <h3 className="text-2xl font-medium text-[#191919] dark:text-[#f3f3f3]">
            {title}
          </h3>
          <p
            className={`text-sm line-clamp-3 text-[#767676] dark:text-[#bdbdbd] `}
          >
            {smallDescription}
          </p>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="w-fit px-6 h-9 flex items-center justify-center gap-3 rounded-full text-[#f3f3f3] group bg-[#616bffd7] hover:bg-[#616bffd7]"
        >
          Read More
          <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
        </Link>
      </div>
    </div>
  );
}
