/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import { Navigation } from "swiper";
import { useWeatherStore } from "../../store/weatherStore";
import CardWeatherHour from "../CardWeatherHour";

const HourlyCityWeather = () => {
    const listWeatherDataHour = useWeatherStore(
        (state) => state.listWeatherDataHour
    );

    return (
        <Swiper
            modules={[Navigation]}
            style={{ width: "100%" }}
            // spaceBetween={20}
            // slidesPerView={5}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                570: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                651: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                850: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1050: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
        >
            {listWeatherDataHour?.map((item) => (
                <SwiperSlide key={item.dt}>
                    <CardWeatherHour itemWeather={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HourlyCityWeather;
