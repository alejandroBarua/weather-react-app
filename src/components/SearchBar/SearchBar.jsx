import { useRef } from 'react';
import Loader from '../Loader/Loader';
import searchBarCSS from "./SearchBar.module.css";

const SearchBar = ({city, cleanCity, onSearch, changeInputValue, changeActiveResults, changeInvalidResults, loading, errorMensage, handleSumPos, handleSubPos, dataActivePos, filteredData}) => {

  let textInput = useRef(null);

  const deleteInputValue = () => {
    textInput.current.value = '';
    textInput.current.focus();
  }

  const handleKeyPress = (e) => {
    
    if(e.key === 'Enter'){

      if(dataActivePos === -1) return  onSearch(e.target.value);
      onSearch(filteredData[dataActivePos]);
    }
    
    
    
    if(e.key === "ArrowDown") {
      handleSumPos();
    }

    if(e.key === "ArrowUp"){
      handleSubPos();
    }
  }

  return (
    <div className={searchBarCSS.searchContainer} >
      <i 
        className={`${searchBarCSS.iconSearch} bi bi-search`}
        type="button" 
        value="Search" 
        onClick={() => onSearch(city)} />
        
      <input id="inputCity" type="text" placeholder="Enter the city"
        ref={textInput}
        onChange={() => {
          changeInputValue(textInput)
          changeActiveResults();  
        }}
        onClick={changeActiveResults}
        onKeyDown={(e) => handleKeyPress(e)}
        
      />

      <i onClick={() => {
        deleteInputValue();
        changeInvalidResults();
        cleanCity();
        }} className={`${searchBarCSS.iconDelete} bi bi-x`} ></i>
        {
          loading && <Loader />
        }

        {
          errorMensage && <span className={searchBarCSS.msgError}>City Not Found</span>
        }
      
    </div>
  )
}

export default SearchBar;
