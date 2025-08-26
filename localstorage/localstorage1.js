var persone = {
    name : "Zansi",
    age : 22,
    height : "5 Ft 4 In",
    gender : "Female",
    hobbies : ["Coding", "Travelling", "Running"]
}
var json = JSON.stringify(persone)
console.log(json);

var regularObject = JSON.parse(json)
console.log(regularObject)
