

function Student(firstName, lastName, id, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.average = function () {
        var sum = 0;
        for (var i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        var average = sum / grades.length;
        return average;
    }
}
var student1 = new Student("Joe", "Smith", 21619, [2, 3, 4, 5, 5]);
console.log(student1.firstName, student1.lastName, student1.average());