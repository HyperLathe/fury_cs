import React from "react";
import styled from 'styled-components/macro';
import PortfolioData from "../../content/portfolio_content.json";

const NavGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100vh - 90px);
  align-items: center;
  align-content: space-evenly;
    a {
      display: flex;
      width: 33.33%;
      justify-content: center;
        img {
          max-width: 80px;
        }
    }
`;


function NavGrid(props) {
  return (
    <NavGridContainer>
      {Object.entries(PortfolioData).map(([key, value]) => {
        return (<a key={key} href={"/portfolio/" + value.id}><img src={require('../../img/icons/' + value.id + '.jpg')} alt={value.title} /></a>)
      })}
    </NavGridContainer>
  );
}

export default NavGrid;
