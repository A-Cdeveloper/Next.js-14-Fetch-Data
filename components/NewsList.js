import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((news) => {
        return (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <Image
                src={`/images/news/${news.image}`}
                width={600}
                height={400}
                alt={news.title}
              />
              <span>{news.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
