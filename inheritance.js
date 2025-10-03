// Inheritance main pillar of OOP's
// one class can inherit/acquire the properties, methods of another class
// The class which inherits the properties of other is know as subClass(derived class, child class)
// the class whose properties are inherited is know as superClass

import { Person } from './classes.js';

class Pet extends Person
{
    constructor(firstName,lastName)
    {
        super(firstName,lastName)

    }

    get location()
    {
        return "Bluecross";
    }
}

const pet = new Pet("Tommy","snoopy");
const pet1 = new Pet("blacky", "whitey");
console.log(pet.fullName());
console.log(pet1.fullName());





