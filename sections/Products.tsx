"use client"
import ProductCard from '@/components/ProductCard'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FadeInSection from '@/components/FadeInSection';
import { Swiper as SwiperType } from 'swiper';
import { siteContent } from '../data/content'

const Products = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <FadeInSection>
      <div className='bg-white w-full h-full container p-8 flex flex-col gap-20 mt-10'>
        <div>
          <p className='text-sm text-primary-400 border border-primary-400 px-3 py-2 rounded-full w-max font-semibold '>Products List</p>
          <div className='flex justify-between'>
            <h1 className='mt-3 text-2xl sm:text-5xl font-bold font-palanquin'>Smart Products for Smarter Farming</h1>
            {/* Custom Controls */}
            <div className="flex justify-center mt-4 gap-2">
              {/* Prev Button */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 flex items-center justify-center bg-green-700 hover:bg-green-800 text-secondary-200  rounded-full"
              >
                {/* Left Arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 flex items-center justify-center bg-green-700 hover:bg-green-800 text-secondary-200 rounded-full"
              >
                {/* Right Arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <p className='text-primary-400/70 leading-6 text-lg w-2/5 mt-2'>We offer a wide range of agricultural products tailored to meet the needs of farmers at every stage.</p>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // >=640px
              768: { slidesPerView: 2 }, // >=768px
              1024: { slidesPerView: 3 }, // >=1024px
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {siteContent.products.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCard title={product.title} category={product.category} image={product.image} description={product.description}/>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </FadeInSection>
  )
}

export default Products