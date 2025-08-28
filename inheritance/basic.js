class Animal
{
    constructor(name)
    {
        this.name = name;
    }
    sound()
    {
        return'Making some noise';
    }
}

class Dog extends Animal
{
    bark()
    {
        return this.name + ' barks loudly';
    }
}

let myDog = new Dog('Buddy');
console.log(myDog.bark());