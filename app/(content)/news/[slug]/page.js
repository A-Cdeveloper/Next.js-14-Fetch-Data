import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetailsPage = ({ params }) => {
  const { slug } = params;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) return notFound();
  const { id, title, image, date, content } = newsItem;

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <Image
            src={`/images/news/${image}`}
            width={600}
            height={400}
            alt={title}
            priority
          />
        </Link>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
      </header>

      <p>{content}</p>
    </article>
  );
};

export default NewsDetailsPage;
