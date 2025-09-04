const countValue = 2;

let promiseCount = new Promise(function (resolve, reject) {
    if (countValue > 0)
    {
        resolve("The count value is postive.");
    }
    else
    {
        reject("negative count value!");
    }
});

console.log(promiseCount);