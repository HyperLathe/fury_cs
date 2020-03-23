import React from "react";
import styled from 'styled-components/macro';
import PortfolioData from "../../content/portfolio_content.json";

const NavListContainer = styled.div`
  display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
`;


function NavList(props) {
  return (
    <NavListContainer>
      <h2>Portfolio</h2>
      {Object.entries(PortfolioData).map(([key, value]) => {
        return (<a key={key} href={"/portfolio/" + value.id}>{value.nav}</a>)
      })}
    </NavListContainer>
  );
}

export default NavList;
