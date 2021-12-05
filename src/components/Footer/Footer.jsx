import React from 'react'
import "./Footer.css";

import imgHenry from "../../assets/henry.png";

const Footer = () => {
	return (
		 <footer>
			<div className="footer-container container">
				<div className="img-henry">
					<figure>
						<img src={imgHenry} alt="" />
					</figure>
					<h3 className="gradient-text">Weather App</h3>
				</div>

				<div className="links-container">
					<nav>
						<h4>Other Projects</h4>
						<ul>
							<li><a href="https://alejandrobarua.github.io/todoList-henry/" target="_black">TodoList</a></li>
							<li><a href="https://alejandrobarua.github.io/music-8d-henry/" target="_black">Page Music 8D</a></li>
							<li><a href="https://alejandrobarua.github.io/react-personal-planner/" target="_black">Week Planner</a></li>
						</ul>
					</nav>

					<div className="social">
							<h4>Contact</h4>
							<a href="https://www.linkedin.com/in/alejandrobarua/" target="_black">
								<i className="bi bi-linkedin"></i>
							</a>
							<a href="https://github.com/alejandroBarua/" target="_black">
								<i className="bi bi-github"></i>
							</a>
							
					</div>
				</div>
				</div>

			<div className="copy">
				<span>© 2021 Designed by Alejandro Barua</span>
			</div>
  </footer>
	)
}

export default Footer
