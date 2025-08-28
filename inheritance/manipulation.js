class Number
{
    display()
    {
        console.log(1);
    }
}

class Double extends Number
{
    display()
    {
        console.log(2);
    }
}

class Triple extends Double
{
    display()
    {
        console.log(3);
    }
}

let num1 = new Number();
let num2 = new Double();
let num3 = new Triple();

num1.display();
num2.display();
num3.display();