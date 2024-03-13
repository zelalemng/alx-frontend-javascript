type Teacher = {
	firstname: string;
	lastname: string;
	fullTimeEmploye: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
};

const teacher1: Teacher = {
	firstname: "Zelalem",
	fullTimeEmployee: false,
	lastName: "Negash",
	location: "Ethiopia",
	contract: false,
};

interface directors extends Teacher {
	numberOfReports: number;
}

const dir1: Directos = {
	firstName: 'John',
	fullTimeEmployee: true,
	lastName: 'Doe',
	location: 'London',
	numberOfReports: 17,
};
console.log(dir1);


interface printTeacherFunction {
	(firstName: string, lastName: string):
};

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
	const firstLetter = firstName.charAt(0).toUpperCase();
	const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
	return `${firstLetter}, ${fullLastName}`
};

const result: string = printTeacher("Zelalem", "Negash");
console.log(result);




interface StudentConstructor {
	firstName: string;
	lastName: string;
};
interface StudentMethods {
	workOnHomework(): string;
	displayName(): string;
};

interface StudentClass extends StudentConstructor, StudentMethods {}

class Student implements StudentClass {
	firstName: string;
	lastName: string;

	constructor({firstName, lastName}: StudentConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working!';
	}
};
const studentInstance = new Student({firstName: 'Zelalem', lastName: 'Negash'});

console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
