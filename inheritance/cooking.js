class CookingMethod
{
    cook()
    {
        console.log("Cooking...");
    }
}

class Boiling extends CookingMethod
{
    cook()
    {
        console.log("Boiling water.");
    }
}

class Frying extends Boiling
{
    cook()
    {
        console.log("Frying eggs.");
    }
}

let cook1 = new CookingMethod();
let boil1 = new Boiling();
let fry1 = new Frying();

cook1.cook();
boil1.cook();
fry1.cook();