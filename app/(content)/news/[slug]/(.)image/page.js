"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) return notFound();

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          router.back();
        }}
      />
      <dialog className="modal" open>
        <div className="fullscrean-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            width={740}
            height={480}
            alt={newsItem.title}
            priority
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
