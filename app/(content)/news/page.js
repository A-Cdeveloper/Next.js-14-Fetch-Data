// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

const NewsPage = () => {
  // via API
  // const response = await fetch("http://localhost:8080/news");
  // if (!response.ok) {
  //   throw new Error("News cant be fetched");
  // }
  // const news = await response.json();

  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
