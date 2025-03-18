import SimpleNewsCard from "@/components/news/items/SimpleNewsCard";
import LatestNews from "@/components/news/LatestNews";
import PopularNews from "@/components/news/PopularNews";
import Title from "@/components/Title";
import HeadLines from "@/components/ui/HeadLines";
import { base_api_url } from "@/config/config";

export default async function  Home() {
  const news_data = await fetch(`${base_api_url}/api/news/get-all-news`, {
    next: {
      revalidate: 5,
    },
  });
  const newsArray = (await news_data?.json())?.news || [];
  console.log(newsArray44, 'newsArray');
  
  
  return (
    <>
      <main>
        <HeadLines />
        <div className="bg-slate-100">
          <div className="px-4 md:px-8 py-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12">
                <LatestNews />
              </div>
              <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
                <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                  <Title title="Technology" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    {/* { news?.length > 0 &&
                    news["Technology"]?.map((item, index) => (
                      console.log(item, 'item')
                      
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PopularNews/>
      </main>
    </>
  );
}
