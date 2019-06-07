function node(next, value) {
    this.next = next;
    this.value = value;
}

function stack(data) {

    var __head = null;
    var __curr = null;

    for (var i in data) {

        if (this.__head == null) {
            console.log("head  =  " + i);
            this.__head = new node(null, i);
        } else {
            console.log("else  =  " + i);
            this.curr = new node(this.__head, i);
            this.__head = this.curr;
        }
    }
}

stack.prototype.push = fuicntion(data){
    if(typeof data)
        for(var i in data){
            this.curr = new node(this.__head, i);
            this.__head = this.curr;
        }
}
