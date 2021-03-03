const book1 = {
	name: 'bronse horse',
	author: 'dana',
	year: '2000',
};
const book2 = {
	name: 'bronse horse',
	author: 'dana',
	year: '2000',
};

const bookUtils = {
	getFirstPublished(book1, book2) {
		return book1.year > book2.year ? book1 : book2;
	},
	setNewEdition(book, year) {
		return (book.latestEdition = year);
	},
	setLanguage(book, language) {
		return (book.language = language);
	},
	setTranslation(book, language, translator) {
		return (book.translation = { language, translator });
	},
	setPublisher(book, name, location) {
		return (book.publisher = { name, location });
	},
	isSamePublisher(book1, book2) {
		return (
			book1.publisher.name === book2.publisher.name &&
			book1.publisher.location === book2.publisher.location
		);
	},
};
