import React from "react";
import styled from "styled-components/macro";
import NavGrid from "./components/NavGrid";

const PageContent = styled.div `
  width: 100%;
  height: 100%;
`;



function Home(props) {
  return (
    <PageContent>
      <NavGrid />
    </PageContent>

  );
}


export default Home;