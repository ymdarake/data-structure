class Node {
    constructor (element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {

    constructor () {
        this.length = 0
        this.head = null
    }

    size () {
        return this.length
    }

    isEmpty () {
        return this.length === 0
    }

    indexOf (element) {
        let index = -1
        let currentNode = this.head
        while (currentNode) {
            ++index
            if (currentNode.element === element) {
                return index
            }
            currentNode = currentNode.next
        }
        return -1
    }

    elementAt (index) {
        if (index < 0 || index + 1 > this.length) {
            return null
        }
        let currentIndex = 0
        let currentNode = this.head
        while (currentIndex < index) {
            currentNode = currentNode.next
            ++currentIndex
        }
        return currentNode.element
    }

    add (element) {
        const node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        ++this.length
    }

    addAt (index, element) {

        if (index < 0 || index > this.length) {
            return false
        }

        const node = new Node(element)
        let currentNode = this.head

        if (index === 0) {
            node.next = currentNode
            this.head = node
        } else {
            let previousNode = null
            let currentIndex = 0
            while (currentIndex < index) {
                previousNode = currentNode
                currentNode = currentNode.next
                ++currentIndex
            }
            node.next = currentNode
            previousNode.next = node
        }
        ++this.length
    }

    remove (element) {
        let currentNode = this.head
        if (currentNode.element === element) {
            this.head = currentNode.next
        } else {
            let previousNode = null
            while (currentNode.element !== element) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            if (previousNode === null) {
                return false
            }
            previousNode.next = currentNode.next
        }
        --this.length
    }

    removeAt (index) {
        if (index < 0 || index >= this.length) {
            return false
        }

        let currentNode = this.head
        if (index === 0) {
            this.head = currentNode.next
        } else {
            let previousNode = null
            let currentIndex = 0
            while (currentIndex < index) {
                previousNode = currentNode
                currentNode = currentNode.next
                ++currentIndex
            }
            previousNode.next = currentNode.next
        }
        --this.length
        return true
    }

}

module.exports = {
    LinkedList
}
