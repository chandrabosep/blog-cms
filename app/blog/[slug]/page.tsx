import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

export const revalidate = 0;

async function getData(slug: string) {
  const query = `*[_type=='blog' && slug.current=='${slug}'] {
    "currentSlug":slug.current,
      title,
      content,
      titleImage,
    }[0]
    `;
  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }: { params: { slug: string } }) {
  const data: {
    cuurentSlug: string;
    title: string;
    content: any;
    titleImage: any;
  } = await getData(params.slug);
  return (
    <div className="max-w-screen-md w-11/12 mx-auto flex flex-col gap-8 justify-center items-center py-10 md:py-20">
      <span className="text-xl font-medium text-[#2d73ff]">
        Chnadra Bose - Author
      </span>
      <h1 className="text-4xl md:text-6xl font-medium ">{data.title}</h1>
      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        className="w-full md:w-fit"
        width={1000}
        height={1000}
        priority
      />

      <div className="prose md:prose-xl dark:prose-invert prose=li:marker:text-[#2d73ff]">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
