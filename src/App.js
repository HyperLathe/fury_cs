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
  transition: all 0.4s ease;
	padding: 0px 15px;
	position: absolute;
    &.nav-open {
			/* transform: translateX(-200px); */
			margin: 0px 0px 0px -200px;
			padding-right: 215px;
		}
	
		@media screen and (min-width: 768px) {
			margin: 0px auto;
			max-width: 955px;
			position: relative;
			&.nav-open {
				/* transform: translateX(0); */
				margin: 0px auto;
				padding-right: 15px;
			}
		}
`;

const Header = styled.header`
    width: 100%;
    text-align: center;
    padding: 5px 0px 8px 0px;
    margin: 0;
    height: 60px;
    position: fixed;
    left: 0;
    background: #fff;
		transition: all 0.4s ease;
		box-shadow: 0px 0px 5px #b2b2b2;
		z-index: 1;
    &.nav-open {
			margin-left: -200px;
		}
		@media screen and (min-width: 768px) {
			border-bottom: 1px solid #b2b2b2;
			height: 120px;
			padding: 5px 0px 15px 0px;
			display: flex;
			justify-content: space-between;
			max-width: 955px;
			position: relative;
			box-shadow: none;
			&.nav-open {
				margin-left: 0;
			}
		}
`;

const Nav = styled.nav`
	list-style-type: none;
	position: absolute;
	top: 0;
	right: 0;
	margin: 0px;
	padding: 20px;
	width: 200px;
	height: 100%;
	margin-right: -200px;
	text-align: right;
	transition: all 0.4s ease;
	display: flex;
	flex-direction: column;
	transform: scaleX(0);
	transform-origin: right;
		&.nav-open {
			transform: scaleX(1);
			}
	 a {
			font-family: helvetica, arial, sans-serif;
			text-transform: uppercase;
			font-size: 0.8rem;
			text-decoration: none;
			color: #b4b4b4;
			margin-bottom: 5px;
				&:hover,
				&.active {
					color: #000;
				}
	 }
	@media screen and (min-width: 768px) {
		margin-right: 0;
		flex-direction: row;
		align-items: flex-end;
		height: 100px;
		padding: 0px;
		width: auto;
		transform: scaleX(1);
		position: relative;
			a:first-child {
				margin-right: 10px;
			}
	}
`;

const Logo = styled.h1`
	line-height: 0;
	font-size: 0;
		a {
			color: transparent;
			background: url('${LogoGraphic}') center center no-repeat;
			background-size: contain;
			width: 60%;
			height: 43px;
			display: block;
			margin: 0px auto;
		}
	@media screen and (min-width: 768px) {
		width: 35%;
		height: 100px;
			a {
				margin: 0px;
				background-position: bottom left;
				width: 100%;
				height: 100%;
			}
	}
`;

const Content = styled.div`
	width: 100%;
	padding: 70px 0px 10px 0px;
	height: 100%;
	@media screen and (min-width: 768px) {
		height: 100%;
		padding: 30px 0px 10px 0px;
	}
`;

const MobileExtraLinks = styled.div `
	display: flex;
	flex-direction: column;
	p {
		margin: 15px 0px 7px 0px;
		font-size: 0.8rem;
	}
	a {
		margin-bottom: 5px;
	}
		@media screen and (min-width: 768px) {
			display: none;	
	}
`;

const Footer = styled.footer `
	margin: 10px 0;
	text-align: center;
		span {
			font-size: 0.7rem;
			color: #c6c6c6;
		}
		@media screen and (min-width: 768px) {
			margin: 30px 0px 10px 0px;
			text-align: left;
		}

`;




// --- app ---

const App = () => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const closeNav = () => {
		return (isOpen ? setIsOpen(false) : '');
	}

	const displayYear = new Date().getFullYear();

	return (
		<BrowserRouter>
			<Main className={isOpen ? 'nav-open' : ''}>
				<Header onClick={closeNav} className={isOpen ? 'nav-open' : ''}>
					<NavBurger isOpen={isOpen} toggle={toggle} />
					<Logo><NavLink exact to="/">Fury CS</NavLink></Logo>
					<Nav onClick={toggle} className={isOpen ? 'nav-open' : ''}>
						<NavLink exact to="/">Home</NavLink>
						<NavLink to="/about">About</NavLink>
					<MobileExtraLinks onClick={toggle}>
						<p>portfolio:</p>
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

					<Footer>
					<span>© {displayYear} Fury Creative Services. All rights reserved.</span>
					</Footer>

				</Content>
			</Main>
		</BrowserRouter>
	);
}

export default App;
