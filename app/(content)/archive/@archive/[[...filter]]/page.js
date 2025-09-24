import NewsList from "@/components/news-list";
import Link from "next/link";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYearAndMonth } from "@/lib/news";
import { getNewsForYear } from "@/lib/news";
import { Suspense } from "react";

async function FilterHeader({year, month}) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if(year && !month) {
    links = getAvailableNewsMonths(year); 
  }

  if(year && month) {
    links = [];
  }

  if((year && !availableYears.includes(year)) || 
  (month && !getAvailableNewsMonths(year).includes(month))) {
    throw new Error('Invalid filter, please adjust your values!');
  }

  return (<header id="archive-header">
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
    </header>)
};

async function FilteredNews({year, month}) {
  let news;

  if(year && !month) {
    news = await getNewsForYear(year);
  }else if(year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p className="no-news">No news found for the selected period!</p>;

  if(news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({params}) {
  const filter = params.filter;

  const newsYear = filter?.[0];
  const newsMonth = filter?.[1];

  return (
    <>
    <Suspense fallback={<p>Loading filter...</p>}>
       <FilterHeader year={newsYear} month={newsMonth} />
    </Suspense>
    <Suspense fallback={<p>Loading news...</p>}>
       <FilteredNews year={newsYear} month={newsMonth} />
    </Suspense>
    </>
  )
};
