/**
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

//Node
function Node(item) {
    this.data = item;
    this.previous = null;
    this.next = null;
}
//LinkedList
function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.insertHead = function (item) {
        //If it is the first node
        if (this.head === null) {
            this.head = new Node(item);
            this.tail = this.head;
        } else {
            var temp = new Node(item);
            temp.next = this.head;
            this.head.previous = temp;
            this.head = temp;
        }
        this.length ++;
    };

    this.insertTail = function (item) {
        //If it is the first node
        if (this.tail === null) {
            this.tail = new Node(item);
            this.head = this.tail;
        } else {
            var temp = new Node(item);
            temp.previous = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }
        this.length ++;
    };

    this.removeHead = function () {
        var returnValue = null;
        if (this.head !== null) {
            returnValue = this.head.data;
            this.length --;
            if (this.tail === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.previous = null;
            }
        }
        return returnValue;
    };

    this.removeTail = function () {
        var returnValue = null;
        if (this.tail !== null) {
            returnValue = this.tail.data;
            this.length --;
            if (this.tail === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.previous;
                this.tail.next = null;
            }
        }
        return returnValue;
    };

    this.toString = function(){
        var string = "Empty";
        if (this.length !== 0){
            var current = this.head,
                string = '';
            while (current) {
                string += current.data + (current.next ? ', ' : '. ');
                current = current.next;
            }
            return string;
        }
        return string;
    };
}

//Stack
function Stack(){
    var list = new LinkedList();

    this.push = function(item){
        list.insertHead(item);
    };

    this.pop = function(){
        return list.removeHead();
    };

    //True is empty  false is not empty
    this.isEmpty = function(){
        return list.length === 0;
    };

    this.peek = function(){
        return list.length === 0 ? "Null" : list.head.data;
    };

    this.size = function(){
        return list.length;
    };

    this.clear = function(){
        list = new LinkedList();
    };

    this.toString = function(){
        return list.toString;
    };

    this.print = function(){
        console.log("Item(s): " + list.toString());
    };
}
var demo = new Stack();
    console.log("========Push 4 node========");
    console.log("Is stack empty ? " + demo.isEmpty());
    demo.push("Node No.4");
    demo.push("Node No.3");
    demo.push("Node No.2");
    demo.push("Node No.1");
    console.log("Stack size is " + demo.size());
    console.log("Stack head is " + demo.peek());
    demo.print();
    console.log("========Pop 1 node=========");
    console.log("Pop node: " + demo.pop());
    demo.print();
    console.log("===========Clear===========");
    demo.clear();
    demo.print();
