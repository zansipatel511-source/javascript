class Animal
{
    sound()
    {
        return 'Making some noise';
    }
}

class Dog extends Animal
{
    sound()
    {
        return 'Barking loudly!';
    }
}

let myDog = new Dog();
console.log(myDog.sound());