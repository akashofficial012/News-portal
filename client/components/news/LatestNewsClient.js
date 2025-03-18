"use client"; // This must be a Client Component

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SimpleNewsCard from "./items/SimpleNewsCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LatestNewsClient = ({ recentNews }) => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const ButtonGroup = ({ next, previous }) => (
        <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
                Latest News
            </div>
            <div className="flex justify-center items-center gap-x-3">
                <button onClick={previous} className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200">
                    <FiChevronLeft />
                </button>
                <button onClick={next} className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200">
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );

    return (
        <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
            <Carousel
                autoPlay
                arrows={false}
                renderButtonGroupOutside
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                infinite
                transitionDuration={500}
            >
                {recentNews.length > 0 ? (
                    recentNews.map((item) => <SimpleNewsCard item={item} key={item.title} type="latest" />)
                ) : (
                    <div className="text-center text-gray-500">No news available</div>
                )}
            </Carousel>
        </div>
    );
};

export default LatestNewsClient;
