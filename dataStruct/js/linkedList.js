const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };

a.next = b;
b.next = c;
c.next = d;

// bianli
let p = a
while (p) {
  console.log(p.val);
  p = p.next
}

// insert
const e = { val: 'e' }
e.next = b;
a.next = e;

// del c
b.next = d
console.log('done');