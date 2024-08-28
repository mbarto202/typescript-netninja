// const character = "luigi";
// console.log(character);

// const inputs = document.querySelectorAll("input");
// console.log(inputs);

// inputs.forEach((input) => {
//   console.log(input);
// });
//-----------------------------------------

// let character = "mario";
// let age = 30;
// let isBlackBelt = false;

// //character = 20;
// character = "luigi";

// //age = 'yoshi';
// age = 40;

// //isBlackBelt = 'yes';
// isBlackBelt = true;

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };

// console.log(circ(7.5));
//---------------------------------------------

// // arrays---
// let names = ["luigi", "mario", "yoshi"];
// names.push("toad");
// //names.push(3);
// //names[0] = 3;

// let nums = [1, 2, 3];
// //nums.push('shuan');

// let mixed = ["ken", 1, "mike", 2, 3];
// mixed.push("rachel");
// mixed.push(4);
// mixed[0] = 4;

// // objects---
// let ninja = {
//   name: "michael",
//   belt: "black",
//   age: 25,
// };

// ninja.age = 26;
// //ninja.name = 2;

// ninja = {
//   name: "rachel",
//   belt: "white",
//   age: 22,
//   //skill: []
// };
//------------------------------------------

// // explicit types-------
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// //age = 'luigi';
// age = 30;

// //isLoggedIn = 25;
// isLoggedIn = false;

// // arrays-----
// let ninjas: string[] = [];
// ninjas.push("mike");

// // union types------
// let mixed: (string | number)[] = [];
// mixed.push(2);
// mixed.push("barto");
// //mixed.push(false);

// let uid: string | number;
// uid = "123";
// uid = 123;

// // objects--------
// let ninjaOne: object;
// ninjaOne = { name: "miguel", age: 30 };

// let ninjaTwo: {
//   name: string;
//   age: number;
//   belt: string;
// };

// ninjaTwo = { name: "mario", age: 20, belt: "black" };
//------------------------------------------------

// let age: any = 25;

// age = true;
// console.log(age);
// age = {name: 'luigi'};
// console.log(age);

// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// let ninja: {name: any, age: any};

// ninja = {name: 'yoshi', age: 25};
// console.log(ninja);

// ninja = {name: 25, age: 'toad'};
// console.log(ninja);
//----------------------------------------------------
// Functions---------

// let greet: Function;

// greet = () => {
//     console.log('Hello, again')
// }

// const add = (a: number, b: number, c: number | string = 10): void => {
//     console.log(a + b);
//     console.log(c);
    
// }

// add(5,10, 20)

// const minus = (a: number, b: number) => {
//     return a - b;
// }

// let result = minus(2,1);
// console.log(result);
