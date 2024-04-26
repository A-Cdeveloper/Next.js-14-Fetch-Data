import { DUMMY_NEWS } from "@/dummy-news";
import { db } from "./database";

const news = db.prepare("SELECT * FROM news").all();

export function getAllNews() {
  return news;
  // return DUMMY_NEWS;
}

export function getLatestNews() {
  return news.slice(0, 3);
}

export function getAvailableNewsYears() {
  return news
    .reduce((years, news) => {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [])
    .sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return news
    .reduce((months, news) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month = new Date(news.date).getMonth();
        if (!months.includes(month)) {
          months.push(month + 1);
        }
      }
      return months;
    }, [])
    .sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return news.filter((news) => new Date(news.date).getFullYear() === +year);
}

export function getNewsForYearAndMonth(year, month) {
  return news.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
