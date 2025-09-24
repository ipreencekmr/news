import { getNewsItem } from "@/lib/news";

export default async function FullSizeImage({params}) {

    const { slug: newsItemSlug } = params;
    const newsItem = await getNewsItem(newsItemSlug);

    if(!newsItem) {
        notFound();
    };

    return (
        <div id="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}