'use client';
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";

export default function InterceptedFullSizeImage({params}) {

    const router = useRouter();

    const { slug: newsItemSlug } = params;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

    if(!newsItem) {
        notFound();
    };

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}></div>
            <dialog className="modal" open>
                <div id="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}
                     style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            </dialog>
        </>
    );
}