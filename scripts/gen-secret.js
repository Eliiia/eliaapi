const x = 128;
const ascii = '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
let out = "";

for(let i = 0; i < x; i++) {
    out += ascii[Math.floor(Math.random() * ascii.length)];
}

console.log(out)