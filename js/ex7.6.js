const obj = { country: 'israel', capital: 'jerusalem' };
const swap = (obj) => {
	const swapObj = {};
	for (let key in obj) {
		swapObj[obj[key]] = key;
	}
	return swapObj;
};
