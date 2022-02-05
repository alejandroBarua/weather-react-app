// Importa las actions types que necesites acá:
import {
  GET_CITY,
	DELETE_CITY,
	ACTIVATE_STATUS,
	DISABLE_STATUS,
	CHANGE_CITY_INPUT,
	RESET_VALUES_RESULTS,
	INCREMENT_VALUE,
	DECREMENT_VALUE

} from '../actions';

import statesList from "../../helpers/statesList";


const initialState = {
	cityInput: '',
	cities: [],
	dataResult: [],
	msgNotFound: false,
	loadingStatus: false,
	dataResultStatus: false,
	dataActivePos: -1,
	position: -1,
	posScroll: 0,

}

const rootReducer = (state = initialState, {type, payload}) => {

	const num = payload === 'posScroll' ? 30 :  1;
    
	switch(type) {

		case GET_CITY:

			let { cities } = state;

			if(payload.id) {
        
				if(cities.length === 5) cities.pop();
				cities = cities.filter(city => city.id !== payload.id);
			}

			return {
				...state,
				cities: payload.id ? [payload, ...cities] : state.cities,
				loadingStatus: false,
				msgNotFound: payload.id ? false : true,
				cityInput: payload.id ? '' : state.cityInput,
				dataResultStatus: false,
				dataActivePos: -1,
				position: -1,
				posScroll: 0
			}

		case DELETE_CITY:
			return {
				...state,
				cities: state.cities.filter(city => city.id !== Number(payload))
			}
		case ACTIVATE_STATUS:
			return {
				...state,
				[payload]: true
			}

		case DISABLE_STATUS:
			return {
				...state,
				[payload]: false
			}

		case CHANGE_CITY_INPUT:
			return {
				...state,
				cityInput: payload,
				dataActivePos: -1,
				position: -1,
				posScroll: 0,
				dataResult: statesList.filter(value => value.toLowerCase().includes(state.cityInput.toLowerCase())),
				dataResultStatus: !!state.dataResult.length,
				msgNotFound: false
			}

		case RESET_VALUES_RESULTS:
			return {
				...state,
				cityInput: '',
				dataResultStatus: false,
				dataActivePos: -1,
				position: -1,
				posScroll: 0,
			}

		case INCREMENT_VALUE:

			return {
				...state,
				[payload]: state[payload] + num
			}

		case DECREMENT_VALUE:

			return {
				...state,
				[payload]: state[payload] - num
			}

		default:
			return state;
	}
}

export default rootReducer;
