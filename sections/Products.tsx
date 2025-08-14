"use client"
import ProductCard from '@/components/ProductCard'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const services = [
  { tag: "Farm Delivery", title: "Product Supplies", image: "/images/product-supplies.jpg" },
  { tag: "Agricultural Consulting", title: "Agricultural Consulting", image: "/images/agriculture-consulting.jpg" },
  { tag: "Soil Enhancement", title: "Soil Fertilization", image: "/images/soil-fertilization.jpg" },
  { tag: "Soil Enhancement", title: "Soil Fertilization", image: "/images/soil-fertilization.jpg" },
  { tag: "Soil Enhancement", title: "Soil Fertilization", image: "/images/soil-fertilization.jpg" },
  { tag: "Soil Enhancement", title: "Soil Fertilization", image: "/images/soil-fertilization.jpg" },
];

const Products = () => {
  const swiperRef = useRef<any>(null);
  return (
    <div className='bg-white w-full h-full container p-8 flex flex-col gap-20 mt-10'>
      <div>
        <p className='text-sm text-primary-400 border border-primary-400 px-3 py-2 rounded-full w-max font-semibold '>Products List</p>
        <div className='flex justify-between'>
          <h1 className='mt-3 text-2xl sm:text-5xl font-bold font-palanquin'>Smart Products for Smarter Farming</h1>
          {/* Custom Controls */}
          <div className="flex justify-center mt-4 gap-4">
            {/* Prev Button */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 flex items-center justify-center bg-green-700 hover:bg-green-800 text-white rounded-full"
            >
              {/* Left Arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 flex items-center justify-center bg-green-700 hover:bg-green-800 text-white rounded-full"
            >
              {/* Right Arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
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
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <ProductCard />
            </SwiperSlide>
          ))}

        </Swiper>


      </div>
    </div>
  )
}

export default Products