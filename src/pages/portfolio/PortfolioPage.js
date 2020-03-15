import React from "react";
import styled from "styled-components/macro";


import NavGrid from "../components/NavGrid";

const Content = styled.div`
  background: #f2f2f2;
`;

const BodyContent = styled.div` 
  
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




function PortfolioPage({ title, body, links, tags }) {
  console.log(body);
  return (
    <Content>
      <h2>{title}</h2>
      <BodyContent>
        {body.map((value) => {
          return <p dangerouslySetInnerHTML={{ __html: value }} />
        })}
        {(links) ?
          <BodyLinks>
            <h3>Websites</h3>
            {links.map((value) => {
              return <a href={value.link} target="_blank">{value.label}</a>
              // return <a dangerouslySetInnerHTML={{ __html: value }} />
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
