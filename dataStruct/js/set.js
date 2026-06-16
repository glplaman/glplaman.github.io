const set = new Set()
set.add(1)
set.add('hi,there.')
set.add({ id: 1001, url: 'glplaman.github.io' })

let size = set.size
let val = set.has(1)

for (item of set)
  console.log(item);


console.log('done');