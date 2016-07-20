//string
let color: string = "Hello";

//number
let natural: number = 6;
let hex: number     = 0xf00d;
let binary: number  = 0b1010;
let octal: number  = 0o7444;

//boolean
let isDone:boolean = false;

console.log("oh ray!", isDone);

//More strings
//you cant declare a variable called 'name'
let fullName: string = `Jhon`;
let age: number = 37;
let sentence: string = `Hi! it\'s me ${ fullName },
I have ${ age + 2 } years old.`

console.log("templated!", sentence);

//Arrays and objects
let listLetter: string[] = ["a", "b", "c"];
let listNumber: number[] = [1, 2, 3];

//second way...
let list2ndLetter: Array<string> = ["d", "e", "f"];
let list2ndNumber: Array<number> = [4, 5, 6];

console.log("arrays?", listLetter, listNumber);
console.log("2nd form arrays?", list2ndLetter, list2ndNumber);

//declaring a tuple type?
let demoTuple: [string, number];
demoTuple = ["hi", 1];
//demoTuple = [1, "hello"]; //sorry do you need the equal format of demoTuple
console.log("tuple?", demoTuple);

//Enums!
enum Color {Red, Blue, Yellow};
let c:Color = Color.Red;
console.log("c type Color?", c); //why 0?, beacuse Red don't have a value.

enum ColorWithValues {Red=10, Blue=20, Yellow};
let cValue:ColorWithValues = ColorWithValues.Red;
console.log("cValue type Color?", cValue); //why 10?, beacuse Red have a value.

let cOtherValue: string = Color[0];
console.log("cOtherValue type Color?", cOtherValue); //returns the key name.

//any! where?
let aceptAll: any = 4;
aceptAll = 2;
console.log("aceptAll number, cool!", aceptAll);
aceptAll = "he he xD";
console.log("aceptAll string, what?", aceptAll);

//an empty object
let oneObject: Object = {};
console.log("oneObject!", oneObject);

//an generic array
let listAceptAll: any[];
listAceptAll = [1, "a"];
console.log("listAceptAll!", listAceptAll);

//oh come on! void? void opposite to any, so:
let alone: void = undefined;

function meee(): void{
    console.log("return some from here will kill you, because can return nothing :/, and yes still be undefined once executed");
}
meee();

//getting lengths!
let stringYeah: string = "Yeah! awesome";
let lengthFromYeah: number = (<string>stringYeah).length;
console.log("lengthFromYeah!", lengthFromYeah);

let otherForm: number = (stringYeah as string).length;
console.log("otherForm lengthFromYeah!", otherForm);
