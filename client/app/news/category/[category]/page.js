


import React from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SimpleDetailsNewCard from "@/components/news/items/SimpleDetailsNewCard";
import Search from "@/components/ui/Search";

const CategoryNews = async ({ params }) => {

  const { category } = params;

  const news = {
    Technology: [
      {
        title: "Quantum Computers Now Fit in Your Pocket!",
        description: "A breakthrough in miniaturization has led to the world's first pocket-sized quantum computer.",
        image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
        link: "/news/quantum-computer-pocket"
      },
      {
        title: "AI-Powered Glasses Let You See the Future!",
        description: "A new startup claims its smart glasses can predict events 10 minutes ahead of time.",
        image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
        link: "/news/ai-glasses-future"
      },
      {
        title: "Flying Smartphones: The End of Phone Cases?",
        description: "A breakthrough in anti-gravity technology allows phones to hover, eliminating accidental drops.",
        image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
        link: "/news/flying-smartphone"
      },
      {
        title: "Neuralink 2.0: Control Your Smart Home with Your Thoughts!",
        description: "Elon Musk's company releases an update that lets users turn off lights by blinking twice.",
        image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
        link: "/news/neuralink-smart-home"
      }
    ]
  };

//   const res = await fetch(`${base_api_url}/api/category/news/${category}`, {
//     next: {
//       revalidate: 1
//     }
//   })
//   const { news } = await res.json()


  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <Breadcrumb one="category" two={category} />
        </div>
      </div>
      <div className="bg-slate-200 w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {
                    news && news.length > 0 && news.map((item, i) => (
                      <SimpleDetailsNewCard key={i} news={item} type="details-news" height={200} />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-8">
                  <Search/>

                  {/* <RecentNews /> */}
                  <div className="p-4 bg-white">
                    {/* <Category titleStyle={"text-gray-700 font-bold"} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            {/* <PopularNews type="Popular news" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;