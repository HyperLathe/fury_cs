import React, { useState } from "react";
import styled from 'styled-components/macro';

const ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  align-content: stretch;
    a {
      width: 33.33%;
      justify-content: center;
      padding: 2.5% 4%;
      text-align: center;
      position: relative;
        img {
          max-width: 100px;
          width: 100%;
        }
      span {
        position: absolute;
        left: 0;
        background: rgba(0,0,0,0.5);
        width: 100%;
        bottom: 0;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 0;
        overflow: hidden;
        display: flex;
        font-size: 1.3rem;
        transition: all 0.3s ease;
        padding: 0 10px;
      }
      &:hover,
      &.active {
        span {
          height: 100%;
        }
      }
    }
  @media screen and (min-width: 768px) {
    height: auto;
    a {
      width: 25%;
      padding: 1% 0;
        img {
          max-width: 120px;
        }
      &.active {
        span {
          height: 0;
        }
      }
    }
  }
  @media screen and (min-width: 955px) {
    max-width: 955px;
    a {
      width: 20%;
    }
  }
`;


function Modal({id, imgs, imageRef}) {

  // const [currentImg, setCurrentImg] = useState(imageRef);

  // const imageArray = [...Array(imgs)].map((_, i) => {
  //   return (<img src={require("../../img/portfolio_imgs/" + id + "/" + (i + 1) + ".jpg" )} alt="test" />);
  // });

  // const prev = () => {
  //   setCurrentImg(imageRef--);
  //   console.log(imageRef);
  // }

  // const next = () => { 
  //   setCurrentImg(imageRef++);
  //   console.log(imageRef);
  // }

  console.log(imageRef);

  return (
    <ModalContainer>
      {/* <button onClick={prev} /> */}
      <img src={require("../../img/portfolio_imgs/" + id + "/" + (imageRef + 1) + ".jpg")} alt={id} />
      {/* <button onClick={next} /> */}
    </ModalContainer>
  );
}

export default Modal;


// {Object.entries(PortfolioData).map(([key, value]) => {
//   return (
//     <div key={key}>
//       {/* <img src={require('../../img/icons/' + value.id + '.png')} alt={value.title} /> */}
//       {imageArray}
//       <span>{value.nav}</span>
//     </div>)
// })}