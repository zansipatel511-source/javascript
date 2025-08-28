class Greeting
{
    greet()
    {
        console.log("Hello");
    }
}

class FormalGreeting extends Greeting
{
    greet()
    {
        console.log("Hello, nice to meet you.");
    }
}

class InformalGreeting extends FormalGreeting
{
    greet()
    {
        console.log("Hey, what's up?");
    }
}

let greet1 = new Greeting();
let greet2 = new FormalGreeting();
let greet3 = new InformalGreeting();

greet1.greet();
greet2.greet();
greet3.greet();