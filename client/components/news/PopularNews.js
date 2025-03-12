import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";

const PopularNews = async () => {
  // Fake popular news data
  const popularNews = [
    {
      title: "Scientists Discover AI That Writes Better Code Than Humans!",
      description: "A new AI model can write, debug, and improve code faster than any software engineer.",
      image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
      link: "/news/ai-coder"
    },
    {
      title: "Self-Driving Bicycles Hit the Streets!",
      description: "A startup has developed autonomous bicycles that transport people without pedaling.",
      image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
      link: "/news/self-driving-bike"
    },
    {
      title: "World’s First Holographic Smartphone Released!",
      description: "A tech company unveils a smartphone with a built-in holographic display, no glasses needed.",
      image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
      link: "/news/holographic-phone"
    },
    {
      title: "Flying Taxis to Start Operations in 2026!",
      description: "A major city announces the first flying taxi service, promising zero traffic congestion.",
      image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
      link: "/news/flying-taxi"
    }
  ];

  return (
    <div className="w-full pb-8 mt-5 px-4">
      <div className="flex flex-col w-full gap-y-[14px]">
        <Title title="Popular News" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
          {popularNews.map((item, i) => (
            <SimpleDetailsNewCard news={item}  item={item} key={i} height={230} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
