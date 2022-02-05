import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { deleteCity } from '../store/actions';

import chooseColorCard from "../helpers/colorCard";
import countryList from "../helpers/countryNames";

const Card = ({id, temp, name, countryCode, img}) => {

  const dispatch = useDispatch();


  const urlImg = `https://openweathermap.org/img/wn/${img}@2x.png`;

  const handleDeleteCity = (e) => dispatch(deleteCity(e.target.id));

  return (
    <CardContainer className={chooseColorCard(img)}>
      <div className="d-flex flex-end">
        <DeleteBtn id={id} onClick={handleDeleteCity} className="bi bi-x"></DeleteBtn>
      </div>

      <Link to={`/city/${id}`} style={{color: "white"}}>
        <div>
          <IconLocation className="bi bi-geo-alt-fill"></IconLocation> 
          <Country>{name}</Country>
        </div>
          <i>{countryList[countryCode]}</i>
        <InfoCity>
          <img src={urlImg} alt={name} />
          <span>{Math.trunc(temp)}°</span>
        </InfoCity>
      </Link>
    </CardContainer>
  )
}

export default Card;


const CardContainer = styled.div`
  
  display: flex;
	flex-direction: column;
	text-align: center;
	padding-left: 1.3rem;
	padding-right: 2rem;
	border-radius: 0.5rem;
	color: white;
	box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
	transition: all 300ms;

  &:hover{
  	cursor: pointer;
  	transform: scale(1.02, 1.02);
  }
`

const DeleteBtn = styled.i`
  
  position: relative;
	left: 1.3rem;
	top: 0.4rem;
	font-size: 1.5rem;

  &:hover{
  	cursor: pointer;
  	color: rgb(255, 110, 110);
  }
`

const InfoCity = styled.div`
  
  display: flex;
	justify-content: space-between;
	align-items: center;

  img{
  	width: 50%;
  }

  span{
	  font-size: 2.5rem;
	  position: relative;
	  left: -1rem;
  }
`

const Country = styled.i`
	
  font-style: normal;
	font-size: 1.5rem;

`

const IconLocation = styled.i`

	position: relative;
	bottom: 0.2rem;
	right: 0.4rem;
`