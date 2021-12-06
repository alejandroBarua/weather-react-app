import { Link } from "react-router-dom";
import chooseColorCard from "../../helpers/colorCard";
import countryList from "../../helpers/countryNames";
import './Card.css';

const Card = ({id, temp, name, countryCode, img, onClose}) => {

  const urlImg = `https://openweathermap.org/img/wn/${img}@2x.png`;

  const deleteCity = (e) => onClose(e.target.id);

  return (
    <div className={`card ${chooseColorCard(img)}`}>
      <div className="d-flex flex-end delete-container">
        <i id={id} onClick={deleteCity} className="bi bi-x"></i>
      </div>

      <Link to={`/city/${id}`} style={{color: "white"}}>
        <div>
          <i className="bi bi-geo-alt-fill location-icon"></i> 
          <i className="name-country">{name}</i>
        </div>
          <i className="name-city">{countryList[countryCode]}</i>
        <div className="img-container">
          <img src={urlImg} alt={name} />
          <span>{Math.trunc(temp)}°</span>
        </div>
      </Link>
    </div>
  )
}

export default Card;