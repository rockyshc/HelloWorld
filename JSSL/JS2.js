/*
”^\\d+$” //非负整数（正整数 + 0）
“^[0-9]*[1-9][0-9]*$” //正整数
“^((-\\d+)|(0+))$” //非正整数（负整数 + 0）
“^-[0-9]*[1-9][0-9]*$” //负整数
“^-?\\d+$” //整数
“^\\d+(\\.\\d+)?$” //非负浮点数（正浮点数 + 0）
“^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$” //正浮点数
“^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$” //非正浮点数（负浮点数 + 0）
“^(-?\\d+)(\\.\\d+)?$” //浮点数
*/


//Recursive function
function fibonacci(n) {
    if (isNaN(n)){
        return "Not a number. Please input a positive integer"
    }else if(n==0 || n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
var number = prompt('Please give me the number of fibonacci number:');
console.log(fibonacci(number));



/*
//Loop function
var n=parseInt(prompt('请输入一个数字'));
var a1=1;
var a2=1;
var a3=0;
for(var i=2;i<=n;i++){//因为前两个数都是1，所以要从i=2开始，就是前两个数的1+1=2，i的初始值其实是第三个数
    a3=a1+a2;//第三个数等于第一个数加上第二个数
    a1=a2;//第一个数就变成了之前的第二个数
    a2=a3;//第二个数就变成了刚刚的第三个数
}
console.log(a3);
//使用for循环写出斐波那契数列
*/

