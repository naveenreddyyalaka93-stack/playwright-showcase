class Person {
    // constructor is a method which executes by default when you create object of the class
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

    }
    age = 24
    get location() {
        return "canada"
    }

    fullName() {
        return this.firstName + this.lastName;
    }
}



// let person = new Person("naveen", "reddy");
// let person1 = new Person("space", "arrow");

// console.log(person.age);
// console.log(person.location);
// console.log(person.fullName());

export { Person };
