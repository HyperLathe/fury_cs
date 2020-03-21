import React from "react";
import styled from "styled-components/macro";

import NavGrid from "../components/NavGrid";

const Content = styled.div`
  background: #f2f2f2;
`;

const BodyContent = styled.div` 
  
`;

const ImageGrid = styled.div ` 

`;

const BodyLinks = styled.div` 
  display: flex;
  flex-direction: column;
`;

const Tags = styled.div ` 
  display: flex;
  span {
    margin-right: 5px;
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

      <NavGrid />

    </Content>
  );
}

export default PortfolioPage;
