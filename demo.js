/* const statesList = [{"id_country":89,"name":"Amazonas"},{"id_country":89,"name":"Ancash"},{"id_country":89,"name":"Apurímac"},{"id_country":89,"name":"Arequipa"},{"id_country":89,"name":"Ayacucho"},{"id_country":89,"name":"Cajamarca"},{"id_country":89,"name":"Callao"},{"id_country":89,"name":"Cusco"},{"id_country":89,"name":"Huancavelica"},{"id_country":89,"name":"Huánuco"},{"id_country":89,"name":"Ica"},{"id_country":89,"name":"Junín"},{"id_country":89,"name":"La Libertad"},{"id_country":89,"name":"Lambayeque"},{"id_country":89,"name":"Lima"},{"id_country":89,"name":"Loreto"},{"id_country":89,"name":"Madre de Dios"},{"id_country":89,"name":"Moquegua"},{"id_country":89,"name":"Pasco"},{"id_country":89,"name":"Piura"},{"id_country":89,"name":"Puno"},{"id_country":89,"name":"San Martín"},{"id_country":89,"name":"Tacna"},{"id_country":89,"name":"Tumbes"},{"id_country":89,"name":"Ucayali"},{"id_country":81,"name":"Valparaíso"},{"id_country":81,"name":"Aisén del General Carlos Ibánez del Campo"},{"id_country":81,"name":"Antofagasta"},{"id_country":81,"name":"Araucanía"},{"id_country":81,"name":"Atacama"},{"id_country":81,"name":"Bío-Bío"},{"id_country":81,"name":"Coquimbo"},{"id_country":81,"name":"Libertador General Bernardo OHiggins"},{"id_country":81,"name":"Los Lagos"},{"id_country":81,"name":"Magallanes y de la Antártica Chilena"},{"id_country":81,"name":"Maule"},{"id_country":81,"name":"Region Metropolitana"},{"id_country":81,"name":"Tarapacá"},{"id_country":82,"name":"Amazonas"},{"id_country":82,"name":"Antioquia"},{"id_country":82,"name":"Arauca"},{"id_country":82,"name":"Atlántico"},{"id_country":82,"name":"Caquetá"},{"id_country":82,"name":"Cauca"},{"id_country":82,"name":"César"},{"id_country":82,"name":"Chocó"},{"id_country":82,"name":"Córdoba"},{"id_country":82,"name":"Guaviare"},{"id_country":82,"name":"Guainía"},{"id_country":82,"name":"Huila"},{"id_country":82,"name":"La Guajira"},{"id_country":82,"name":"Meta"},{"id_country":82,"name":"Narino"},{"id_country":82,"name":"Norte de Santander"},{"id_country":82,"name":"Putumayo"},{"id_country":82,"name":"Quindío"},{"id_country":82,"name":"Risaralda"},{"id_country":82,"name":"San Andrés y Providencia"},{"id_country":82,"name":"Santander"},{"id_country":82,"name":"Sucre"},{"id_country":82,"name":"Tolima"},{"id_country":82,"name":"Valle del Cauca"},{"id_country":82,"name":"Vaupés"},{"id_country":82,"name":"Vichada"},{"id_country":82,"name":"Casanare"},{"id_country":82,"name":"Cundinamarca"},{"id_country":82,"name":"Distrito Capital"},{"id_country":82,"name":"Caldas"},{"id_country":82,"name":"Magdalena"},{"id_country":42,"name":"Aguascalientes"},{"id_country":42,"name":"Baja California"},{"id_country":42,"name":"Baja California Sur"},{"id_country":42,"name":"Campeche"},{"id_country":42,"name":"Chiapas"},{"id_country":42,"name":"Chihuahua"},{"id_country":42,"name":"Coahuila de Zaragoza"},{"id_country":42,"name":"Colima"},{"id_country":42,"name":"Distrito Federal"},{"id_country":42,"name":"Durango"},{"id_country":42,"name":"Guanajuato"},{"id_country":42,"name":"Guerrero"},{"id_country":42,"name":"Hidalgo"},{"id_country":42,"name":"Jalisco"},{"id_country":42,"name":"México"},{"id_country":42,"name":"Michoacán de Ocampo"},{"id_country":42,"name":"Morelos"},{"id_country":42,"name":"Nayarit"},{"id_country":42,"name":"Nuevo León"},{"id_country":42,"name":"Oaxaca"},{"id_country":42,"name":"Puebla"},{"id_country":42,"name":"Querétaro de Arteaga"},{"id_country":42,"name":"Quintana Roo"},{"id_country":42,"name":"San Luis Potosí"},{"id_country":42,"name":"Sinaloa"},{"id_country":42,"name":"Sonora"},{"id_country":42,"name":"Tabasco"},{"id_country":42,"name":"Tamaulipas"},{"id_country":42,"name":"Tlaxcala"},{"id_country":42,"name":"Veracruz-Llave"},{"id_country":42,"name":"Yucatán"},{"id_country":42,"name":"Zacatecas"},{"id_country":123,"name":"Chuquisaca"},{"id_country":123,"name":"Cochabamba"},{"id_country":123,"name":"El Beni"},{"id_country":123,"name":"La Paz"},{"id_country":123,"name":"Oruro"},{"id_country":123,"name":"Pando"},{"id_country":123,"name":"Potosí"},{"id_country":123,"name":"Santa Cruz"},{"id_country":123,"name":"Tarija"},{"id_country":5,"name":"Buenos Aires"},{"id_country":5,"name":"Catamarca"},{"id_country":5,"name":"Chaco"},{"id_country":5,"name":"Chubut"},{"id_country":5,"name":"Córdoba"},{"id_country":5,"name":"Corrientes"},{"id_country":5,"name":"Distrito Federal"},{"id_country":5,"name":"Entre Ríos"},{"id_country":5,"name":"Formosa"},{"id_country":5,"name":"Jujuy"},{"id_country":5,"name":"La Pampa"},{"id_country":5,"name":"La Rioja"},{"id_country":5,"name":"Mendoza"},{"id_country":5,"name":"Misiones"},{"id_country":5,"name":"Neuquén"},{"id_country":5,"name":"Río Negro"},{"id_country":5,"name":"Salta"},{"id_country":5,"name":"San Juan"},{"id_country":5,"name":"San Luis"},{"id_country":5,"name":"Santa Cruz"},{"id_country":5,"name":"Santa Fe"},{"id_country":5,"name":"Santiago del Estero"},{"id_country":5,"name":"Tierra del Fuego"},{"id_country":5,"name":"Tucumán"},{"id_country":82,"name":"Bolivar"},{"id_country":82,"name":"Boyacá"}]
 */

/* const countryList = [{"id":5,"name":"Argentina"},{"id":123,"name":"Bolivia"},{"id":81,"name":"Chile"},{"id":82,"name":"Colombia"},{"id":42,"name":"México"},{"id":89,"name":"Perú"}]

const newList = statesList.map(el => {

	let country;
	
	for (let i = 0; i < countryList.length; i++) {
		const element = countryList[i];
		
		if(element.id === el.id_country) country = element.name;
	}

	return `${el.name}, ${country}`

})


const fs = require('fs');

fs.writeFile('list.json', JSON.stringify(newList),  function(err, result) {
    if(err) console.log('error', err);
});
 */


const toMonth = (num) => {

	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
	
	return months[num];
}

const getDateToday = (timeZone) => {
	  
	const dateToday = new Date (Date.now()  + 1000 * timeZone);

  const time = dateToday.toUTCString().slice(16, 22);
	const month = toMonth(dateToday.getMonth());
	const numDay = dateToday.getDate();

	return `${month} ${numDay}, ${time}`;

	
}

console.log(getDateToday(-21600));
console.log(getDateToday(-10800));