'use strict';


// alert('Hello')

// const result = confirm('Are you SURE?????')

// console.log(result)



// const answer = +prompt('Do you have 18 yo??', '18');
// console.log(typeof(answer));



const answers = [];

answers[0] = prompt('Yes?');
answers[1] = prompt('No?');
answers[2] = prompt('Why?');

document.write(answers);


// console.log(answers);


const isTrue = true,
       isFalse = false;

console.log(isFalse || isTrue);

