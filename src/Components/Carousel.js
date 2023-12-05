import CircleIcon from "@mui/icons-material/Circle";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { carouselData } from "../Data";

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //

  useEffect(() => {
    if (!autoSlide) return;
    const SlideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(SlideInterval);
  }, [nextSlide]);

  return (
    <div className="max-w-[1400px] w-full h-[calc(100vh-4rem)] mx-auto relative group">
      <div
        className="h-[96%] w-full bg-center transition-transform ease-out duration-500"
        style={{ backgroundImage: `url(${carouselData[currentIndex].image})` }}
      />
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full px-[13px] py-1 shadow-md bg-black/40 text-white cursor-pointer"
      >
        <FontAwesomeIcon icon={faChevronLeft} size={30} />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full px-[13px] py-1 shadow-md bg-black/40 text-white cursor-pointer"
      >
        <FontAwesomeIcon icon={faChevronRight} size={30} />
      </div>
      <div className="h-[4%] flex bottom-0 gap-2 items-center justify-center py-2">
        {carouselData.map((slide, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            className={` shadow-xl cursor-pointer w-2 h-2 bg-white rounded-full 
            ${currentIndex === index ? "p-[.35rem]" : " opacity-60"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
