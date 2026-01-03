import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const PartnerShip = () => {
  const logos = [
    "https://i.ibb.co/dwsmDJ2B/William-and-Mary-Tribe.jpg",
    "https://i.ibb.co/tpCq8NvN/Glenfiddich.jpg",
    "https://i.ibb.co/gZb3VMB3/REMAX-Logo-768x432.png",
    "https://i.ibb.co/ZzWh2RRS/Coldwell-Banker-Logo-768x432.png",
    "https://i.ibb.co/HLbF4zXm/Austin-Real-Estate-Experts-Logo-768x432.png",
    "https://i.ibb.co/cSr1Y4fs/Global-Collective-Logo-768x432.png",
  ];

  return (
    <div className="w-full py-16">
      <h2 className="text-center text-3xl font-bold mb-10 gradient-text whitespace-nowrap cursor-pointer">
        Our Trusted Partners
      </h2>

      <div className="max-w-7xl mx-auto px-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          onSwiper={(swiper) => {
            swiper.el.onmouseenter = () => swiper.autoplay.stop();
            swiper.el.onmouseleave = () => swiper.autoplay.start();
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="
                  p-4
                  rounded-xl
                  flex justify-center items-center
                  transition-all duration-300
                  bg-transparent
                  dark:bg-transparent
                  dark:backdrop-blur-md
                  dark:border dark:border-white/10
                "
              >
                <img
                  src={logo}
                  alt="partner logo"
                  className="
                    h-16 w-auto object-contain
                    opacity-90
                    transition duration-300
                    hover:opacity-100 hover:scale-[1.05]
                    dark:brightness-150 dark:contrast-125
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerShip;
