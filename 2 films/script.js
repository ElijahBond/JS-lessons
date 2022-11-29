

let resultOfFilms = +prompt('How much films are you seen yet?');

let personalMoviesDB = {
    count: resultOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let latterFilm = prompt('Latest film which you seen?');
let score = +prompt('How much stars you give it? / How much you assess it?');

let latterFilm2 = prompt('Latest film which you seen?');
let score2 = +prompt('How much stars you give it? / How much you assess it?');



personalMoviesDB.movies[latterFilm] = score
personalMoviesDB.movies[latterFilm2] = score2


console.log(personalMoviesDB)











console.log( NaN || 2 || undefined ) ; // 2+

console.log( NaN && 2 && undefined ); //  NaN+
 
console.log( 1 && 2 && 3 ); // 3+
 
console.log( !1 && 2 || !3 );  //  false+
 
console.log( 25 || null && !3 );  // 25+
 
console.log( NaN || null || !3 || undefined || 5); // 5+
 
console.log( NaN || null && !3 && undefined || 5);  // 5+
 
console.log( 5 === 5 && 3 > 1 || 5); // -


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {  // (false || 2)
   console.log('Done!')
}

// console.log( hamburger === 3 && cola || fries === 3 && nuggets )


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {  // (false || false)
   console.log('Done!')
}




let result = '';
const length = 7;

for (let i = 1; i < length; i++){
   
    for (let j = 0; j < i; j++){
        result += '*';
    }

    result += '\n';
}

console.log(result)




