/**
 *  Hello World
 */
var a1, a2, a3; //declaring a and b
    a1 = "Hello World!";  //assignment
    a2 = "你好世界!";  //assignment
console.log(a1); //Hello World!
console.log(a2); //你好世界!
console.log(a3); //null
console.log('Hello World!!');

/**
 * null and undefined
 * http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html
 */
var a3 = null, a4 = undefined;
console.log(Number(a3));//0
console.log(Number(a3+1));//1
console.log(Number(a4));//NaN
console.log(Number(a4+1));//NaN

/**
 * if
 * if (expression) {
 * statement;
 * }
 */
var a5 = true , a6 = false, a7 = 1;
if (a5){
    console.log('a5 = true')
}
if (a6){
    console.log('a6 = true')
}
if (a7 === 1){
    console.log('a7 = 1')
}

/**
 * if...else
 * if (expression) {
 *     //then
 * }else{
 *     //else
 * }
 *
 */
var a8 = 1;
if (a8 === 1){
    console.log('a8 = 1')
}else{
    console.log('a8 != 1')
}

var a9 = 3;
if (a9 === 1){
    console.log('a8 = 1')
}else if (a9 === 2){
    console.log('a9 = 2')
}else if (a9 === 3){
    console.log('a9 = 3')
}

/**
 * switch
   switch (fruit) {
  case "banana":
    // ...
    break;
  case "apple":
    // ...
    break;
  default:
    // ...
}
 */
var a10 = 1;
switch (a10) {
    case 1:
        console.log('a10 = 1');
        break;
    case 2:
        console.log('a10 = 2');
        break;
    default:
        console.log('a10 should be not 1 and 2 ');
}
//output:a10 = 1


