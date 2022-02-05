import styled from 'styled-components';
import imgHenry from "../assets/henry.png";


const Footer = () => {
	return (
		 <FooterContainer>
			<Content className="container">
				<ImgHenry>
					<figure>
						<img src={imgHenry} alt="logo de soy henry" />
					</figure>
					<GradientText>Weather App</GradientText>
				</ImgHenry>

				<LinksContainer>
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
				</LinksContainer>
			</Content>

			<Copy>
				<span>© 2021 Designed by Alejandro Barua</span>
			</Copy>
			
  </FooterContainer>
	)
}

export default Footer;


const FooterContainer = styled.footer`
	
	height: 12rem;
  color: #ffffff;
  background: rgb(85, 85, 85);
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  margin-top: 2rem;


	@media(max-width: 650px){
		height: 17.2rem;
	}

`

const Content = styled.div`

  margin-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;

	a{
		color: rgb(168, 159, 255);
	}

	i{
		color: white;
		font-size: 2rem;
  	padding-right: 1rem;
	}

	i:hover{
		color: rgb(197, 197, 197);
	}

	img {
		max-width: 170px;
		height: auto;
	}

	@media(max-width: 650px){
		display: flex;
    flex-direction: column;
    text-align: center;
	}

`

const Copy = styled.div`
	
	font-size: 0.9rem;
	text-align: center;
	color: rgb(226, 226, 226);
	
`

const LinksContainer = styled.div`
	
	display: flex;
	gap: 3rem;
	justify-content:space-between;
	width: 60%;

	@media(max-width: 650px){
		margin-top: 1rem;
		width: 100%;
		text-align: left;
	}

`

const ImgHenry = styled.div`
	
	position: relative;
	top: 0.4rem;

`

const GradientText = styled.h3`
	
	background-image: linear-gradient(30deg, rgb(137, 218, 255), #3af2ff);
  -ms-background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  -ms-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
`