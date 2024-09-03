"use client";

import * as React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { cn } from '@/lib/utils';

type SliderProps = {
  slides: React.ReactNode[];
  effect?: SwiperProps['effect'];
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
  pagination?: SwiperProps['pagination'];
  centeredSlides?: boolean;
  grabCursor?: boolean;
  coverflowEffect?: SwiperProps['coverflowEffect'];
  className?:string
};

const defaultSliderProps: Partial<SliderProps> = {
  effect: 'coverflow',
  loop: true,
  spaceBetween: -50,
  slidesPerView: 2,
  pagination: {
    clickable: true,
  },
  centeredSlides: true,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    scale: 0.8,
  }
};

export default function Slider(props: SliderProps) {
  const mergedProps = { ...defaultSliderProps, ...props }; 

  return (
    <section>
      <div className={cn('lg:mx-auto max-w-7xl mx-[1.5rem]', props.className)}>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={mergedProps.effect}
          loop={mergedProps.loop}
          spaceBetween={mergedProps.spaceBetween}
          slidesPerView={mergedProps.slidesPerView}
          pagination={mergedProps.pagination}
          centeredSlides={mergedProps.centeredSlides}
          grabCursor={mergedProps.grabCursor}
          coverflowEffect={mergedProps.coverflowEffect}
          className="coverflow"
        >
          {props.slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative opacity-50 transition-opacity duration-30"
            >
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
