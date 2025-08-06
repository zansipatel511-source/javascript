/*var name1 = "Zansi";
var name2 = "Kavya";
var name3 = "Dharm";
var name4 = "Parv";
var name5 = "Divya";
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(name5);*/

/*var arr = ["Zansi", "Kavya", "Dharm", "Parv", "Divya"];
console.log(arr);*/


// Code 2: Declare and Print 3 students' names using an array //
/*var names = ["Zansi", "Kavya", "Dharm"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);*/



// Code 3: Create an array of vegetables, store 3 vegetables, and print them //
/*var vegetables = ["Tomato", "Beans", "Onion"];
console.log(vegetables[0]);
console.log(vegetables[1]);
console.log(vegetables[2]);*/



// Code 4: Find the length of the vegetables array //
/*var vegetables = ["Tomato", "Beans", "Onion"];
console.log(vegetables.length);*/



// Code 5: Create an array price, store prices, and print the last price //
/*var price = [50, 100, 5000];
console.log(price[2]);*/




/*var prices = [45, 71, 29, 5000];
var last_index = prices.length - 1;
console.log(prices[last_index]);*/



// Code 6: Insert 3 movie names in the array using push() //
/*var items = [];
items.push("Bahuballi");
items.push("Avengers");
items.push("Spider Man");
console.log(items);*/



// Code 7: Create an array superheroes, push 3 superheroes, and print the array//
/*var superheroes = [];
superheroes.push("batman");
superheroes.push("superman");
superheroes.push("ironman");
console.log(superheroes);*/



// Code 8: Print all elements of the array using a loop //
/*var movies = ["batman", "superman", "ironman"];
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}*/




// Code 9: Create an array of movies and actors, print all movie names with actors //
/*var movies = ["Bahuballi", "Spider Man", "Iron Man", "Super Man"];
var actors = ["Prabhas", "Tom Holland", "Robert Downey", "Henry Cavill"];
for (var i = 0; i < movies.length; i++) 
    {
    console.log(movies[i], " - ", actors[i]);
    }*/



// Code 10: Pop the last 2 elements from an array //
/*var movies = ["batman", "superman", "ironman"];
movies.pop();
movies.pop();
console.log(movies);*/




// Code 11: Create an array of 6 numbers, print the numbers array, delete last 3 numbers, and print the array //
/*var numbers = [2, 3, 4, 5, 6, 7];
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);*/


// Second Way: //
/*var numbers = [2, 3, 4, 5, 6, 7];
console.log(numbers);
for (var i = 1; i <= 3; i++) {
    numbers.pop();
}
console.log(numbers);*/




// Code 12: Print the first 3 items in the array using a loop //
/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 1; i <= 3; i++)
    {
    console.log(movies[i]);
}*/


// Second Way [ Using Break ]: //
/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 0; i < movies.length; i++) {
    if (i == 3) {
        break;
    }
    console.log(movies[i]);
}*/



// Code 13: Print all movies except the third movie //
/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 0; i < movies.length; i++) {
    if (i == 2) {
        continue;
    }
    console.log(movies[i]);
}*/




// Code 15: For Even Array, print the second half of the array //
/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man", "hulk", "thor"];
for (var i = 0; i < movies.length; i++) {
    if (i == 2 || i == 4) {
        continue;
    }
    console.log(movies[i]);
}*/



// Code 16: For Even or Odd Array, print the second half of the array //
/*var names = ["A", "B", "C", "D", "E", "F", "G", "H"];
var start = Math.floor(names.length / 2);
for (var i = start; i < names.length; i++) {
    console.log(names[i]);
}*/





// Code 17: For Even or Odd Array, print the first half of the array //
/*var names = ["A", "B", "C", "D", "E", "F", "G", "H", "K", "L"];
var start = 0;
if (names.length % 2 == 0) {
    start = names.length / 2;
}
else {
    start = Math.floor(names.length / 2);
}
for (var i = start; i < names.length; i++) {
    console.log(names[i]);
}*/




// Code 18: Given marks, find the total marks* //
/*var marks = [10, 15, 19, 20, 21];
var sum = 0;
for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log(sum);*/




// Code 19: Find the sum of all subject marks and average also //
/*var subject_marks = [10, 15, 19, 20, 21];
var sum_marks = 0;
for (var i = 0; i < subject_marks.length; i++) {
    sum_marks = sum_marks + subject_marks[i];
}
var average = Math.floor(sum_marks / subject_marks.length);
console.log("Total sum is ", sum_marks);
console.log("Average is ", average);*/




// Code 20: Given marks, find the maximum marks //
/*var marks = [10, 15, 19, 20, 21, 45, 31, 18];
var max = -Infinity;
for (var i = 0; i < marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i];
    }
}
console.log(max);*/