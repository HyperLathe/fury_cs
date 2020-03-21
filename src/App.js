import React, { useState } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled from "styled-components/macro";
import PortfolioData from "./content/portfolio_content.json";
import './App.css';


import Home from "./pages/Home";
import About from "./pages/About";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import NavBurger from "./pages/components/NavBurger";
import LogoGraphic from "./img/logo.png";

// --- styles ---

const Main = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  margin-left: 0;
  transition: all 0.4s ease;
  position: relative;
    &.nav-open {
      margin-left: -200px;
    }
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  padding: 5px 0px 8px 0px;
  margin: 0;
`;

const Nav = styled.nav`
  background: #f3f3f3;
	list-style-type: none;
	position: absolute;
	top: 0;
	right: 0;
	margin: 0px;
	padding: 20px;
	width: 150px;
	margin-right: -190px;
	transition: all 0.2s linear;
	display: flex;
	flex-direction: column;
`;

const Logo = styled.h1`
	line-height: 0;
	font-size: 0;
		a {
			color: transparent;
			background: url('${LogoGraphic}') center center no-repeat;
			background-size: contain;
			width: 60%;
			height: 46px;
			display: block;
			margin: 0px auto;
		}
`;

const Content = styled.div`
	margin-top: 60px;
	width: 100%;
	padding: 10px 0px;
`;

const MobileExtraLinks = styled.div `
	display: none;
		@media screen and (max-width: 768px) {
			display: block;
		}
`;



// --- app ---

const App = () => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const closeNav = () => {
		return (isOpen ? setIsOpen(false) : '');
	}

	return (
		<BrowserRouter>
			<Main className={isOpen ? 'nav-open' : ''}>
				<Header onClick={closeNav}>
					<NavBurger isOpen={isOpen} toggle={toggle} />
					<Logo><NavLink exact to="/">Fury CS</NavLink></Logo>
					<Nav onClick={toggle} >
						<NavLink exact to="/">Home</NavLink>
						<NavLink to="/about">About</NavLink>
					<MobileExtraLinks onClick={toggle}>
						<p>Portfolio</p>
							{Object.entries(PortfolioData).map(([key, value]) => {
								return (<NavLink key={key} to={"/portfolio/" + value.id}>{value.nav}</NavLink>)
							})}
						</MobileExtraLinks>
					</Nav>
				</Header>
				<Content onClick={closeNav}>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />

					{Object.entries(PortfolioData).map(([key, value]) => {
						return (<Route exact path={"/portfolio/" + value.id} key={key} render={() => <PortfolioPage {...value} />} />)
					})}

				</Content>
			</Main>
		</BrowserRouter>
	);
}

export default App;
