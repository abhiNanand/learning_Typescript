// //boolean
// let isDone: boolean=false;
// console.log(isDone);
// //Number- Decimal hex binary number bigint octal bigInt
// let decimal: number = 6;
// let hex:number = 0xf00d;
// let binary: number = 0o744;
// let big: bigint = 100n;
// //String
// let color: string = "abhishek";
// color="red";
// // You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
// let fullName: string = `Bob Bobbington`;
// let age: number = 37;
// let sentence: string = `Hello, my name is ${fullName}.I'll be ${age + 1} years old next month.`;
// This is equivalent to declaring sentence like so:
// let sentence: string =
//   "Hello, my name is " +
//   fullName +
//   ".\n\n" +
//   "I'll be " +
//   (age + 1) +
//   " years old next month.";
//Array: can be written in two way
// let array1:number[] = [1,2,3];
// let array2:Array<number> =[1,2,3];
//Tuple - it allows multiple types in array
// let x: [string,number];
// //Initialize it
// x=["hello",10];//ok
// //Initialize it incorrectly
// //x=[10,"hello"];//Error
// console.log(x[0].substring(2)); //llo
//Enum
// By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
var a;
(function (a) {
    a[a["x"] = 0] = "x";
    a[a["y"] = 1] = "y";
    a[a["z"] = 2] = "z";
})(a || (a = {}));
console.log(a.x, a.y, a.z);
