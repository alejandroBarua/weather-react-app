import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Card } from "./index";


const Cards = () => {

  const { idCity } = useParams();
  const cities = useSelector(state => state.cities);

  const citiesList = idCity ? cities.filter(el => el.id !== Number(idCity)) : cities;

  if(!citiesList.length && !idCity) {
    return (<MsgEmpty>
              <p>Look for a city.</p>
            </MsgEmpty>)
  }

  return(

    <CardsContainer>
      {
        citiesList.map(({id, name, main, sys, weather}, index) => { 

          return(<Card 
                    key={index}
                    id={id}
                    name={name}
                    countryCode={sys.country}
                    temp={main.temp}
                    img={weather[0].icon}
                />
          )
        })
      }
    </CardsContainer>
  )
}

export default Cards;


const CardsContainer = styled.div`
  
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem;
`

const MsgEmpty = styled.div`
  
  p{
  	text-align: center;
    color: #2229;
  }
`