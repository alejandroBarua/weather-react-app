import './About.css';

const About = () => {

	 const urlImgSunny = `http://openweathermap.org/img/wn/01d@2x.png`;
	 const urlImgCloudy = `http://openweathermap.org/img/wn/03d@2x.png`;
	 const urlImgRain = `http://openweathermap.org/img/wn/09d@2x.png`;
	 const urlImgTorm = `http://openweathermap.org/img/wn/11n@2x.png`;
	 const urlImgMist = `http://openweathermap.org/img/wn/13d@2x.png`;

	return (
		<div className="page-about">
			<section className="section-about">
				<h3>About</h3>
				<p>This is a SPA web application that I developed in module 2 of the soyHenry bootcamp to improve my skills in React, API'S and CSS modules.</p>
				<p>You can find out about the climate of different cities in the world.</p>
			</section>

			<section className="section-weathers">
				<h3>What is the weather in your city?</h3>
				<div className="weather-container">
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
				</div>
			</section>
			<section>
				<div>
					<a className="doc-api" href="https://openweathermap.org/current" target="_black">doc openWeatherMap API</a>
				</div>
			</section>
		</div>
	)
}


export default About;