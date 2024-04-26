import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ImagePage = ({ params }) => {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) return notFound();
  console.log(params);
  return (
    <div className="fullscrean-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        width={800}
        height={600}
        alt={newsItem.title}
        priority
      />
    </div>
  );
};

export default ImagePage;
