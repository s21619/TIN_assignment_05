class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}
var person1 = new Person("Drake", "Wood");
console.log(person1.fullName);

class Student extends Person {
    constructor(firstName, lastName, id, grades = []) {
        super(firstName);
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }
    calcAverage() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; ++i) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }
    get average() {
        return this.calcAverage();
    }
}
var student1 = new Student("Joe", "Smith", 21619, [2, 3, 4, 5, 5]);
console.log(student1.firstName, student1.lastName, student1.average, student1.fullName);