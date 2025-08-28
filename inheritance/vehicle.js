class Vehicle 
{
    operate() 
    {
        console.log("Vehicle is moving.");
    }
}

class Car extends Vehicle 
{
    operate() 
    {
        console.log("Car is driving.");
    }
}

class Bicycle extends Vehicle 
{
    operate() 
    {
        console.log("Bicycle is pedaling.");
    }
}

let vehicle1 = new Vehicle();
let car1 = new Car();
let bike1 = new Bicycle();

vehicle1.operate(); 
car1.operate();     
bike1.operate();    