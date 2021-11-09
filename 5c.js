function studentClasses(classes = []) {
    this.classes = ['Math', 'English', 'Computer Science'];
}
function Student(firstName, lastName, id) {
    studentClasses.call(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
}
Student.prototype = Object.create(studentClasses.prototype);
var student1 = new Student("Jane", "Doe", 5342);
console.log(student1.firstName,student1.lastName, student1.id, student1.classes);