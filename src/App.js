import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Cards from './components/Cards/Cards.jsx';
import CityOne from "./components/CityOne/CityOne";
import About from "./components/About/About";

import statesList from "./helpers/statesList";
import Footer from "./components/Footer/Footer";


const App = () => {

  const [cities, setCities] = useState([]);
  
  const [isActiveResults, setIsActiveResults] = useState(false);
	
  const [dataActivePos, setDataActivePos] = useState(-1);
  const [posScroll, setPosScroll] = useState(0);
	const [position, setPosition] = useState(-1);

  const [loading, setLoading] = useState(false);
  const [errorMensage, setErrorMensage] = useState(false)

  const changeActiveResults = () => {
    setIsActiveResults(true);
    setErrorMensage(false);
	}

  const resetPositions = () => {
    setDataActivePos(-1);
    setPosition(-1);
    setPosScroll(0);
  }

  const changeInvalidResults = () => {
    setIsActiveResults(false);
    resetPositions();
  }

  const [city, setCity] = useState('');
	const [filteredData, setFilteredData] = useState([]);

  const cleanCity = () => setCity('');

  const changeInputValue = (textInput) => {

    resetPositions();
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

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
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
    }).catch((err) => console.log(err));

    document.querySelector('#inputCity').value = "";
    setCity('');
    resetPositions();
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

  	const handleSumPos = () => {
		
		if(!!filteredData.length && dataActivePos < filteredData.slice(0, 9).length){
			setDataActivePos(dataActivePos + 1);
			if(position < 4) setPosition(position+1); 
			if(position === 4) {
				setPosScroll(posScroll+30)
			}
		}
	}
	
	const handleSubPos = () => {
		
		if(dataActivePos > -1){
			setDataActivePos(dataActivePos - 1);
			if(position > 0) setPosition(position-1); 
			if(position === 0) {
				setPosScroll(posScroll-30);
			}
			
		}
	}

  useEffect(() => {
		const $dataResult = document.querySelector('.dataResult');
	 	if(!!$dataResult) $dataResult.scroll({top: posScroll})

	}, [posScroll])
	


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
        errorMensage={errorMensage}
        dataActivePos={dataActivePos}
        handleSumPos={handleSumPos}
        handleSubPos={handleSubPos} />

      <div onClick={changeInvalidResults} className="container wrapper">

        <Routes>

          <Route path="/" element={

            <> 
              {
                !cities.length && <div>
                  <p style={{textAlign: "center",  marginBottom: "1rem", color: "#2229"}}>Look for a city.</p>
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
              <CityOne 
                onSearch={onSearch} 
                onFilter={onFilter}
                setCities={setCities} />
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
