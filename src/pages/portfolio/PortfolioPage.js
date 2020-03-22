import React, { useEffect } from "react";
import styled from "styled-components/macro";

import NavGrid from "../components/NavGrid";
import NavList from "../components/NavList";

const Content = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
`;

const BodyContent = styled.div` 
  
`;

const ImageGrid = styled.div ` 
  img {
    max-width: 100%;
    margin-bottom: 30px;
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
  console.log(id, imgs);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const imageArray = [...Array(imgs)].map((_, i) => {
    return (<img src={require("../../img/portfolio_imgs/" + id + "/" + (i + 1) + ".jpg" )} alt="test" />);
  });

  return (
    <Content>
      <h2>{title}</h2>

      <ImageGrid>
      {imageArray}
      </ImageGrid>

      <BodyContent>
        {body.map((value) => {
          return <p dangerouslySetInnerHTML={{ __html: value }} />
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
      <NavGrid />

    </Content>
  );
}

export default PortfolioPage;
