let timeoutId = setTimeout(function(){
    console.log("This message will never be displayed!");
}, 3000);

clearTimeout(timeoutId);
console.log("Timeout canceled!");