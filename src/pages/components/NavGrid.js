import React from "react";
import styled from 'styled-components/macro';
import PortfolioData from "../../content/portfolio_content.json";

const NavGridContainer = styled.div`
  display: flex;
`;


function NavGrid(props) {
  return (
    <NavGridContainer>
      {Object.entries(PortfolioData).map(([key, value]) => {
        return (<a key={key} href={"/portfolio/" + value.id}>{value.nav}</a>)
      })}
    </NavGridContainer>
  );
}

export default NavGrid;
