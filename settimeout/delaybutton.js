document.getElementById("myButton").addEventListener("click",function(){
    console.log("Button clicked");

    setTimeout(function(){
        document.getElementById("myButton").style.backgroundColor = "green";
    }, 2000);
});