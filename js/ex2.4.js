const date = new Date();
let day = date.toLocaleDateString('en-US', { weekday: 'long' }).split('/');
let year = date.toLocaleDateString('en-US', { year: 'numeric' }).split('/');
let month = date.toLocaleDateString('en-US', { month: 'long' }).split('/');
let dayOfMonth = date
	.toLocaleDateString('en-US', { day: 'numeric' })
	.split('/');

const examDate = () =>
	`Today is ${day[0]} the ${dayOfMonth[0]} of ${month[0]}, ${year[0]}`;

console.log(examDate());
