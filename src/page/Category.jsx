// Import Swiper React components
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTitle from "../components/SectionTitle";

const Category = () => {
  return (
    <section className="w-11/12 mx-auto">
        <SectionTitle heading={'From 11:00am to 10:00pm'} subHeading={'ORDER ONLINE'} ></SectionTitle>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper mb-20"
        >
          <SwiperSlide>
            <img
              src={slide1}
              alt=""
              className="h-[405px] w-full object-cover"
            />
            <h3 className="text-4xl text-white text-center -mt-14">Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              alt=""
              className="h-[415px] w-full object-cover"
            />
            <h3 className="text-4xl text-white text-center -mt-14">PIZZAS</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt=""
              className="h-[415px] w-full object-cover"
            />
            <h3 className="text-4xl text-white text-center -mt-14">SOUPS </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide4}
              alt=""
              className="h-[415px] w-full object-cover "
            />
            <h3 className="text-4xl text-white text-center -mt-14">DESSERT</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide5}
              alt=""
              className="h-[415px] w-full object-cover"
            />
            <h3 className="text-4xl text-white text-center -mt-14">SALAD</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
