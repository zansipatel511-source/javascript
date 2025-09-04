let completedAssignment = new Promise((reslove, reject) => {
    let isCompleted = false;
    if (isCompleted)
    {
        reslove("Completed assignment");
    }
    else 
    {
        reject("Not completed assignment");
    }
});

console.log(completedAssignment);

completedAssignment
.then((fromResolve) => console.log(fromResolve))
.catch((fromReject) => console.log(fromReject));