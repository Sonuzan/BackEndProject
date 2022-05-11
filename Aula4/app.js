var person = {name: "John",age: 15,gender: "Unknown"};
var jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

var str = '{"name":"John","age":"20"}';
var jsonPears = JSON.parse(str);
console.log(jsonPears);
