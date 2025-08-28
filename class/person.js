class PersonWithAge
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    introduce()
    {
        return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

const person = new PersonWithAge("Zansi", 22);
console.log(person.introduce());