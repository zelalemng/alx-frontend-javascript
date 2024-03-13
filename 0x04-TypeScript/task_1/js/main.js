var teacher1 = {
    firstname: "Zelalem",
    fullTimeEmployee: false,
    lastName: "Negash",
    location: "Ethiopia",
    contract: false
};
var dir1 = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 17
};
console.log(dir1);
;
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    var fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return firstLetter + ", " + fullLastName;
};
var result = printTeacher("Zelalem", "Negash");
console.log(result);
;
;
var Student = /** @class */ (function () {
    function Student(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return 'Currently working!';
    };
    return Student;
}());
;
var studentInstance = new Student({ firstName: 'Zelalem', lastName: 'Negash' });
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
