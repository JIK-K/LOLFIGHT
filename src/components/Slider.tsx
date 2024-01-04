"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slideData = [
  {
    id: 1,
    text: "first slide",
  },
  {
    id: 2,
    text: "second slide",
  },
  {
    id: 3,
    text: "third slide",
  },
  {
    id: 4,
    text: "fourth slide",
  },
];

const Slider = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  return (
    <div className="w-full h-96 mt-4">
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
            <div>
              <div>{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
