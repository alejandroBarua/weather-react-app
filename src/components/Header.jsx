import styled from 'styled-components';
import { NavLink, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { SearchBar, DataResult } from "./index";


const Header = () => {
	
	const { dataResultStatus } = useSelector(state => state);

  return(
    <HeaderContainer>
			<div>
				<Link to="/">
					<h1>Weather App</h1>
				</Link>
			</div>

			<Menu>
				 <NavLink
						to="/"
            style={({ isActive }) => {
              return {
                display: "block",
								color: "white",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "solid 1px white" : "none"
              }
            }}
          >Home</NavLink>

					<NavLink
						to="/about"
            style={({ isActive }) => {
              return {
                display: "block",
								color: "white",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "solid 1px white" : "none"
              }
            }}
          >About</NavLink>

			</Menu>
        
			<div >
				<SearchBar />

					{
						dataResultStatus && <DataResult />
					}

			</div>
		 
    </HeaderContainer>
  )
}

export default Header;


const HeaderContainer = styled.header`
	
	padding-bottom: 2rem;
	color:white;
	overflow:hidden;
	background:radial-gradient(at bottom,#fcc756 0%,#199EFC 90%);
	text-align:center;
	margin-bottom: 3rem;
	border-radius: 0 0 85% 85% / 50%;
	box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 3px;

	h1{
		color: white;
		font-family: GTWalsheim,system-ui,sans-serif;
		text-rendering:optimizelegibility;
		font-weight:bold;
		font-size:250%;
	}
`

const Menu = styled.nav`
	
	display: flex;
	justify-content: center;
	font-size: 0.8rem;
	padding-bottom: 1.4rem;

	a{
		margin-right: 0.2rem;
		padding: 0 0.5rem;
	}
`