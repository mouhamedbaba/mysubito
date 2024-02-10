import { useEffect, useState } from "react";

import { Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export const SliderGrid = ({ perView: propPerView = 4, space: propSpace = 10, view_sm = 1, view_md = 2, view_lg = 3, view_xl = 4, loop = true, data, CardComponent }) => {

    const [perView, setPerView] = useState(propPerView);
    const [space, setSpace] = useState(propSpace);



    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth < 576) {
                setPerView(view_sm); 
            } else if (window.innerWidth < 768) {
                setPerView(view_md); 
            } else if (window.innerWidth < 992) {
                setPerView(view_lg); 
            } else {
                setPerView(view_xl);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [view_sm, view_md, view_lg, view_xl]);

    console.log("Type de data:", typeof data);

    if (!Array.isArray(data)) {
        throw new Error("Erreur : data n'est pas un tableau.");
    }

    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={space}
            pagination={{ clickable: true }}
            slidesPerView={perView}
            autoplay={{ delay: 3000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
        >
            {data.map((item, index) => (
                <div className="py-5">
                    <SwiperSlide key={index}>
                        <div className="py-5 h-100">
                            <CardComponent data={item} />
                        </div>
                    </SwiperSlide>
                </div>
            ))}

        </Swiper>
    )


}