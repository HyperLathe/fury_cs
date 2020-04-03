import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import NavGrid from "../components/NavGrid";
import NavList from "../components/NavList";
import Modal from "../components/Modal";

const Content = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
  @media screen and (min-width: 768px) {
    h2 {
      text-align: left;
    }
  }
`;

const MasterContent = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageGrid = styled.div `
  text-align: center;
  img {
    width: 100%;
    margin-bottom: 30px;
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
    }
  }
`;

const BodyContent = styled.div` 
  
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;

const BodyLinks = styled.div` 
  display: flex;
  flex-direction: column;
`;

const Tags = styled.div ` 
  display: inline-block;
  margin-bottom: 50px;
  span {
    margin: 0px 5px 0px 0px;
     &:after {
       content: ',';
     }
     &:last-child:after {
       content: '';
     }
  }
`;



function PortfolioPage({ id, title, imgs, body, links, tags }) {

  const [imageRef, setImageRef] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const openModal = (i) => {
    setModal(true);
    setImageRef(i);
  }

  const imageArray = [...Array(imgs)].map((_, i) => {
    return (<img src={require("../../img/portfolio_imgs/" + id + "/" + (i + 1) + ".jpg" )} alt="test" onClick={() => openModal(i)} key={i} />);
  });



  return (
    <Content>
      <MasterContent>
      <ImageGrid>{imageArray}</ImageGrid>

      <BodyContent>
      <h2>{title}</h2>
        {body.map((value) => {
          return <p dangerouslySetInnerHTML={{ __html: value }} ></p>
        })}
        {(links) ?
          <BodyLinks>
            <h3>Websites</h3>
            {links.map((value) => {
              return <a href={value.link} target="_blank" rel="noopener noreferrer">{value.label}</a>
            })}
          </BodyLinks> : ''}
          <Tags>
          {tags.map((value) => {
             return <span dangerouslySetInnerHTML={{ __html: value }} /> 
            })}
          </Tags>

      </BodyContent>

      <NavList />
      </MasterContent>

      <NavGrid />
      
      {modal ? <Modal id={id} imageRef={imageRef} /> : null}

    </Content>
  );
}

export default PortfolioPage;
