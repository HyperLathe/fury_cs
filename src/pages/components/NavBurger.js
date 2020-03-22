import React from "react";
import styled from 'styled-components';

const NavButton = styled.button `
  position: absolute;
  top: 17px;
  z-index: 1;
  right: 0;
  padding: 0;
  margin: 3px 15px 0px 0px;
  background: transparent;
  border: 0;
  outline: none;
  height: 30px;
  transition: all 0.2s linear;
    span {
      width: 27px;
      height: 2px;
      display: block;
      background: #000;
      margin: 0px 0px 6px 0px;
      transition: all 0.2s linear;
      opacity: 1;
    }
    &.active {
      margin: 0px 14px 0px 0px;
      span {
        margin: 0px;
        width: 29px;
      }
      span:first-child {
        transform: rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: rotate(-45deg);
        margin: -4px 0px 0px 0px;
      }
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
`;

function NavBurger(props) {
  return (
    <NavButton className={props.isOpen ? 'active' : ''} onClick={props.toggle}>
      <span></span>
      <span></span>
      <span></span>
    </NavButton>
  );
}

export default NavBurger;