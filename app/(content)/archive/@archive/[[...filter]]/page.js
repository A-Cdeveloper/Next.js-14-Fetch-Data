import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

const FilteredNewsPage = async ({ params }) => {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter ...</p>}>
        <FilterListSusspense year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news ...</p>}>
        <NewsListSusspense year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;

const NewsListSusspense = async ({ year, month }) => {
  let filteredNews;
  if (year && !month) {
    filteredNews = await getNewsForYear(year);
  }
  if (year && month) {
    filteredNews = await getNewsForYearAndMonth(year, month);
  }
  let newsContent = <p>No news for selected period.</p>;
  if (filteredNews && filteredNews.length > 0) {
    newsContent = <NewsList news={filteredNews} />;
  }

  return newsContent;

  // const news = await getAllNews();
  // return <NewsList news={news} />;
};

const FilterListSusspense = async ({ year, month }) => {
  const available = await getAvailableNewsYears();
  let links = available;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  if (
    (year && !available.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
