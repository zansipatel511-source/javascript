class Shape
{
    constructor(color)
    {
        this.color = color;
    }
    getColor()
    {
        return 'This color is ' + this.color
    }
}

class Circle extends Shape
{
    constructor(radius, color)
    {
        super(color);
        this.radius = radius;
    }
    getArea()
    {
        return Math.PI * this.radius * this.radius
    }
}

let myCircle = new Circle(5, 'red');
console.log(myCircle.getColor());
console.log(myCircle.getArea());