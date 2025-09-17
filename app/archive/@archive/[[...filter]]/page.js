import NewsList from "@/components/news-list";
import Link from "next/link";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYearAndMonth } from "@/lib/news";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}) {
  const filter = params.filter;

  const newsYear = filter?.[0];
  const newsMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if(newsYear && !newsMonth) {
    news = getNewsForYear(newsYear);
    links = getAvailableNewsMonths(newsYear); 
  }

  if(newsYear && newsMonth) {
    news = getNewsForYearAndMonth(newsYear, newsMonth);
    links = [];
  }

  let newsContent = <p className="no-news">No news found for the selected period!</p>;

  if(news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if((newsYear && !getAvailableNewsYears().includes(+newsYear)) || (newsMonth && !getAvailableNewsMonths(newsYear).includes(+newsMonth))) {
    throw new Error('Invalid filter, please adjust your values!');
  }

  return (
    <>
    <header id="archive-header">
        <nav>
            <ul>
                {links.map((link) => {
                    const href = newsYear ? `/archive/${newsYear}/${link}` : `/archive/${link}`;
                    return (
                        <li key={link}>
                            <Link href={href}>{link}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </header>
    {newsContent}
    </>
  )
};
