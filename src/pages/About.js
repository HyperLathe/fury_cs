import React from "react";
import styled from "styled-components/macro";
import PageData from "../content/page_content.json";

const PageContent = PageData[0].page[1];

const Content = styled.div `
  img {
    max-width: 100%;
  }
  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin: 10px 0px 5px 0px;
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
  p {
    margin: 5px 0px 20px 0px;
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
  a {
    text-decoration: none;
    color: #d76b65;
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const Links = styled.div `
  display: flex;
  flex-direction: column;
   a {
     margin-bottom: 5px;
     @media screen and (min-width: 768px) {
      margin-bottom: 0px;
     }
   }
`;


function About() {
  return (
    <Content>
      <img src={require('../img/' + PageContent.img)} alt="Jennifer Jacobs-Springer" />
      <h2>{PageContent.headline1}</h2>
      <p>{PageContent.content1}</p>
      <h2>{PageContent.headline2}</h2>
      <Links dangerouslySetInnerHTML={{ __html: PageContent.content2 }} />
      <h2>{PageContent.headline3}</h2>
      <Links dangerouslySetInnerHTML={{ __html: PageContent.content3 }} />
      
    </Content>
  );
}

export default About;
