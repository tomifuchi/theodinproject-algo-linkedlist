class LinkedListNode {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.n = 0;
    }

    //CREATING, DELETING
    append(val) {
        //Iteration if you like
        //let current = this.head;
        //while(current.next != null) {
        //    current = current.next;
        //}
        //current.next = node;

        //recursion
        function add(cur, val) {
            if(cur.next != null){
                add(cur.next, val);
            } else {
                cur.next = new LinkedListNode(val);
                return;
            }
        }

        if(this.isEmpty()) {
            this.head = new LinkedListNode(val);
        } else {
            add(this.head, val)
        }

        this.n++;
        return this.head;
    }

    prepend(val) {
        if(this.isEmpty()) {
            this.head = new LinkedListNode(val);
        }
        else {
            const newHead = new LinkedListNode(val);
            newHead.next = this.head;
            this.head = newHead;
        }

        this.n++;
        return this.head;
    }

    pop() {
        if (!this.isEmpty()) {
            let current = this.head;
            while(current.next.next != null) {
                current = current.next;
            }
            this.n--;
            current.next = null;
        } else
        return null;
    }

    insertAt(value, index) {
        if(index > -1 && index <= this.size() - 1) {
            const current = this.at(index);
            const newNode = new LinkedListNode(value);
            newNode.next = current.next;
            current.next = newNode;
            this.n++;
        }
    }
    
    removeAt(index) {
        if(index > -1 && index <= this.size() - 1) {
            const prev = this.at(index - 1);
            const current = this.at(index);
            prev.next = current.next;
            this.n--;
        }
    }

    //READING, QUERY
    isEmpty() {
        return this.head == null;
    }

    size() {
        return this.n;
    }

    tail() {
        let current = this.head;
        while(current.next != null) 
            current = current.next;
        return current;
    }

    //Assumes valid index
    at(index) {
        if(index > -1 && index <= this.size() - 1) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        } else return null
    }

    contains(val) {
        if (!this.isEmpty()) {
            let current = this.head;
            while(current.next.next != null) {
                if(current.value == val) {
                    return true;
                }
                current = current.next;
            }
            return false;
        } else
        return false;
    }
    
    find(val) {
        if (!this.isEmpty()) {
            let current = this.head;
            for(let i = 0; current != null; i++) {
                if(current.value == val) {
                    return i;
                }
                current = current.next;
            }
            return null;
        } else
        return null;
    }

    //MISC
    toString() {
        let str = '';
        let current = this.head;
        while(current != null) {
            str += `${current.value} -> `
            current = current.next;
        }
        str += 'null';
        return str;
    }
}
