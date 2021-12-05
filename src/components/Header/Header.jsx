import React from 'react'

import { NavLink, Link } from "react-router-dom";

import headerCSS from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import DataResult from "../DataResult/DataResult";

const Header = ({title, onSearch, isActiveResults, changeInvalidResults, changeActiveResults, changeInputValue, city, cleanCity, filteredData, errorMensage, loading}) => {


  return(
    <header className={headerCSS.display}>
			<div onClick={changeInvalidResults}>
				<Link to="/">
					<h1>{title}</h1>
				</Link>
			</div>

			<nav className={headerCSS.nav}>
				 <NavLink
						to="/"
            style={({ isActive }) => {
              return {
                display: "block",
								color: "white",
                fontWeight: isActive ? "bold" : "normal",
                borderBottom: isActive ? "solid 1px white" : "none"
              };
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

              };
            }}
          >About</NavLink>

			</nav>
        
			<div >
				<SearchBar 
					city={city}
					cleanCity={cleanCity}
					onSearch={onSearch}
					changeInputValue={changeInputValue}
					changeActiveResults={changeActiveResults}
					changeInvalidResults={changeInvalidResults}
					errorMensage={errorMensage}
					loading={loading} />

				
				{
					isActiveResults &&	<DataResult 
																filteredData = {filteredData}
																onSearch={onSearch} />
				}
			</div>
		
    </header>
  )
}

export default Header;