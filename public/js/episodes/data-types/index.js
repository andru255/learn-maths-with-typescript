//string
var color = "Hello";
//number
var natural = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 3876;
//boolean
var isDone = false;
console.log("oh ray!", isDone);
//More strings
//you cant declare a variable called 'name'
var fullName = "Jhon";
var age = 37;
var sentence = "Hi! it's me " + fullName + ",\nI have " + (age + 2) + " years old.";
console.log("templated!", sentence);
//Arrays and objects
var listLetter = ["a", "b", "c"];
var listNumber = [1, 2, 3];
//second way...
var list2ndLetter = ["d", "e", "f"];
var list2ndNumber = [4, 5, 6];
console.log("arrays?", listLetter, listNumber);
console.log("2nd form arrays?", list2ndLetter, list2ndNumber);
//declaring a tuple type?
var demoTuple;
demoTuple = ["hi", 1];
//demoTuple = [1, "hello"]; //sorry do you need the equal format of demoTuple
console.log("tuple?", demoTuple);
//Enums!
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log("c type Color?", c); //why 0?, beacuse Red don't have a value.
var ColorWithValues;
(function (ColorWithValues) {
    ColorWithValues[ColorWithValues["Red"] = 10] = "Red";
    ColorWithValues[ColorWithValues["Blue"] = 20] = "Blue";
    ColorWithValues[ColorWithValues["Yellow"] = 21] = "Yellow";
})(ColorWithValues || (ColorWithValues = {}));
;
var cValue = ColorWithValues.Red;
console.log("cValue type Color?", cValue); //why 10?, beacuse Red have a value.
var cOtherValue = Color[0];
console.log("cOtherValue type Color?", cOtherValue); //returns the key name.
//any! where?
var aceptAll = 4;
aceptAll = 2;
console.log("aceptAll number, cool!", aceptAll);
aceptAll = "he he xD";
console.log("aceptAll string, what?", aceptAll);
//an empty object
var oneObject = {};
console.log("oneObject!", oneObject);
//an generic array
var listAceptAll;
listAceptAll = [1, "a"];
console.log("listAceptAll!", listAceptAll);
//oh come on! void? void opposite to any, so:
var alone = undefined;
function meee() {
    console.log("return some from here will kill you, because can return nothing :/, and yes still be undefined once executed");
}
meee();
//getting lengths!
var stringYeah = "Yeah! awesome";
var lengthFromYeah = stringYeah.length;
console.log("lengthFromYeah!", lengthFromYeah);
var otherForm = stringYeah.length;
console.log("otherForm lengthFromYeah!", otherForm);
