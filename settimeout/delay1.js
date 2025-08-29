function DelayedFunction()
{
    console.log("This function will never be called!");
}

let timeoutId = setTimeout(DelayedFunction, 2000);

clearTimeout(timeoutId);
console.log("Delayed function call canceled!");