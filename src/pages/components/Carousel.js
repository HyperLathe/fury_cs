import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components/macro';

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CarouselImages = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    img {
      position: absolute;
      opacity: 0;
      transition: all 0.3s linear;
      max-height: 90%;
      max-width: calc(100vw - 30px);
        &.active {
          opacity: 1;
        }
      @media screen and (min-width: 768px) {
        max-width: 60vw;
      }
    }
`;

const CarouselControls = styled.div `
  position: absolute;
  width: 100%;
  height: calc(100% - 60px);
  bottom: 0;
    button {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 50px;
      border: 1px solid black;
      border-radius: 50%;
      background: #fff;
      padding: 0;
      margin: 15px;
      outline: none;
      font-size: 35px;
      font-weight: lighter;
      line-height: 0;
      transition: all 0.1s linear;
      cursor: pointer;
        &:first-child {
          transform: rotate(180deg);
        }
        &:last-child {
          left: auto;
          right: 0;
        }
    }
  @media screen and (min-width: 768px) {
    max-width: calc(60vw + 150px);
    left: calc((40vw - 164px) / 2);
    height: 50vh;
    top: 0;
      button:first-child:hover {
        transform: scale(1.3) rotate(180deg);
      }
      button:last-child:hover {
        transform: scale(1.3);
      }
  }
`;



function Carousel({id, imgs, imageRef, title, setCarousel}) {

  const [currentImg, setCurrentImg] = useState(imageRef);
  const ref = useRef();

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    setCarousel(false);
  });


  const CarouselArray = [...Array(imgs)].map((_, i) => {
    return (
    <img src={require("../../img/portfolio_imgs/" + id + "/" + (i + 1) + ".jpg" )} alt={title} className={(i === currentImg) ? "active" : null} />
    );
  });

  const prev = () => {
    if (currentImg === 0) {
      setCurrentImg(imgs - 1);
    } else {
    setCurrentImg(currentImg - 1);
    }
  }

  const next = () => { 
    if (currentImg === (imgs - 1)) {
      setCurrentImg(0);
    } else {
    setCurrentImg(currentImg + 1);
    }
  }


  return (
    <CarouselContainer>
      <CarouselImages>
          {CarouselArray}
      </CarouselImages>
      <CarouselControls>
        <button onClick={prev} aria-label="Previous image"  ref={ref}>&#10132;</button>
        <button onClick={next} aria-label="Next image"  ref={ref}>&#10132;</button>
      </CarouselControls>
    </CarouselContainer>
  );
}

export default Carousel;

