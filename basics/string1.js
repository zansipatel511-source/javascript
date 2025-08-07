// Code 1: Declare a string variable and print it. //
/*let name = "Zansi";
console.log(name);
console.log(name[0]); 
console.log(name[1]); */



// Code 2: Find the length of the String. //
/*let name = "Zansi Patel";
console.log(name.length); */



// Real-world use of Strings Code 3: Validate Password Length. //
/*let pwd = "Zansi";
if(pwd.length < 6)
{
    console.log("Invalid: Your Password must be at least 6 haracters long");
}
else
{
    console.log("Valid Password");
    
}*/




// Loop in Strings Code 4: Print each character of String using a loop. //
/*let name = "Nobita";
for(let i = 0; i < name.length; i++) {
  console.log(name[i]);
}*/




// Code 5: Add each character to a third variable and print it. //
/*let name = "jay hind";
let bag = "";
for(let i = 0; i < name.length; i++) {
  bag = bag + name[i];
}
console.log(bag);*/



// Code 6: Store Nobita in String and array. //
/*let name1 = "Nobita";
console.log(name1);
console.log(name1[0]);

let name2 = ["N","o","b","i","t","a"];
console.log(name2);
console.log(name2[0]);*/



// Strings are immutable Code 7: Attempt to update Character in String //
/*let name = "Naruto";
name[0] = "M";
console.log(name);*/




// Code 8: Update Character in array //
/*let name = ["Z", "a", "n", "s", "i"];
name[0] = "M";
console.log(name);*/



// Update Strings Code 9: Update String using array and third variable. [First Method] //
/*let name = "Superman";
let name2 = [];
for(let i=0; i<name.length; i++) {
  name2.push(name[i]);
}
name2[0] = "N";
let bag = "";
for(let i=0; i<name2.length; i++) {
  bag = bag + name2[i];
}
console.log(bag);*/




// Code 10: Update String using array and third variable. [Second Method] //
/*let name = "Madam";
let output = "";
for(let i=0; i<name.length; i++) {
  if(i==0) {
    output = output + "N";
  } else {
    output = output + name[i];
  }
}
console.log(output);*/




// Remove char in Strings Code 11: Remove a char from String //
/*let name = "Clara";
let output = "";
for(let i=0; i<name.length; i++) {
  if(name[i] != "C") {
    output = output + name[i];
  }
}
console.log(output);*/




// Code 12: Count the names starting with N or n //
/*let names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
let count = 0;
for(let i=0; i<names.length; i++) {
  let name = names[i];
  if(name[0] == "N" || name[0] == "n") {
    count++;
  }
}
console.log(count);*/




// Code 13: Count the names which contain A in them. //
/*let names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
let count = 0;
for(let i=0; i<names.length; i++) {
  let name = names[i];
  for(let j = 0; j<name.length; j++) {
    if(name[j]=='a' || name[j]=='A') {
      count++;
    }
  }
}
console.log(count);*/