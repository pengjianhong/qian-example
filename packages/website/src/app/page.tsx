import Article from "@/components/Article";
import { fetchStrapi } from "@/services";
import { ApiQianQian } from "cms/types/generated/contentTypes";

type QianType = ApiQianQian['attributes'] & {
  id: number,
  documentId: string,
}
export default async function Home() {
  const data = await fetchStrapi('qians', {
    'pagination[pageSize]': '15',
    sort: 'date:desc',
    populate: 'thumbnail',
  });
  const qians = await data.json();
  return (
    qians.data.map((qian: QianType) => (
        <Article key={qian.id} title={qian.title} content={qian.content} date={qian.date} >
          <img src={qian.thumbnail.formats.thumbnail.url} alt={qian.title} loading="lazy" width={100} height={150} />
        </Article>
    ))
  )
}