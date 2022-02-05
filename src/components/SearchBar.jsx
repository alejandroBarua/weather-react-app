import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from "./index";

import { 
  getCity, 
  activateStatus, 
  changeCityInput,
  resetValuesResults,
  incrementValue,
  decrementValue

} from '../store/actions';

const SearchBar = () => {

  let textInput = useRef(null);
  
  const dispatch = useDispatch();
  
  const {
    msgNotFound,
    cityInput,
    loadingStatus,
    dataResult,
    dataActivePos,
    position,
    posScroll
  } = useSelector(state => state);

  const cleanInput = () => {

    if(!msgNotFound) textInput.current.value = '';
  }

  const handleOnSearch = async(city) => {

    if(!cityInput) return dispatch(activateStatus('msgNotFound'));

    await dispatch(activateStatus('loadingStatus'));
    await dispatch(getCity(city));
    await cleanInput();
  }

  const handleCityInput = (e) => {

    dispatch(changeCityInput(e.target.value));
  }
  
  const deleteInputValue = () => {
    dispatch(resetValuesResults());
    textInput.current.value = '';
    textInput.current.focus();
  }

  const handleSumPos = () => {
		
		if(!!dataResult.length && dataActivePos < dataResult.slice(0, 9).length){
			dispatch(incrementValue('dataActivePos'));
			if(position < 4) dispatch(incrementValue('position'));
			if(position === 4) dispatch(incrementValue('posScroll'));
		}
	}

	const handleSubPos = () => {
		
		if(dataActivePos > -1){
			dispatch(decrementValue('dataActivePos'));
			if(position > 0) dispatch(decrementValue('position'));
			if(position === 0) dispatch(decrementValue('posScroll'));
		}
	}

  const handleKeyPress = (e) => {
    
    if(e.key === 'Enter'){

      if(dataActivePos === -1) return handleOnSearch(cityInput);
      handleOnSearch(dataResult[dataActivePos]);
    }
    
    if(e.key === "ArrowDown") {
      handleSumPos();
    }

    if(e.key === "ArrowUp"){
      handleSubPos();
    }
  }
  

  useEffect(() => {
		const $dataResult = document.querySelector('.dataResult');
	 	if(!!$dataResult) $dataResult.scroll({top: posScroll})

	}, [posScroll])


  return (
    <div>
      <IconSearch 
        className='bi bi-search'
        type="button" 
        value="Search" 
        onClick={() => handleOnSearch(cityInput)} />
        
      <SearchInput id="inputCity" type="text" placeholder="Enter the city"
        ref={textInput}
        onChange={(e) => {
          handleCityInput(e);
        }}
        onKeyDown={(e) => handleKeyPress(e)}
        
      />

      <IconDelete onClick={deleteInputValue} className='bi bi-x' />
        {
          loadingStatus && <Loader />
        }

        {
          msgNotFound && <MsgError>City Not Found</MsgError>
        }
      
    </div>
  )
}

export default SearchBar;



const IconSearch = styled.i`
  
  font-size: 1rem;
	position: relative;
	top: 1px;
	padding: 0.34rem;
	background-color: rgb(255, 255, 255);
	opacity: 0.9;
	color: rgb(116, 116, 255);
	border-radius: 0.2rem 0 0 0.2rem;

  &:hover{
	  cursor: pointer;
	  opacity: 1;
  }

`

const IconDelete = styled.i`
  
  font-size: 1rem;
	position: relative;
	top: 1px;
	padding: 0.34rem;
	background-color: white;
	opacity: 0.7;
	color: rgb(177, 177, 177);
	border-radius: 0 0.2rem 0.2rem 0;

  &:hover{
	  cursor: pointer;
	  color: rgb(93, 93, 93);
  }
`

const SearchInput = styled.input`
  
	width: 180px;
	padding-left: 0.6rem;
	opacity: 0.7;
`

const MsgError = styled.span`
  
  position: absolute;
	top: 127px;
	margin-left: 0.7rem;
	font-size: 0.8rem;
`