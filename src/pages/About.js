import React from "react";
import PageData from "../content/page_content.json";

const PageContent = PageData[0].page[1];

function About() {
  return (
    <div className="About">
      <img src={require('../img/' + PageContent.img)} alt="Jennifer Jacobs-Springer" />
      <h2>{PageContent.headline1}</h2>
      <p>{PageContent.content1}</p>
      
    </div>
  );
}

export default About;
