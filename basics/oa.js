// 1 Creating an object using an already existing object //
/*let obj1 = {
    x: 10,
    y: 20
};

let obj2 = {
    ...obj1,
    z: 50
};

console.log(obj2);*/




// 2 Copy one object into another //
/*let obj = {
    x: 78,
    y: 20,
    z: 60
};

let obj2 = {
    ... obj
};
console.log(obj2);*/




// 3. Joining objects together //
/*let obj1 = {
    name: "Zansi",
    age: 21
};

let obj2 = {
    location: "Surat",
    salary: 25000
};

let details = {...obj1, ...obj2};
console.log(details);*/




// problem4 //
/*let str = "Zansi";

let obj = {};

for (let i = 0; i <= str.length - 1; i++) {
  if (obj[str[i]] == undefined) { 
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
}

console.log(obj);*/




// 5 What is the frequency of each element of the array //
/*let arr = [7, 2, 7, 8, 5, 9, 7, 7, 2];

let obj = {};

for (let i = 0; i <= arr.length - 1; i++)
{
    if (obj[arr[i]] == undefined)
    {
        obj[arr[i]] = 1;
    }
    else
    {
        obj[arr[i]]++;
    }
}
console.log(obj);*/




// 6 find the sum of elements whose occurance is 2 //
/*let arr = [1, 1, 3, 4, 5, 5, 6, 7, 8, 8];

let obj = {};

for (let i = 0; i <= arr.length - 1; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
}
let sum = 0;
for (let key in obj) {
  if (obj[key] == 2) {
    sum = sum + Number(key);
  }
}

console.log("The sum is", sum);*/




// 7 Print the numbers whose frequency is 1 //
/*let arr = [2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8];

let obj = {};

for (let i = 0; i <= arr.length - 1; i++) 
    {
  if (obj[arr[i]] == undefined) 
    {
    obj[arr[i]] = 1;
    } else {
    obj[arr[i]]++;
  }
}

for (let key in obj) 
    {
  if (obj[key] == 1) 
    {
    console.log(key);
  }
}*/




// problem8 //
/*let details = {
    name: "Zansi",
    age: 21,
    phone: 7016337199,
    address: {
        city: "Surat",
        pin: "395007",
        hobbies: ["coding", "travelling", "reading"]
    }
};

for (let i = 0; i <= details.address.hobbies.length - 1; i++) {
  console.log(details.address.hobbies[i])
}*/



// problem9 //
/*let emp_data = [
  { name: "Aman", age: 45, location: "Banglore", salary: 67000 },

  { name: "Ajay", age: 23, location: "Manali", salary: 28000 },

  { name: "Chunnu", age: 28, location: "Delhi", salary: 78000 },

  { name: "Munnu", age: 18, location: "Goa", salary: 13000 }
];

for (let i = 0; i <= emp_data.length - 1; i++) {

  if (emp_data[i]["salary"] >= 50000) {
    console.log(emp_data[i]["name"], emp_data[i]["salary"]);
  }

}*/




// problem10 //
/*let apple_pro = [
  { name: "macbook", rating: 4.6, price: 180000 },

  { name: "iphone", rating: 4, price: 80000 },

  { name: "ipad", rating: 4.2, price: 55000 },

  { name: "Airpods", rating: 4.3, price: 20000 },
];

//print the products name whose ratings are more than 4.2
for (let i = 0; i <= apple_pro.length - 1; i++) {
  if (apple_pro[i].rating > 4.2) {
    console.log(apple_pro[i].name);
  }
}*/




// problem 11 //
/*let products = ["macbook", "iphone", "ipad", "airpods"];
let price = [180000, 80000, 55000, 20000];

let arr=[];
for (let i=0;i<=products.length-1;i++){
  let obj={};
  obj.name=products[i];
  obj.price=price[i];
  arr.push(obj);
}

console.log(arr);*/