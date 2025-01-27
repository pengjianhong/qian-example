import Article from "@/components/Article";
import { fetchStrapi } from "@/services";

type QianType = {
  id: number,
  documentId: string,
  title: string,
  content: string,
  date: string,
  thumbnail: {
    formats: {
      thumbnail: {
        url: string
      }
    }
  }
}

export default async function Home() {
  const data = await fetchStrapi('qians', {
    'pagination[pageSize]': '15',
    sort: 'date:desc',
    populate: 'thumbnail',
  });
  const qians = await data.json();
  console.log('Strapi response:', JSON.stringify(qians.data[0], null, 2));
  
  return (
    <main>
      {qians.data.map((qian: QianType) => (
          <Article key={qian.id} title={qian.title} content={qian.content} date={qian.date}>
            <img 
              src={qian.thumbnail.formats.thumbnail.url} 
              alt={qian.title} 
              loading="lazy" 
              width={100} 
              height={150} 
            />
          </Article>
      ))}
    </main>
  )
}