import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import NavGrid from "../components/NavGrid";
import NavList from "../components/NavList";
import Carousel from "../components/Carousel";

const Content = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
  h3 {
    margin-bottom: 5px;
    font-weight: normal;
  }
  p {
    color: #787878;
  }
  @media screen and (min-width: 768px) {
    h2 {
      text-align: left;
      font-size: 0.8rem;
    }
  }
`;

const MasterContent = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid #b2b2b2;
  padding-bottom: 10px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageGrid = styled.div `
  text-align: center;
  img {
    width: 100%;
    margin-bottom: 30px;
    cursor: pointer;
    transition: all 0.2s;
    transition-timing-function: cubic-bezier(.36,0,.67,2);
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    img {
      width: 33.3%;
      padding: 2.5%;
      align-self: flex-start;
        &:hover {
          transform: scale(1.15);
        }
    }
  }
`;

const BodyContent = styled.div`
a {
  color: #d76b65;
  text-decoration: none;
}
  @media screen and (min-width: 768px) {
    width: 25%;
    padding-right: 15px;
    font-size: 0.8rem;
  }
`;

const CarouselOverlay = styled.div `
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const BodyLinks = styled.div` 
  display: flex;
  flex-direction: column;
`;

const Tags = styled.div ` 
  display: inline-block;
  margin-bottom: 50px;
  width: 100%;
  span {
    margin: 0px 5px 0px 0px;
    display: inline-block;
     &:after {
       content: ',';
     }
     &:last-child:after {
       content: '';
     }
  }
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    border-top: 1px solid #b2b2b2;
    padding-top: 10px;
  }
`;

const CloseButton = styled.button `
  position: absolute;
  z-index: 11;
  right: 0;
  top: 0;
  margin: 5px;
  width: 50px;
  height: 50px;
  font-size: 26px;
  line-height: 0px;
  padding: 0;
  -webkit-text-stroke-width: 1px;
  border: 0;
  background: #fff;
  border-radius: 0;
  @media screen and (min-width: 768px) {
    right: 15vw;
    top: 15vh;
  }
`;




function PortfolioPage({ id, title, imgs, body, links, tags, carousel, setCarousel }) {

  const [imageRef, setImageRef] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const openCarousel = (i) => {
    setCarousel(true);
    setImageRef(i);
  };

  const imageArray = [...Array(imgs)].map((_, i) => {
    return (<img src={require("../../img/portfolio_imgs/" + id + "/" + (i + 1) + ".jpg" )} alt={title} onClick={() => openCarousel(i)} key={i} />);
  });



  return (
    <Content>
      <MasterContent>
      <ImageGrid>{imageArray}</ImageGrid>

      <BodyContent>
      <h2>{title}</h2>
        {body.map((value) => {
          return <p dangerouslySetInnerHTML={{ __html: value }} key={value} ></p>
        })}
        {(links) ?
          <BodyLinks>
            <h3>Websites</h3>
            {links.map((value) => {
              return <a href={value.link} target="_blank" rel="noopener noreferrer" key={value.label}>{value.label}</a>
            })}
          </BodyLinks> : ''}
          <Tags>
          {tags.map((value) => {
             return <span dangerouslySetInnerHTML={{ __html: value }} key={value} /> 
            })}
          </Tags>

      </BodyContent>

      <NavList />
      </MasterContent>

      <NavGrid />
      
      {carousel &&
      <CarouselOverlay>
        <CloseButton onClick={() => setCarousel(false)} aria-label="Close">&#9587;</CloseButton>
        <Carousel id={id} imageRef={imageRef} imgs={imgs} title={title}  setCarousel={setCarousel} />
      </CarouselOverlay>
      }

    </Content>
  );
}

export default PortfolioPage;
