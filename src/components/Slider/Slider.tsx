import React from "react";

import { Navigation as SliderNavigation } from "./Navigation";
import { Item } from "./Item";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { StyledWrapper } from "./styled";

const Slider: React.FC = () => {
  return (
    <>
      <StyledWrapper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SliderNavigation />
      </StyledWrapper>
    </>
  );
};

export { Slider };
