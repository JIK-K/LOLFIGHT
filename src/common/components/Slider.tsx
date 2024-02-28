"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slideData = [
  {
    id: 1,
    text: "first slide",
    type: "video",
    content: "IgU0hkCuOM0",
  },
  {
    id: 2,
    text: "second slide",
    type: "video",
    content: "6RX6bser66k",
  },
  {
    id: 3,
    text: "fourth slide",
    type: "video",
    content: "k6hWBB4HTiE",
  },
  {
    id: 4,
    text: "third slide",
    type: "image",
    content: "/images/yayaman.png",
  },
];

const Slider = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  return (
    <div className="w-full h-96 mt-4 mb-16">
      <Swiper
        loop={true}
        spaceBetween={50} //  슬라이드 사이 간격
        slidesPerView={2.5} //  한 화면에 보여줄 슬라이드 개수
        navigation={true} //  앞뒤 버튼
        pagination={{ clickable: true }}
        centeredSlides={true} //  활성 슬라이드를 항상 가운데 배치
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, //  사용자 상호 작용시 슬라이더 일시 정지 비활성
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full border-2 border-black rounded-md">
              {slide.type === "image" && (
                <Image
                  src={slide.content}
                  alt={slide.text}
                  width={1280}
                  height={960}
                />
              )}
              {slide.type === "video" && (
                <iframe
                  title={slide.text}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${slide.content}`}
                  frameBorder="0"
                  allowFullScreen
                />
              )}
              {/* <div className="absolute bottom-0 w-full bg-black text-white p-2 text-center">
                {slide.text}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
