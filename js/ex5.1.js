const countryToLiveIn = (language, isIsland, population, country) => {
	language === 'English' &&
	isIsland === false &&
	population === 50 &&
	country === 'Finland'
		? console.log('You should live in Finland')
		: console.log('Finland does not meet your criteria');
};

countryToLiveIn('English', false, 50, 'Finland');
