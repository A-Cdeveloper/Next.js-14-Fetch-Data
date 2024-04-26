// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";
import { Suspense } from "react";

const NewsPage = async () => {
  // via API
  // const response = await fetch("http://localhost:8080/news");
  // if (!response.ok) {
  //   throw new Error("News cant be fetched");
  // }
  // const news = await response.json();

  // const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      {/* <NewsList news={news} /> */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <NewsListSusspense />
      </Suspense>
    </>
  );
};

export default NewsPage;

const NewsListSusspense = async () => {
  const news = await getAllNews();
  return <NewsList news={news} />;
};
