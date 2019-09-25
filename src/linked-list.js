const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        const node = new Node(data);
        
        this.length += 1;
        if (this._tail === null && this._head === null) {
            this._tail = this._head = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        return this;
    }

    head() {
        if (this.length > 0) {
            return this._head.data;
        }
        return null;
    }

    tail() {
        if (this.length > 0) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        return this.atNode(index).data;
    }

    atNode(index) {
        let searchNode = this._head;

        for (let i = 0; i < index; i += 1) {
            searchNode = searchNode.next;
        }

        return searchNode;
    }

    insertAt(index, data) {
        const node = new Node(data);
        let searchNode = this.atNode(index);

        if (searchNode === null) {
            this.append(data);
        } else if (searchNode.prev !== null) {
            searchNode.prev.next = node;
            node.prev = searchNode.prev;
            node.next = searchNode;
            searchNode.prev = node;
        } else {
            //
        }

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let sNode = this.atNode(index);

        if (this.length === 1) {
            this.clear();
        } else if (false) {
            //
        } else {
            this.length -= 1;
            [sNode.prev.next, sNode.next.prev] = [sNode.next, sNode.prev];
        }
        return this;
    }

    reverse() {
        let elem = [];

        for (let i = 0; i < this.length; i += 1) {
            elem.push(this.atNode(i));
        }

        elem.forEach((e) => [e.prev, e.next] = [e.next, e.prev]);

        [this._head, this._tail] = [this._tail, this._head];

        return this;
    }

    indexOf(data) {
        let index = 0,
            node = this._head;

        for (let i = 0; i < this.length + 1; i += 1) {
            if (node.data === data) {
                return index;
            }
            index += 1;
            node = node.next || node;
        }
        return -1;
    }
}

module.exports = LinkedList;
