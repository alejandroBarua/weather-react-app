import { useRef } from 'react';
import Loader from '../Loader/Loader';
import searchBarCSS from "./SearchBar.module.css";

const SearchBar = ({city, cleanCity, onSearch, changeInputValue, changeActiveResults, changeInvalidResults, loading, errorMensage}) => {

  let textInput = useRef(null);

  const deleteInputValue = () => {
    textInput.current.value = '';
    textInput.current.focus();
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
