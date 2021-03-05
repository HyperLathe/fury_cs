import React from "react";
import { NavLink } from "react-router-dom";
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
      padding: 2.5% 4%;
      text-align: center;
      position: relative;
        img {
          max-width: 100px;
          width: 100%;
          @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        }
      span {
        position: absolute;
        left: 0;
        background: rgba(0,0,0,0.5);
        width: 100%;
        bottom: 0;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 0;
        overflow: hidden;
        display: flex;
        font-size: 1.3rem;
        transition: all 0.3s ease;
        padding: 0 10px;
        font-size: 1rem;
      }
      &:hover,
      &.active {
        span {
          height: 100%;
        }
      }
    }
  @media screen and (min-width: 768px) {
    height: auto;
    a {
      width: 25%;
      padding: 1% 0;
        img {
          max-width: 120px;
        }
        span {
          font-size: 1.5rem;
        }
      &.active {
        span {
          height: 0;
        }
      }
    }
  }
  @media screen and (min-width: 955px) {
    max-width: 955px;
    a {
      width: 20%;
    }
  }
`;


function NavGrid(props) {

  const goNav = () => {
    window.scrollTo(0, 0)
  }

  return (
    <NavGridContainer>
      {Object.entries(PortfolioData).map(([key, value]) => {
        return (<NavLink onClick={goNav} key={key} to={'/portfolio/' + value.id}><img src={require('../../img/icons/' + value.id + '.svg')} alt={value.title} style={{animationDuration: (key / 6)}} /><span>{value.nav}</span></NavLink>)
      })}
    </NavGridContainer>
  );
}

export default NavGrid;
