import React, { useState, useEffect } from "react";
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

  const [gridCSS, setgridCSS] = useState(false);
   

  useEffect(() => {
    if (props.isHome) {
      console.log('yes');
    }
  });

  return (
    <PageContent>
      <NavGrid gridCSS={gridCSS} setgridCSS={setgridCSS} />
    </PageContent>

  );
}


export default Home;