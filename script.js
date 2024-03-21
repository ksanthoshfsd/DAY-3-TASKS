let obj1 = {name:"person 1",age:5};
let obj2 = {age:5,name:"person 1"};
let string1 =JSON.stringify(obj1,Object.keys(obj1).sort())
console.log(string1)
let string2 =JSON.stringify(obj2,Object.keys(obj2).sort())
console.log(string2)