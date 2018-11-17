let Node = function () {
    this.keys = new Map()
    this.end = false
    this.setEnd = function () {
        this.end = true
    }
    this.isEnd = function () {
        return this.end
    }
}

let Trie = function () {

    this.root = new Node()

    this.add = function (input, node = this.root) {
        if (input.length == 0) {
            node.setEnd()
            return
        }
        const firstChar = input[0]
        if (!node.keys.has(firstChar)) {
            node.keys.set(firstChar, new Node())
        }
        this.add(input.substr(1), node.keys.get(firstChar))
    }

    this.hasWord = function (word) {
        let node = this.root
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false
            }
            node = node.keys.get(word[0])
            word = word.substr(1)
        }
        // final char of the input word
        return node.keys.has(word) && node.keys.get(word).isEnd()
    }

    this.getWords = function () {
        let words = [];
        let walk = function (node, acc) {
            //if node has no children (= here, acc is a complete word)
            if (node.keys.size === 0) {
                if (acc.length > 0) {
                    words.push(acc)
                }
                return    
            }
            
            
            // acc can be a word even if node has children
            if (node.isEnd()) {
                words.push(acc)
            }
            // if node has children, dive into the deep
            for (let char of node.keys.keys()) {
                walk(node.keys.get(char), acc.concat(char))
            }
        }
        walk(this.root, "")
        return words
    }
}

module.exports = {
    Trie
}
