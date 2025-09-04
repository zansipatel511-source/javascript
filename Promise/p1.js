let completedAssignment = new Promise((resolve, reject) => {
    let isCompleted = true;
    if(isCompleted)
    {
        resolve("Completed assignment");
    }
    else
    {
        reject("Not completed assignment");
    }
});

console.log(completedAssignment);