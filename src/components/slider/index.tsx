import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style';
import "swiper/dist/css/swiper.css"
import Swiper from "swiper";

type bannerType = {
    imageUrl: string
}
interface SliderProps {
    bannerList: bannerType[]
}
const Slider: React.FC<SliderProps> = (props) => {
    const [sliderSwiper, setSliderSwiper] = useState<any>();
    const { bannerList } = props;
    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let newSliderSwiper = new Swiper(".slider-container", {
                loop: true,
                // autoplay: true,
                pagination: { el: '.swiper-pagination' },
            });
            setSliderSwiper(newSliderSwiper);
        }
    }, [bannerList.length, sliderSwiper]);
    return (
        <SliderContainer>
            <div className="before"></div>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {bannerList.map((slider, index) => {
                        return (
                            <div className="swiper-slide" key={index}>
                                <div className='slider-nav'>
                                    <img src={slider.imageUrl} alt="推荐" width="100%" height="100%" />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='swiper-pagination'></div>
            </div>
        </SliderContainer>
    )
}
export default Slider;