
const chooseColorCard = (img) => {

	const numIcon = Number(img[0] + img[1])

	if(img[2] === 'n' && numIcon >= 1 && numIcon <= 4) return 'nigth';
	if(numIcon === 1) return 'sunny';
	if(numIcon === 11) return 'thunderstorm';
	if(numIcon >= 2 && numIcon <= 4) return 'cloudy';
	if(numIcon === 9 || numIcon === 10) return 'rain';

	return 'mist';
}

export default chooseColorCard;