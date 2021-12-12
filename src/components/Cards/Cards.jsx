import { useParams } from "react-router-dom";

import Card from '../Card/Card';
import cardsCSS from './Cards.module.css'

const Cards = ({cities, onClose}) => {

  const { idCity } = useParams();

  const citiesList = idCity ? cities.filter(el => el.id !== Number(idCity)) : cities;

  if(!citiesList.length && !idCity) {
    return (<div>
                  <p style={{textAlign: "center",  marginBottom: "1rem", color: "#2229"}}>Look for a city.</p>
                </div>)
  }

  return(

    <div className={cardsCSS.cardsContainer}>
      {
        citiesList.map(({id, name, main, sys, weather}, index) => { 

          return(<Card 
                    key={index}
                    id={id}
                    name={name}
                    countryCode={sys.country}
                    temp={main.temp}
                    img={weather[0].icon}
                    onClose={onClose}
                />
          )
        })
      }
    </div>
  )
}

export default Cards;