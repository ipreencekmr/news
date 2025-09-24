import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedFullSizeImage({params}) {

    const { slug: newsItemSlug } = params;
    const newsItem = await getNewsItem(newsItemSlug);

    if(!newsItem) {
        notFound();
    };

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div id="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}
                     style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            </dialog>
        </>
    );
}