import React from "react";
import { NavLink} from "react-router-dom";
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
          width: 80px;
          height: 80px;
        }
    }
`;


function NavGrid(props) {
  return (
    <NavGridContainer>
      {Object.entries(PortfolioData).map(([key, value]) => {
        return (<NavLink key={key} to={"/portfolio/" + value.id}><img src={require('../../img/icons/' + value.id + '.jpg')} alt={value.title} /></NavLink>)
      })}
    </NavGridContainer>
  );
}

export default NavGrid;
