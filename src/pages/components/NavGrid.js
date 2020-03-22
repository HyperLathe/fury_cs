import React from "react";
import { NavLink} from "react-router-dom";
import styled from 'styled-components/macro';
import PortfolioData from "../../content/portfolio_content.json";

const NavGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  align-content: stretch;
    a {
      width: 33.33%;
      justify-content: center;
      padding: 4%;
        img {
          max-width: 100%;
        }
    }
`;


function NavGrid(props) {
  return (
    <NavGridContainer>
      {Object.entries(PortfolioData).map(([key, value]) => {
        return (<NavLink key={key} to={"/portfolio/" + value.id}><img src={require('../../img/icons/' + value.id + '.png')} alt={value.title} /></NavLink>)
      })}
    </NavGridContainer>
  );
}

export default NavGrid;
