const table = document.createElement('table');
table.classList.add('t01');
table.innerHTML = `<tr>
    <th colspan="5">Star Wars</th>
</tr>
<tr>
    <th>Name</th>
    <th>Height</th> 
    <th>Hair Color</th>
    <th>Planet Name</th> 
    <th>Planet population</th>
</tr>
`;

document.body.appendChild(table);
const baseEndpoint = `https://swapi.dev/api`;
const pepleEndpoint = `${baseEndpoint}/people/`;
const characters = [];

async function getCharacter() {
	const response = await fetch(pepleEndpoint);
	const data = await response.json();

	//console.log(data.results);
	for (let c of data.results) {
		console.log(c);

		const homeworldResponse = await fetch(c.homeworld);
		const homeworldData = await homeworldResponse.json();
		//console.log(homeworldData);
		characters.push({
			name: c.name,
			hair: c.hair_color,
			height: c.height,
			planet: homeworldData.name,
			population: homeworldData.population,
		});
		// const row = document.createElement('tr');
		// //console.log(c);
		// row.innerHTML = `<td>${c.name}</td>
		// 	<td>${c.hair_color}</td>
		// 	<td>${c.height}</td>
		// 	<td>${homeworldData.name}</td>
		// 	<td>${homeworldData.population}</td>`;

		// table.appendChild(row);
	}
	console.log(characters);

	displayCharacter();
}

getCharacter();

function displayCharacter() {
	console.log(characters);
	characters.forEach((c) => {
		let row = document.createElement('tr');
		row.innerHTML = `<td>${c.name}</td>
        <td>${c.hair}</td>
        <td>${c.height}</td>
        <td>${c.planet}</td>
        <td>${c.population}</td>`;

		table.appendChild(row);
	});
}

//console.log(character);
//characters[index] = character;
