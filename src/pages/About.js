import React from "react";
import styled from "styled-components/macro";
import PageData from "../content/page_content.json";

const PageContent = PageData[0].page[1];

const Links = styled.div `
  display: flex;
  flex-direction: column;
`;


function About() {
  return (
    <div className="About">
      <img src={require('../img/' + PageContent.img)} alt="Jennifer Jacobs-Springer" />
      <h2>{PageContent.headline1}</h2>
      <p>{PageContent.content1}</p>
      <h2>{PageContent.headline2}</h2>
      <Links dangerouslySetInnerHTML={{ __html: PageContent.content2 }} />
      <h2>{PageContent.headline3}</h2>
      <Links dangerouslySetInnerHTML={{ __html: PageContent.content3 }} />
      
    </div>
  );
}

export default About;
