import { useParams, useNavigate } from "react-router-dom";

import countryList from "../../helpers/countryNames";
import chooseColorCard from "../../helpers/colorCard";
import getDateToday from "../../helpers/getDateToday";

import './CityOne.css';

const CityOne = ({onFilter, onSearch, setCities}) => {

  let navigate = useNavigate();

  const goHome = () => {
    
    setCities(oldCities => oldCities.filter(el => el.id !== id))

    navigate("/", { state: "hello" })
  };

	const { idCity } = useParams();
  
  const city = onFilter(idCity);

  if(!city) return (<div>
                      <p style={{textAlign: "center", marginBottom: "1rem", color: "#2229"}}>No city found with that id!</p>
                    </div>);
  
  const {id, timezone, name, main, sys, weather, wind} = city;

  const countryCode = sys.country;
  const img = weather[0].icon;
  const temp = main.temp;
  const pressure = main.pressure;
  const humidity = main.humidity;
  const windNum = wind.speed;

  return (

    <div className={`city img${chooseColorCard(img)} pos-relative`}>
        <i id={id} className="bi bi-x deleteCityOne"
          onClick={goHome}></i>
        <div className="description-container">
          <i className="bi bi-arrow-clockwise reload" onClick={() => onSearch(name)}></i>
          <p className="description">{weather[0].description}</p>
        </div>
      
      <div className={`t-center ${chooseColorCard(img)} info-city `}>
         <div>
          <i className="name-city">{getDateToday(timezone)}</i>
        </div>
        <i className="bi bi-geo-alt-fill location-icon"></i> 
        <i className="name-country">{name}</i>
        <div>
          <i className="name-city">{countryList[countryCode]}</i>
        </div>
        <div className="d-flex flex-center">
          <span className="temp">{Math.trunc(temp)}°</span>
          <div className="humidity d-flex flex-column">
            <span>{`${humidity}% Humidity`}</span>
            <span>{`${pressure}hpa Pressure`}</span>
            <span>{`${windNum}kph Wind`}</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CityOne;
