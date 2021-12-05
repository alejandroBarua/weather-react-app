const toMonth = (num) => {

	let months = ['January', 'February', 'March', 'April', 'May', 'June', 
				'July', 'August', 'September', 'Octuber', 'November', 'December'];
	
	return months[num];
}

const getDateToday = (timeZone) => {
	  
	const dateToday = new Date (Date.now()  + 1000 * timeZone);

  const time = dateToday.toUTCString().slice(16, 22);
	const month = toMonth(dateToday.getMonth());
	const numDay = dateToday.getDate();

	return `${month} ${numDay}, ${time}`; // December 5, 10:11
}

export default getDateToday;