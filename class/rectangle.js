class Rectangle
{
    constructor(width, height)
    {
        this. width = width;
        this.height = height
    }
    calculateArea()
    {
        return this.width * this.height
    }
}

const rectangle = new Rectangle(9, 6);
console.log(rectangle.calculateArea());