import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LatestPage = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
