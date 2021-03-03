const all = document.querySelectorAll('div');
//const [myFirstDiv, mySecondDiv, myThirdDiv, myFourthDiv] = [...all];
const elements = new Map();
all.forEach((el) => {
	elements.set(el.id, el);
});
