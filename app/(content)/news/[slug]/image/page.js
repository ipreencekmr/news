import { DUMMY_NEWS } from "@/dummy-news";

export default function FullSizeImage({params}) {

    const { slug: newsItemSlug } = params;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

    if(!newsItem) {
        notFound();
    };

    return (
        <div id="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}