/*
用链表实现栈的结构
push(element)
pop()：返回栈顶元素并移除
peek(): 返回栈顶元素，但是不对它做任何修改
isEmpty()
clear()
size()
print()
toString()
*/

function Stack() {
    var element = [];
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.isEmpty = isEmpty;
    this.clear = clear;
    this.size = size;
    this.print = print;
    this.toString = toString;
}

function push(stackMember){
    this.element.push(element);
};

function pop(stackMember){
    this.element.pop();
};

function peek(){
    return element[element.length-1];
};

function isEmpty(){
    return this.size === 0;
};

function clear(stackMember){
    this.element.clear();
};

function size(){
    return element.length
};

function print(){
    console.log("Print Stack: " + this.toString());
};

function toString(stackMember){
    return this.element.toString();
};




function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else{
        return false;
    }
};




this.peek = function(){
    return items[items.length-1];
};


this.clear = function(){
    items = [];
};
this.print = function(){
    console.log(items.toString());
};
this.toString = function(){
    return items.toString();
};