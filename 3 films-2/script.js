let resultOfFilms = +prompt('How much films are you seen yet?');

let personalMoviesDB = {
    count: resultOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


quest: for (let i = 0; i < 2; i++){
    let latterFilm = prompt('Latest film which you seen?');
    let score = +prompt('How much stars you give it? / How much you assess it?');

     if( latterFilm != null && score != null && latterFilm != '' && score != '' && latterFilm.length < 50 ){
        personalMoviesDB.movies[latterFilm] = score
     } else {
        i--
     }


    
}

if (personalMoviesDB.count < 10){
    console.log('WOW you seen too litle movie')
} else if ( personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log('you classic watcher')
} else if ( personalMoviesDB.count > 30) {
    console.log('you kinoman')
} else {
    console.log('error :(')
}

console.log(personalMoviesDB)




// let num = 10;

for (let i = 1; i < 2; i++){
  var  num = 15;
    console.log(i);
};

console.log(num)