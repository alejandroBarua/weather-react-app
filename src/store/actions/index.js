export const GET_CITY = 'GET_CITY';
export const DELETE_CITY = 'DELETE_CITY';
export const ACTIVATE_STATUS = 'ACTIVATE_STATUS';
export const DISABLE_STATUS = 'DISABLE_STATUS';
export const CHANGE_CITY_INPUT = 'CHANGE_CITY_INPUT';
export const RESET_VALUES_RESULTS = 'RESET_VALUES_RESULTS';
export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const DECREMENT_VALUE = 'DECREMENT_VALUE';




const apiKey = '15dbe9612294778560ef5ad24e400225';

export const getCity = (city) => dispatch => {

	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(({id, timezone, name, main, sys, weather, wind}) => {
                dispatch({
                    type: GET_CITY,
                    payload: {id, timezone, name, main, sys, weather, wind}
                })
            })
						.catch(() => {
							dispatch({
								type: GET_CITY,
								payload: {}
              })
						})
}


export const deleteCity = (id) => {

	return {
        type: DELETE_CITY,
        payload: id,
  }
}


export const activateStatus = (name) => {

	return {
        type: ACTIVATE_STATUS,
        payload: name,
  }
}


export const disableStatus = (name) => {

	return {
        type: DISABLE_STATUS,
        payload: name,
  }
}


export const changeCityInput = (name) => {

	return {
        type: CHANGE_CITY_INPUT,
        payload: name,
  }
}


export const resetValuesResults = () => {

	return {
    type: RESET_VALUES_RESULTS,
  }
}


export const incrementValue = (payload) => {

	return {
    type: INCREMENT_VALUE,
    payload
  }
}


export const decrementValue = (payload) => {

	return {
    type: DECREMENT_VALUE,
    payload
  }
}