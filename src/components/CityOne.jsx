import styled from 'styled-components';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { getCity, deleteCity } from '../store/actions';

import countryList from "../helpers/countryNames";
import chooseColorCard from "../helpers/colorCard";
import getDateToday from "../helpers/getDateToday";


const CityOne = () => {

  const dispatch =  useDispatch();
  const cities = useSelector(state => state.cities);
  
  let navigate = useNavigate();
  const { idCity } = useParams();

  const goHome = () => {

    dispatch(deleteCity(id));
    navigate("/", { state: "hello" })
  };
  
  const onFilter = (idCity) => {

    let ciudad = cities.filter(el => el.id === parseInt(idCity));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  
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

    <CityContainer className={`img${chooseColorCard(img)} pos-relative`}>
        <DeleteBtn id={id} className="bi bi-x"
          onClick={goHome}></DeleteBtn>
        <Description>
          <Reload className="bi bi-arrow-clockwise" onClick={() => getCity(name)}></Reload>
          <p>{weather[0].description}</p>
        </Description>
      
      <InfoCity className={`t-center ${chooseColorCard(img)}`}>
         <div>
          <i className="name-city">{getDateToday(timezone)}</i>
        </div>
        <i className="bi bi-geo-alt-fill location-icon"></i> 
        <i className="name-country">{name}</i>
        <div>
          <i className="name-city">{countryList[countryCode]}</i>
        </div>
        <div className="d-flex flex-center">
          <Temp>{Math.trunc(temp)}°</Temp>
          <InfoExtra className="d-flex flex-column">
            <span>{`${humidity}% Humidity`}</span>
            <span>{`${pressure}hpa Pressure`}</span>
            <span>{`${windNum}kph Wind`}</span>
          </InfoExtra>

        </div>
      </InfoCity>
    </CityContainer>
  )
}

export default CityOne;


const DeleteBtn = styled.i`
  position: absolute;
	right: 10px;
	top: 3px;
	font-size: 1.5rem;
	z-index: 999;
	color: rgb(221, 221, 221);

  &:hover{
	  cursor: pointer;
	  color: rgb(255, 110, 110);
  }
`

const CityContainer = styled.div`
  
  margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
	border-radius: 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
  object-fit: contain;
	background-size: cover;

	@media(max-width: 650px){
		flex-direction: column;
		justify-content: center;
	}

`

const InfoCity = styled.div`
  
  padding: 0.7rem;
	padding-top: 1.2rem;
	padding-bottom: 0;
	width: 50%;
	opacity: 0.9;
	color: white;
	border-radius: 0 0.5rem 0.5rem 0;

  @media(max-width: 650px){
		width: 100%;
		border-radius: 0 0 0.5rem 0.5rem;
	}
`

const Temp = styled.span`
	font-size: 4rem;

`

const Description = styled.div`
  
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;

  p{
    color: white;
	  padding: 0.7rem;
	  text-align: center;
	  font-size: 1.3rem;
  }


  @media(max-width: 650px){
		width: 100%;
	}
`

const Reload = styled.i`
  
	width: 40px;
	padding: 0.7rem;
	color: white;
	font-size: 1.2rem;

  &:hover{
	  cursor: pointer;
	  color: rgb(107, 159, 255);
  }
`

const InfoExtra = styled.div`
  
	padding-left: 0.8rem;

  span{
    font-size: 0.7rem;
  	text-align: left;
  	width: 95px;
  }
`