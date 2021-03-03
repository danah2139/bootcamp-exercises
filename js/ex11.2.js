const school = {
	teachers: [
		{
			id: 1,
			name: 'Pinchas',
			subjects: ['chemistry', 'biology', 'physics'],
			students: [],
			capacityLeft: 3,
		},
		{
			id: 2,
			name: 'Williams',
			subjects: ['history', 'ethics'],
			students: [],
			capacityLeft: 2,
		},
	],
	students: [
		{
			id: 10,
			name: 'Jennifer',
			age: 20,
		},
		{
			id: 11,
			name: 'Howard',
			age: 23,
		},
		{
			id: 12,
			name: 'Old-Timmy',
			age: 86,
		},
		{
			id: 13,
			name: 'Houston',
			age: 21,
		},
	],
	findPerson(type, id) {
		return this[type].find((person) => {
			return person.id === id;
		});
	},
	assignStudent(id, subject) {
		// let students = [];
		let student = school.findPerson('students', id);
		let teacher = this.teachers.find((teacher) => {
			return teacher.capacityLeft && teacher.subjects.includes(subject);
		});
		if (teacher) {
			teacher.students.push(student);
			teacher.capacityLeft--;
		} else {
			console.log('Sorry,no available teachers left');
		}
	},
	assignTeachersSubject(id, subject) {
		let teacher = this.teachers.findPerson('teachers', id);
		if (!teacher.subjects.includes(subject)) {
			teacher.subjects.push(subject);
		}
	},
};
