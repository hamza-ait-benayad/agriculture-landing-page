"use client"

import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import {siteContent} from '../data/content'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroImage from '../components/HeroImage';
import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        parallax={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {siteContent.hero.map((content, key) => (
          <SwiperSlide className='relative' key={key}>
            <HeroImage src={content.image} title={content.Headline} description={content.description} Subheadline={content.Subheadline} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Hero