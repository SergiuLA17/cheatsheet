let animals = [{ type: 'lion' }, 'tiger'];
let clones = animals.slice();

const a ={p:1}
const b ={a}
const c ={b}

Obj

c.b.a.p = 1




clones[0].type = 'bear';
clones[1] = 'sheep';

console.log(animals[0].type == clones[0].type);
console.log(animals[1] == clones[1]);

let str1 = 'lion'
let str2 = 'asd'

console.log(str1 == str2)