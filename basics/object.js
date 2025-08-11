/*var x;
console.log(x);

var y = null;
console.log(y);*/


// Code 1: Getting Products //
/*function getProduct(name)
{
    var arr = ["Iphone", "iPad", "Headphone"];
    if (name < 0);
    {
        return null;
    }
    return arr [name]
}
var result = getProduct(-1);
if (result == null)
{
    console.log("Invalid Input");
}*/


// Code 2: Declaring Arrays vs Objects //
/*var user1 = ["Zansi", 21, "female", "surat", "coding"];
var user2 ={
    name: "Zansi",
    age: 21,
    gender: "female",
    city: "surat",
    hobbies: "coding",
};
console.log(user2);*/




// Accessing Information in Arrays vs Objects //
/*var user1 = ["Zansi", 21, "female", "Surat", "coding"];
console.log(user1[4]);

var user2 = {
  name: "Zansi",
  age: 21,
  gender: "female",
  city: "Surat",
  hobbies: "coding",
  marks: [50, 100, 80, 90, 80]
};

console.log(user2["gender"]);
console.log(user2["marks"][2]);

console.log(user2.gender);
console.log(user2.marks.length);*/




// Adding, Deleting, and Nested Objects //

// Adding Information //
/*var user2 = {
    name: "Zansi",
    age: 21,
    gender: "female",
    city: "Surat",
    hobbies: "coding",
    marks: [50, 100, 80, 90, 80]
};   
user2['Date_of_Birth'] = "05-Nov-2003";
user2.Date_of_Birth = "05-Nov-2003";
console.log(user2);*/




// Deleting Information //
/*var user2 = {
    name: "Zansi",
    age: 21,
    gender: "female",
    city: "Surat",
    hobbies: "coding",
    marks: [50, 100, 80, 90, 80]
};
delete user2["gender"];
console.log(user2);*/




// Object inside Object //
/*var user2 = {
    name: "Zansi",
    age: 21,
    gender: "female",
    city: "Surat",
    hobbies: "coding",
    marks: [50, 100, 80, 90, 80],
    address: {
        state: "Gujarat",
        country: "India",
        district: "Surat",
        pincode: "395007",
    }
};
console.log(user2["address"]["pincode"]);
//console.log(user2.address.country);*/




// Loops in Objects: for-in loop //
/*var data2 = {
    name: "Zansi",
    age: 21,
    gender: "female",
    city: "Surat",
    hobbies: ["Reading Books"]
};
for (var key in data2){
    console.log(key, " --- ", data2[key]);
}*/




