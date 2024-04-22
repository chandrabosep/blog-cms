import { types } from "@/Interface/types";
import Card from "@/components/Card";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 0;

async function getData() {
  const query = `*[_type=='blog'] | order(_createdAt asc) {
    title,
    smallDescription,
    "currentSlug":slug.current,
    titleImage
  }
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="max-w-screen-xl w-11/12 mx-auto flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-3 gap-8 md:gap-4 py-10 md:py-20">
        {data.map(
          ({
            currentSlug,
            titleImage,
            title,
            smallDescription,
            index,
          }: types) => (
            <div key={index} className="col-span-1">
              <Card
                key={index}
                slug={currentSlug}
                image={titleImage && urlFor(titleImage).url()}
                title={title}
                smallDescription={smallDescription}
              />
            </div>
          )
        )}
      </div>
    </main>
  );
}
