const book = {
	title: 'bronse horse',
	author: 'dana',
	publishDate: '2000',
	genere: 'roman',
	age: 16,
};

const descBook = (book) => {
	return `The book ${book.title} was written by ${book.author} in
    the year ${book.publishDate}`;
};

console.log(descBook(book));

//const book = { title, author, publishDate, genere, age };
