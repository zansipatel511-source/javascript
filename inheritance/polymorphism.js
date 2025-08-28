// Polymorphism enables a function or method to exhibit different behaviors based on its context, fostering code flexibility and reusability.

class FirstClass
{
    add()
    {
        console.log("First Method");
    }
}

class SecondClass extends FirstClass
{
    add()
    {
        console.log(30 + 50);
    }
}

class ThirdClass extends SecondClass
{
    add()
    {
        console.log("Last Method");
    }
}

let obj1 = new FirstClass();
let obj2 = new SecondClass();
let obj3 = new ThirdClass();

obj1.add();
obj2.add();
obj3.add();