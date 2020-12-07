import React, { Component } from "react";
import Slider from "react-slick";
import style from './SliderMobile.module.css'
import SliderMobile2 from "./SliderMobile2/Slider2";
import SliderMobile1 from "./SliderMobile1/SliderMobile1";
import SliderMobile3 from "./SliderMobile3/Slider3";
import SliderMobile4 from "./SliderMobile4/Slider4";
import SliderMobile5 from "./SliderMobile5/Slider5";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: 285, top: 105 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", top: 105}}
            onClick={onClick}
        />
    );
}



export default class SliderMobile extends Component {
    render() {
        const settings = {
            focusOnSelect: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className={style.sliderWrapper}>
                <div className={style.sliderWrapperCentre}>
                <Slider {...settings}>
                    <div className={style.slideBlock}>
                        <SliderMobile2 />
                    </div>
                    <div>
                        <SliderMobile1 />
                    </div>
                    <div>
                        <SliderMobile3 />
                    </div>
                    <div>
                        <SliderMobile4 />
                    </div>
                    <div>
                        <SliderMobile5 />
                    </div>

                </Slider>
            </div>
            </div>
        );
    }
}