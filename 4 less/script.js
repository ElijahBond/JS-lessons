'use strict';



// let resultOfFilms;

// function start() {
//     resultOfFilms = prompt('How much films are you seen yet?');

//     while (resultOfFilms == '' || resultOfFilms == null || isNaN(resultOfFilms)) {
//         resultOfFilms = prompt('How much films are you seen yet?');
//     }

// }

// start();



// let personalMoviesDB = {
//     count: resultOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



//  function rememberMyFilms() {
//     quest: for (let i = 0; i < 2; i++){
//             let latterFilm = prompt('Latest film which you seen?');
//             let score = +prompt('How much stars you give it? / How much you assess it?');
        
//              if( latterFilm != null && score != null && latterFilm != '' && score != '' && latterFilm.length < 50 ){
//                 personalMoviesDB.movies[latterFilm] = score
//              } else {
//                 i--;
//              }
//      }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMoviesDB.count < 10){
//         console.log('WOW you seen too litle movie')
//     } else if ( personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
//         console.log('you classic watcher')
//     } else if ( personalMoviesDB.count > 30) {
//         console.log('you kinoman')
//     } else {
//         console.log('error :(')
//     }
// }

// detectPersonalLevel();



// function showMyDB(hidden) {
//     if (hidden.privat == false) {
//         console.log(hidden)
//     }
// }

// showMyDB(personalMoviesDB);


// function writeYourGenres(db) {

//     for (let i = 1; i < 4; i++){
//         db.genres[i - 1] = prompt(`Your favorite genre number ${i}?`)
//     }    
// }

// writeYourGenres(personalMoviesDB);







// function copy(mainObj) {
//     let objCopy = {}

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }

//     return objCopy;
// }



// const num = [2, 5, 7];
// let numNew = [...num];
// console.log(num)


// console.dir([1,2,3]);





////// practical lesson 4 



let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,


    start:  function() {
        personalMoviesDB.count = prompt('How much films are you seen yet?');
    
        while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = prompt('How much films are you seen yet?');
        }
    },

    rememberMyFilms: function() {
        quest: for (let i = 0; i < 2; i++){
                let latterFilm = prompt('Latest film which you seen?');
                let score = +prompt('How much stars you give it? / How much you assess it?');
            
                 if( latterFilm != null && score != null && latterFilm != '' && score != '' && latterFilm.length < 50 ){
                    personalMoviesDB.movies[latterFilm] = score
                 } else {
                    i--;
                 }
         }
    },
    
    detectPersonalLevel: function() {
        if (personalMoviesDB.count < 10){
            console.log('WOW you seen too litle movie')
        } else if ( personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
            console.log('you classic watcher')
        } else if ( personalMoviesDB.count > 30) {
            console.log('you kinoman')
        } else {
            console.log('error :(')
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMoviesDB)
        }
    },

    toggleVisibleMyDB: function() {

        if (personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++){

            personalMoviesDB.genres[i - 1] = prompt(`Your favorite genre number ${i}?`)

            if(personalMoviesDB.genres[i - 1] == null || personalMoviesDB.genres[i - 1] == '') {
                console.log('Write again!!!!')
                i--
            };
        };



            personalMoviesDB.genres.forEach((item, index) => {
                console.log(`Favorite genre number ${index + 1} - this is ${item}`);
            })  
    }

    

};