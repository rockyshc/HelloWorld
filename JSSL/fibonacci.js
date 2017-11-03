//https://segmentfault.com/a/1190000007115162

//If not positiveInteger return false
function isPositiveInteger(str) {
    //return /^\+?(0|[1-9]\d*)$/.test(str);
    //TODO need to check it
    var n = Math.floor(Number(str));
    return String(n) === str && n > 0;
}

function checkInput(input){
    if (isNaN(input)){
        console.log("Not a number. Please input a positive integer. ");
    }else if(input === null){
        console.log("Your input is null");
    }else if(!isPositiveInteger(input)){
        console.log("It's a number. But please input a positive integer. ");
    }
    return true;
}

//Normal Recursive function
//43 need  7742 ms  and 44 need 12557 ms 46 need 34146 ms
function fibonacciR(n) {
    if (n==1 || n == 2){
        return 1;
    }
    return fibonacciR(n-1) + fibonacciR(n-2);
}

//Loop function
function fibonacciLoop(n){
    var n1 = 1;
    var n2 = 1;
    var n3 = 0;
    if (n==1 || n == 2){
        return 1;
    }
    for(var i = 2;i <= n;i++){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n1
}

//Enhance 1
//1500 need 1ms and result is infinity
let fibonacciRE = (function() {
    let memory = []
    return function(n) {
        if(memory[n] !== undefined) {
            return memory[n]
        }
        return memory[n] = (n === 0 || n === 1) ? n : fibonacciRE(n-1) + fibonacciRE(n-2)
    }
})()

function getFibonacci(number) {
    if (checkInput(number)){
        var start = new Date().getTime();
        var result = fibonacciLoop(number);
        var end = new Date().getTime();
        console.log("Use loop way: Your input is " + number + "\n" +
            "And fibonacci number is " + result + "\n" +
            "Need " + (end - start) + " ms!");
        var start = new Date().getTime();
        var result = fibonacciRE(number);
        var end = new Date().getTime();
        console.log("Use recursion enhance way: Your input is " + number +"\n" +
            "And fibonacci number is " + result + "\n" +
            "Need " + (end - start) + " ms!");
    }
}

function getFibonacciBad(number) {
    if (checkInput(number) && number < 46 ){
        var start = new Date().getTime();
        var result = fibonacciR(number);
        var end = new Date().getTime();
        console.log("Use normal recursion way: Your input is " + number + "\n" +
            "And fibonacci number is " + result + "\n" +
            "Need " + (end - start) + " ms!");
    }else{
        console.log("If number more then 45 the performance will be very bed")
    }
}

//Demo
getFibonacci(3333);
getFibonacciBad(46);