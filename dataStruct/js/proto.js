const obj = {}
const arr = []
// arr.__proto__==Array.prototype
// arr.__proto__.__proto__==Object.prototype
// arr instanceof Array
// arr instanceof Object
const fn = () => { }
// fn.__proto__==Function.prototype
// fn.__proto__.__proto__===Object.prototype
// fn instanceof Function
// fn instanceof Object


const istanceOf = (ins, obj) => {
  let p = ins
  while (p) {
    if (p == obj.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}
console.log('done');


var foo = {},
  F = function () { };

Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a); // value a
console.log(foo.b); //undefined

console.log(F.a); // value a
console.log(F.b); // value b