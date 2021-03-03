function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const populationPercentages = (populations) => {
	let percentages = [];
	for (let i = 0; i < populations.length; i++) {
		percentages.push(percentageOfWorld1(populations[i]));
	}
	return percentages;
};

let populations = [250, 19, 120, 10];
console.log(populationPercentages(populations));
