import React from "react";
import { NavLink} from "react-router-dom";
import styled from 'styled-components/macro';
import PortfolioData from "../../content/portfolio_content.json";

const NavListContainer = styled.div`
  display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
        a {
          font-size: 0.8rem;
          margin-bottom: 5px;
          text-decoration: none;
          color: #b4b4b4;
            &:hover {
              color: #787878;
            }
            &.active {
              color: #d76b65;
            }
        }
    }
`;


function NavList(props) {
  return (
    <NavListContainer>
      <h2>Portfolio</h2>
      {Object.entries(PortfolioData).map(([key, value]) => {
        return (<NavLink key={key} to={"/portfolio/" + value.id}>{value.nav}</NavLink>)
      })}
    </NavListContainer>
  );
}

export default NavList;
