//here is where I will code my ciphers
//I am going to attempt a double cipher

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key1 =     'zyxwvutsrqponmlkjihgfedcba';
let phrase = 'r olev xibkgltizksb';
i = 0;
result = '';

while (i < phrase.length) {
  index = alphabet.indexOf(phrase.charAt(i));
  result = result + key1.charAt(index);
  i++;
}

console.log(result);
