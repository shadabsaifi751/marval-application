import React from 'react'
import img from "../Accects/img.png"
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Accects/banner/img1.png"
import img2 from "../Accects/banner/img2.png"
import img3 from "../Accects/banner/img3.png"
import img4 from "../Accects/banner/img4.png"
import img5 from "../Accects/banner/banner5.jpg"
import img6 from "../Accects/banner/banner4.jpg"
import img7 from "../Accects/banner/banner-3.jpg"
import halk from "../Accects/logohalk.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, {
  Parallax, Pagination,Autoplay
} from 'swiper';
SwiperCore.use([Parallax, Pagination ,Autoplay]);

const MainSlider = [
  { id: 1, name: "A Universe of Super Heroes", logo: img, img: img6, discription: "All Your Favorite Stories and More. Start Streaming Now." },
  { id: 2, name: "A Universe of Super Heroes", logo: halk, img: img5, discription: "All Your Favorite Stories and More. Start Streaming Now." },
  { id: 4, name: "MARVEL CHARACTERS", logo: img, img: img7, discription: "Get hooked on a hearty helping of heroes and villains" },
  { id: 5, name: "MARVEL CHARACTERS", logo: img, img: img1, discription: "Get hooked on a hearty helping of heroes and villains" },
  { id: 6, name: "MARVEL CHARACTERS", logo: img, img: img2, discription: "Get hooked on a hearty helping of heroes and villains" },
  { id: 7, name: "MARVEL CHARACTERS", logo: img, img: img3, discription: "Get hooked on a hearty helping of heroes and villains" },
  { id: 8, name: "MARVEL CHARACTERS", logo: img, img: img4, discription: "Get hooked on a hearty helping of heroes and villains" },
]

const Header = () => {
  return (
    <>
      <header>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={
          {
            delay: 2500,
            disableOnInteraction: false
          }
        }
        speed={2000}
        parallax={true}
        className="mySwiper"
        pagination={{
          type: "progressbar",
        }}

        modules={[Parallax, Pagination,Autoplay]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {MainSlider.map(eachdata =>
          <SwiperSlide key={eachdata.id} className="overflow-hidden">
            <div className="slide-wrap">
              <img data-swiper-parallax="50%" src={eachdata.img} alt="" className="parallax-image" />
              <div className="content absolute mt-20 pt-20 container mx-auto text-white">
                <img src={eachdata.logo} alt="" />
                <h1 className="text-sm md:text-4xl mb-3" data-swiper-parallax="-100%">{eachdata.name}</h1>
                <p data-swiper-parallax="-100%">{eachdata.discription}</p>
              </div>
            </div>
          </SwiperSlide>
        )}




      </Swiper>
      </header>
      {/* https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_log_def_02.png */}
    </>
  )
}

export default Header