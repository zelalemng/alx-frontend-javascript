interface DirectorInterface {
	workFormHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface teacherInterface {
	workFormHome(): string;
        getCoffeeBreak(): string;
        workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workdirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

class Teacher implements teacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeebreak(): string {
		return 'Cannot work from home';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));



type Employee = Director | Teacher;

function isDirector(employee: Employee): employee is Director {
	return (employee as director).workDirectorTasks !== undefined;
}
function executeWork(employee: Employee): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

const teacherEmployee = createEmployee(200);
console.log(executeWork(teacherEmployee));
const directoremployee = createEmployee(1000);
console.log(executeWork(directorEmployee));




type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else if (todayClass === 'History') {
		return 'Teaching History';
	} else {
		return 'Unknow subject';
	}
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
