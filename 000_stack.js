//노드 선언
function node(next, value) {
    this.next = next;
    this.value = value;
}

//스택 함수
function stack(data) {

    var __head = null;
    var __curr = null;

    for (var i in data) {


        if (this.__head == null) {
            //console.log("head  =  " + data[i]);
            this.__head = new node(null, data[i]);
        } else {
            //console.log("else  =  " + i);
            this.curr = new node(this.__head, data[i]);
            this.__head = this.curr;
        }
    }
}

//노드에 값을 넣는다.
stack.prototype.push = function (data) {
    for (var i in data) {
        if (this.__head == null) {
            this.__head = new node(null, data[i]);
        } else {
            this.curr = new node(this.__head, data[i]);
            this.__head = this.curr;
        }
    }
};

//가장 최근 노드의 값을 출력한다. 노드는 유지한다.
stack.prototype.peak = function () {

    console.log("Call peak & output value = " + this.__head.value);
}

//가장 최근 노드를 토해낸다.
stack.prototype.pop = function () {
    if (this.__head == null) {
        console.log("empty");
    } else {
        this.curr = this.__head.next;
        console.log(this.__head.value);
        this.__head = this.curr;
    }
}

//모든 노드의 값을 출력한다.
stack.prototype.popAll = function () {

    while (true) {
        if (this.__head == null) {
            console.log("empty");
            break;
        } else {
            this.curr = this.__head.next;
            console.log(this.__head.value);
            this.__head = this.curr;
        }

    }
}

//test code
var stack = new stack([1, 2, 3, 4, 5]);
stack
stack.push([6, 7, 8]);
stack.peak();
stack.pop();
stack.popAll();
