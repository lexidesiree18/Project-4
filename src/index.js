class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    describe() {
        console.log(
            `This person is a ${this.age} years old, They are a ${this.gender} and their name is ${this.name}`
        );
    }
}

class Teacher extends Person {
    constructor(name, age, gender, id, course, contact) {
        super(name, age, gender);
        this.id = id;
        this.course = course;
        this.contact = contact;
    }
}

class Student extends Person {
    constructor(name, age, gender, id, teacher, grade, major) {
        super(name, age, gender);
        this.id = id;
        this.teacher = teacher;
        this.grade = grade;
        this.major = major;
    }
}

class Course {
    constructor(teacher, name) {
        this.teacher = teacher;
        this.students = [];
        this.name = name;
    }

    addStudent(student) {
        this.students.push(student);
    }

    describe() {
        console.log(
            'This class is ${this.name} and its taught by ${this.teacher.name}',
        );

        for (let student of this.students) {
            student.describe();
        }
    }
}

new Teacher('Dylan', '20', 'male')
const dylan = new Teacher('Dylan', 20, 'male', 1, 'JS', 'dylhack@gmail.com');
const js = new Course(dylan, 'JavaScript');

const amanda = new Student('Amanda', 30, 'female', 2, dylan, 'Freshman', 'CS');
const devin = new Student('Devin', 22, 'male', 3, dylan, 'Junior', 'CS');
const taylor = new Student('Taylor', 19, 'female', 4, dylan, 'Senior', 'CS0');

js.addStudent(amanda);
js.addStudent(devin);
js.addStudent(taylor);
js.describe();