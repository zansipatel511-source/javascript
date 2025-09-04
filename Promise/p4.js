const countValue = -1;

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

promiseCount
.then(response => console.log(response))
.catch(reason => console.log(reason));