import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import Backdrop from "@/components/Backdrop";
import Image from "next/image";

const InterceptedImagePage = async ({ params }) => {
  const { slug } = params;
  //const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);
  const newsItem = await getNewsItem(slug);

  if (!newsItem) return notFound();

  return (
    <>
      <Backdrop />
      <dialog className="modal" open>
        <div className="fullscrean-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            width={740}
            height={480}
            alt={newsItem.title}
            priority
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
