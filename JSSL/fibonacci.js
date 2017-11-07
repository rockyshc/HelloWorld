//https://segmentfault.com/a/1190000007115162

//If not positiveInteger return false
function isPositiveInteger(str) {
    //return /^\+?(0|[1-9]\d*)$/.test(str);
    //TODO need to check it
    var n = Math.floor(Number(str));
    return String(n) === str && n >= 0;
}

function checkInput(input){
    if (isNaN(input)){
        console.log("Not a number. Please input a positive integer. ");
        return false;
    }else if(input === null){
        console.log("Your input is null");
        return false;
    }else if(!isPositiveInteger(input)){
        console.log("It's a number. But please input a positive integer. ");
        return false;
    }else if(isPositiveInteger(input)){
        return true;
    }
}

//Normal Recursive function
//43 need  7742 ms  and 44 need 12557 ms 46 need 34146 ms
function fibonacciR(n) {
    if (n == 0 || n == 1){
        return n;
    }
    return fibonacciR(n-1) + fibonacciR(n-2);
}

//Loop function
function fibonacciLoop(n){
    var n0 = 0;
    var n1 = 1;
    var n2 = 0;
    if (n == 0 || n == 1){
        return n;
    }
    for(var i = 2;i <= n;i++){
        n2 = n0 + n1;
        n0 = n1;
        n1 = n2;
    }
    return n2
}

function getFibonacci(number) {
    if (checkInput(number)){
        var start = new Date().getTime();
        var result = fibonacciLoop(number);
        var end = new Date().getTime();
        console.log("Use loop way: Your input is " + number + "\n" +
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
getFibonacci(1);
getFibonacciBad(1);