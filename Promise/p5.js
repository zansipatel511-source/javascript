function wait(t)
{
    return new Promise((res, rej) => {
        setTimeout(() => res("Promise Resolved!"), t);
    });
} 
wait(5000).then((val) => console.log(val));