const { LinkedList } = require('./LinkedList')

const ll = new LinkedList()
ll.add("foo")
ll.add("bar")
ll.add("baz")
ll.addAt(0, "boom")
ll.removeAt(0)
ll.removeAt(1)
console.dir(ll, { depth: null })