// Mad Libs String Project

const myStr = "     The Magic of Computers    ";
console.log(myStr.trim());

const myStr1 = "Today, every student has a computer small enough to fit into thier noun."
console.log(myStr1.replace('noun' , 'suitcase'));

let pluralNoun = "ZEBRAS".toLowerCase();
const myStr2 = "They can solve any math problem by simply pushing the computers little " + pluralNoun + ".";
console.log(myStr2);

let verb = "run".toUpperCase();
const myStr3 = `Computers can add, multiply, Divide, and ${verb}!`
console.log(myStr3);

const verbPresentTense = 'walk';
const sliceWord = verbPresentTense.slice(-1);
const hiddenWord = sliceWord.padStart(verbPresentTense.length, '@*$!');

console.log(`They can also ${hiddenWord} better than a any human.`);








