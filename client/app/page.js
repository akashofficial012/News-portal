import SimpleNewsCard from "@/components/news/items/SimpleNewsCard";
import LatestNews from "@/components/news/LatestNews";
import PopularNews from "@/components/news/PopularNews";
import Title from "@/components/Title";
import HeadLines from "@/components/ui/HeadLines";

export default function Home() {
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
                    {news.Technology.map((item, i) => (
                      i < 4 && <SimpleNewsCard item={item} key={i} />
                    ))}
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
