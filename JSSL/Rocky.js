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



this.push = function(element){
    items.push(element);
};
this.pop = function(){
    return items.pop();
};
this.peek = function(){
    return items[items.length-1];
};
this.isEmpty = function(){
    return items.length == 0;
};
this.size = function(){
    return items.length;
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