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

/*var names = ["Zansi", "Kavya", "Dharm"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);*/


/*var vegetables = ["Tomato", "Beans", "Onion"];
console.log(vegetables[0]);
console.log(vegetables[1]);
console.log(vegetables[2]);*/


/*var vegetables = ["Tomato", "Beans", "Onion"];
console.log(vegetables.length);*/

/*var price = [50, 100, 5000];
console.log(price[2]);*/


/*var prices = [45, 71, 29, 5000];
var last_index = prices.length - 1;
console.log(prices[last_index]);*/


/*var items = [];
items.push("Bahuballi");
items.push("Avengers");
items.push("Spider Man");
console.log(items);*/


/*var superheroes = [];
superheroes.push("batman");
superheroes.push("superman");
superheroes.push("ironman");
console.log(superheroes);*/



/*var movies = ["batman", "superman", "ironman"];
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}*/



/*var movies = ["Bahuballi", "Spider Man", "Iron Man", "Super Man"];
var actors = ["Prabhas", "Tom Holland", "Robert Downey", "Henry Cavill"];
for (var i = 0; i < movies.length; i++) 
    {
    console.log(movies[i], " - ", actors[i]);
    }*/


/*var movies = ["batman", "superman", "ironman"];
movies.pop();
movies.pop();
console.log(movies);*/



/*var numbers = [2, 3, 4, 5, 6, 7];
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);*/



/*var numbers = [2, 3, 4, 5, 6, 7];
console.log(numbers);
for (var i = 1; i <= 3; i++) {
    numbers.pop();
}
console.log(numbers);*/


/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 1; i <= 3; i++)
    {
    console.log(movies[i]);
}*/


/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 0; i < movies.length; i++) {
    if (i == 3) {
        break;
    }
    console.log(movies[i]);
}*/


/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 0; i < movies.length; i++) {
    if (i == 2) {
        continue;
    }
    console.log(movies[i]);
}*/



/*var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man", "hulk", "thor"];
for (var i = 0; i < movies.length; i++) {
    if (i == 2 || i == 4) {
        continue;
    }
    console.log(movies[i]);
}*/


/*var names = ["A", "B", "C", "D", "E", "F", "G", "H"];
var start = Math.floor(names.length / 2);
for (var i = start; i < names.length; i++) {
    console.log(names[i]);
}*/




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



/*var marks = [10, 15, 19, 20, 21];
var sum = 0;
for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log(sum);*/



/*var subject_marks = [10, 15, 19, 20, 21];
var sum_marks = 0;
for (var i = 0; i < subject_marks.length; i++) {
    sum_marks = sum_marks + subject_marks[i];
}
var average = Math.floor(sum_marks / subject_marks.length);
console.log("Total sum is ", sum_marks);
console.log("Average is ", average);*/




/*var marks = [10, 15, 19, 20, 21, 45, 31, 18];
var max = -Infinity;
for (var i = 0; i < marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i];
    }
}
console.log(max);*/