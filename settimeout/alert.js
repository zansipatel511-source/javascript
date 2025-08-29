let timeoutId = setTimeout(function(){
    alert("Hello! This alert will be canceled if you click OK within 3 seconds.");
}, 5000);

setTimeout(function(){
    clearTimeout(timeoutId);
    console.log("Alert canceled!");
}, 3000);