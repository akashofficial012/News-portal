'use client'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SimpleNewsCard from './items/SimpleNewsCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const LatestNews = () => {
    const [news, setNews] = useState([]);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const latest_news_get = async () => {
        try {
            // Fake news data for testing
            const fakeData = {
                news: [
                    {
                        title: "Ancient City Discovered Beneath the Desert",
                        description: "Archaeologists have uncovered a lost civilization buried under sand for centuries.",
                        image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
                        date: "2025-03-10"
                    },
                    {
                        title: "Rare Meteor Shower Lights Up the Night Sky",
                        description: "Skygazers were treated to a stunning celestial display as a rare meteor shower peaked last night.",
                        image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
                        date: "2025-03-09"
                    },
                    {
                        title: "Scientists Announce Breakthrough in Renewable Energy",
                        description: "A new solar panel technology promises to double efficiency while reducing costs.",
                        image: "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696952625/news/g7ihrhbxqdg5luzxtd9y.webp",
                        date: "2025-03-08"
                    }
                ]
            };
            setNews(fakeData.news);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        latest_news_get();
    }, []);

    const ButtonGroup = ({ next, previous }) => (
        <div className='flex justify-between items-center'>
            <div className='text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3'>
                Latest News
            </div>
            <div className='flex justify-center items-center gap-x-3'>
                <button onClick={() => previous()} className='w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200' >
                    <FiChevronLeft />
                </button>
                <button onClick={() => next()} className='w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200' >
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );

    return (
        <div className='w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2'>
            <Carousel
                autoPlay={true}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                infinite={true}
                transitionDuration={500}
            >
                {news.map((item, i) => (
    <SimpleNewsCard item={item} key={item.title} type='latest' />
))}
            </Carousel>
        </div>
    );
}

export default LatestNews;
