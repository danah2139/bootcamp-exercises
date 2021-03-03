function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const populationPercentages = (populations) => {
	let percentages = [];
	let i = 0;
	while (i < populations.length) {
		percentages.push(percentageOfWorld1(populations[i]));
		i++;
	}
	return percentages;
};

let populations = [250, 19, 120, 10];
console.log(populationPercentages(populations));
