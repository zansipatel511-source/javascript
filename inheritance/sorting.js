class Sorting
{
    sort()
    {
        console.log("Sorting...");
    }
}

class BubbleSort extends Sorting
{
    sort()
    {
        console.log("Bubble sort implementation.");
    }
}

class QuickSort extends Sorting
{
    sort()
    {
        console.log("Quick sort imlementation.");
    }
}

let sort = new Sorting();
let bubble = new BubbleSort();
let quick = new QuickSort();

sort.sort();
bubble.sort();
quick.sort();