// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

const NewsPage = async () => {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("News cant be fetched");
  }
  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
