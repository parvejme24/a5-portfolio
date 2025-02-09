"use client";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Testimonial() {
  const reviews = siteConfig.reviews;

  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow">
      <div className="mt-24 mb-10">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
          Testimonial
        </h2>

        <div className="mt-8">
          <Swiper
            spaceBetween={30}
            pagination={{ dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                key={index}
                className="bg-white/5 bg-gradient-blur border dark:border-none border-[#8a4fff46] dark:bg-[#101010] p-8 rounded-lg mb-10"
              >
                <div className="flex items-center flex-wrap md:flex-nowrap gap-5">
                  <div className="w-[400px]">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="rounded-full w-[80px] h-[80px] mx-auto"
                    />
                    <div className="text-center">
                      <h2 className="text-xl font-bold text-purple-600 dark:text-[#E79DFF]">
                        {review.name}
                      </h2>
                      <p className="text-gray-00 dark:text-gray-400 text-xs">
                        {review.role}
                      </p>
                      <p className="text-yellow-400 text-sm flex items-center justify-center gap-2">
                        <FaStar /> <span>{review.rating}/5</span>
                      </p>
                    </div>
                  </div>
                  <div className="relative text-center md:text-left md:ml-10">
                    <FaQuoteRight className="text-[#E79DFF] text-3xl rotate-180 absolute -top-1 md:-left-9 opacity-80" />
                    <p className="text-[#af8fce] dark:text-[#DED0EB]">
                      {review.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
