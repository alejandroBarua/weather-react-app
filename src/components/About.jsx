import styled from 'styled-components';


const About = () => {

	 const urlImgSunny = `https://openweathermap.org/img/wn/01d@2x.png`;
	 const urlImgCloudy = `https://openweathermap.org/img/wn/03d@2x.png`;
	 const urlImgRain = `https://openweathermap.org/img/wn/09d@2x.png`;
	 const urlImgTorm = `https://openweathermap.org/img/wn/11n@2x.png`;
	 const urlImgMist = `https://openweathermap.org/img/wn/13d@2x.png`;

	return (
		<AboutContainer>
			<SectionAbout>
				<h3>About</h3>
				<p>This is a SPA web application that I developed in module 2 of the soyHenry bootcamp to improve my skills in React, API'S and CSS modules.</p>
				<p>You can find out about the climate of different cities in the world.</p>
			</SectionAbout>

			<section>
				<h3>What is the weather in your city?</h3>
				<WeatherContainer>
					<div className="sunny">
						<p>Sunny</p>
						<img src={urlImgSunny} alt="" />
					</div>
					<div className="cloudy">
						<p>Cloudy</p>
						<img src={urlImgCloudy} alt="" />
					</div>
					<div className="rain">
						<p>Rain</p>
						<img src={urlImgRain} alt="" />
					</div>
					<div className="thunderstorm">
						<p>Torm</p>
						<img src={urlImgTorm} alt="" />
					</div>
					<div className="mist">
						<p>Mist</p>
						<img src={urlImgMist} alt="" />
					</div>
				</WeatherContainer>
			</section>
			<section>
				<div>
					<DocApi className="doc-api" href="https://openweathermap.org/current" target="_black">doc openWeatherMap API</DocApi>
				</div>
			</section>
		</AboutContainer>
	)
}


export default About;

const WeatherContainer = styled.div`
	
	display: flex;
	gap: 0.5rem;

	& > div {
		display: flex;
		flex-direction: column;
		text-align: center;
		color: white;
		border-radius: 0.5rem;
	}

	p{
		position: relative;
		top: 0.5rem;
	}

`

const AboutContainer = styled.div`

	section {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		margin-bottom: 2rem;
	}

	h3 {
		font-size: 1.35rem;
		margin-bottom: 0.9rem;
		color: rgb(97, 96, 96);
	}

`

const SectionAbout = styled.section`
	
	width: 35rem;
	margin-left: auto;
	margin-right: auto;
	color: rgb(100, 100, 100);

	@media(max-width: 650px){
		width: 90%;
	}

`

const DocApi = styled.a`
	
	color: coral;
	text-decoration: underline coral;
`