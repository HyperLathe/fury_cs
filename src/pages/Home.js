import React from "react";
import styled from "styled-components/macro";
import PageHeader from "./components/PageHeader";
import NavGrid from "./components/NavGrid";

const PageContent = styled.div `
  img {
    max-width: 100%;
  }
`;



function Home(props) {
  return (
    <PageContent>
      <PageHeader />
      <NavGrid />
    </PageContent>

  );
}


export default Home;