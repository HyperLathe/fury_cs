import React from "react";
import styled from "styled-components/macro";
import NavGrid from "./components/NavGrid";

const PageContent = styled.div `
  width: calc(100vw - 30px);
  height: 100%;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
`;



function Home(props) {
  return (
    <PageContent>
      <NavGrid />
    </PageContent>

  );
}


export default Home;