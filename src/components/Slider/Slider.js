import React, { useState } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const arrowRight = <FontAwesomeIcon icon={faArrowCircleRight} />;
const arrowLeft = <FontAwesomeIcon icon={faArrowCircleLeft} />;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="left__arrow" onClick={prevSlide}>
        {arrowLeft}
      </div>
      <div className="right__arrow" onClick={nextSlide}>
        {arrowRight}
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="growImage" className="img__Slider" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
