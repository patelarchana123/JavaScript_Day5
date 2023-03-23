
// const names = ["Archana","Drshti","riya","diya","jaitry","Heer"];
// console.log(names);
// let name = names[0]
// console.log(name);
// for (let index = 0; index < names.length; index++) {
//     const element = names[index];
//     console.log(element);   
// }

// toString method
// let str = names.toString();
// console.log(str);

// join() method
// let str2 = names.join("-");
// console.log(str2);

// Push() method
// let name1 = names.push("Krupali");
// console.log(name1);
// console.log(names);

// Pop() method
// let name2 = names.pop();
// console.log(name2);
// console.log(names);

// //unshift() method
// let name3 = names.unshift("krupali");
// console.log(name3);
// console.log(names);

//shift() method
// let name4 = names.shift();
// console.log(name4);
// console.log(names);

// splice Method
// let name5 = names.splice(2,0,"Krupali");
// console.log(name5);
// console.log(names);

// let name6 = names.splice(2,1);
// console.log(name6);
// console.log(names);

// slice Method
// let name7 = names.slice();
// let name8 = names.slice(3);
// console.log(name7);
// console.log(name8);

//concat() Method
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// console.log(array3);
// console.log(array3.length);

//Flat Method
// const myArr = [[1,2],["arcahna","riya"],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

//sort  &  reverse Method
//  const newnames = names.sort();
// const newnames1 = names.reverse();
//  console.log(newnames);
//  console.log(newnames1);

// spread operator
// Sum = (a,b,c) => console.log(a+b+c) ;
// let Arr = [1,2,3];
// Sum(...Arr);

// Indexof Method & lastIndexof & includes Method
// let text = "Hello world, welcome to the universe Hello world";
// let result = text.indexOf("world");
// console.log(result);
// let result1 = text.lastIndexOf("world");
// console.log(result1);
// let result2 = text.includes("world");
// console.log(result2);

//find method 
let data = [10,20,7,50,1,100];
let output = data.find((item)=>item<10);
console.log(output);

let data1 = [
    { id:1},
    {id:2},
    {id:100},
    {id:102},
    {id:50}];
let output2 = data1.find((item)=>item.id>50);
console.log(output2);

//findIndex method 
let output1 = data.findIndex((item)=>item<10);
console.log(output1);

let output3 = data1.findIndex((item)=>item.id>50);
console.log(output3);

//JSON Object
// const obj ={
//     "firstname":"Archana",
//     "lastname":"Patel",
//      age: 21,
// }

// const Myobj = JSON.stringify(obj);
// console.log(Myobj);
// console.log(JSON.parse(Myobj));

// const obj1={
//     a:20
// }
// const obj2={
//     a:20
// }
//  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// localStorage.setItem("lastname", "Patel");
// localStorage.getItem("lastname");