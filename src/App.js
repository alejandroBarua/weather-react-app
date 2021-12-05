import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Cards from './components/Cards/Cards.jsx';
import CityOne from "./components/CityOne/CityOne";
import About from "./components/About/About";

// import data from './db/data.js';
import statesList from "./helpers/statesList";
import Footer from "./components/Footer/Footer";


const App = () => {

  const citiesDefault = ["Buenos Aires, Argentina", "Madrid, España"];

  useEffect(() => {
    
    citiesDefault.map(city => onSearch(city))

  }, [])
  
  const [cities, setCities] = useState([]);
  // const [cities, setCities] = useState(data);
  
  const [isActiveResults, setIsActiveResults] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMensage, setErrorMensage] = useState(false)

  const changeActiveResults = () => {
    setIsActiveResults(true);
    setErrorMensage(false);
	}

  const changeInvalidResults = () => {
    setIsActiveResults(false);
  }

  const [city, setCity] = useState('');
	const [filteredData, setFilteredData] = useState([]);

  const cleanCity = () => setCity('');

  const changeInputValue = (textInput) => {
		
		setCity(textInput.current.value);
		
		const newFilter = statesList.filter(value => {
			return value.toLowerCase().includes(city.toLowerCase());
		});

		setFilteredData(newFilter);
	};

  const onSearch = (city) => {

    if(city === '') return setErrorMensage(true);
    setLoading(true);
    
    const apiKey = '15dbe9612294778560ef5ad24e400225';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(({id, timezone, name, main, sys, weather, wind}) => {
      setLoading(false);

      if(name !== undefined){

        setCities(oldCities => {

          if(oldCities.length === 7) oldCities.pop();
          setFilteredData([]);

          oldCities = oldCities.filter(el => el.id !== id);
          return [{id, timezone, name, main, sys, weather, wind}, ...oldCities];
        })
      } else {
        setErrorMensage(true);        
      }
    })

    document.querySelector('#inputCity').value = "";
    setCity('');
    setIsActiveResults(false);
  }

  const onClose = (id) => setCities(oldCities => oldCities.filter(city => city.id !== Number(id)));

  const onFilter = (idCity) => {

    let ciudad = cities.filter(el => el.id === parseInt(idCity));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <>
      <Header 
        title="Weather App"
        onSearch={onSearch}
        statesList={statesList}
        isActiveResults={isActiveResults}
        changeInvalidResults={changeInvalidResults}
        changeActiveResults={changeActiveResults}
        changeInputValue={changeInputValue}
        filteredData={filteredData}
        city={city}
        cleanCity={cleanCity}
        loading={loading}
        errorMensage={errorMensage} />

      <div onClick={changeInvalidResults} className="container wrapper">

        <Routes>

          <Route path="/" element={

            <> 
              {
                !cities.length && <div>
                  <p style={{textAlign: "center",  marginBottom: "1rem", color: "#2229"}}>There's nothing here!</p>
                </div>
              }

              <Cards 
                cities={cities}
                onClose={onClose}  />
            </>
            
          } />

          <Route path="/about" element={<About />} />

          <Route path="/city/:idCity" element={

            <> 
              <CityOne onSearch={onSearch} onFilter={onFilter} />
              <Cards 
                cities={cities}
                onClose={onClose}  />
            </>
            
          } />

          <Route
            path="*"
            element={
              <div>
                <p style={{textAlign: "center", marginBottom: "1rem", color: "#2229"}}>There's nothing here!</p>
              </div>
            }
          />

        </Routes>
      
      </div>

      <Footer />

    </>
  )
}

export default App;
