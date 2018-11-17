const { Trie } = require('./trie')

const trie = new Trie()

trie.add("ball")
trie.add("bat")
trie.add("doll")
trie.add("dork")
trie.add("do")
trie.add("dorm")
trie.add("send")
trie.add("sense")

console.log(trie.hasWord("bat"))
console.log(trie.hasWord("do"))
console.log(trie.hasWord(":)"))
console.log(trie.getWords())
