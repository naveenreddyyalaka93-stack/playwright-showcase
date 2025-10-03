// object is collection of properties



let person =
{
    firstName: "Naveen",
    lastName: "Reddy",
    age: 24,
    fullName: function () {
        return `${this.firstName}${this.lastName}`;
    }
};

console.log(person.fullName());

console.log(person.lastName);
console.log(person["lastName"]);
person.firstName = "yalaka naveen"
console.log(person.firstName);
person.gender = "Male";
console.log(person);
console.log(person);

delete person.gender;
console.log(person);

console.log('gender' in person);

// print all the values of javascript object

for (let key in person) {
    console.log(person[key]);
}

