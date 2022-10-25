

let resultOfFilms = +prompt('How much films are you seen yet?');

let personalMoviesDB = {
    count: resultOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};


let latterFilm = prompt('Latest film which you seen?');
let score = +prompt('How much stars you give it? / How much you assess it?');

let latterFilm2 = prompt('Latest film which you seen?');
let score2 = +prompt('How much stars you give it? / How much you assess it?');



personalMoviesDB.movies[latterFilm] = score
personalMoviesDB.movies[latterFilm2] = score2


console.log(personalMoviesDB)