'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
  
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promo_adv = document.querySelectorAll('.promo__adv'),
          poster = document.querySelector('.promo__bg'),
          promo_genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm  = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');


    const deleteAdv = (arr) => {
        arr.forEach(i =>{
         i.remove();      
        })
    }    
    
    const makeChanges = () => {
        promo_genre.textContent = 'Драма'
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }


    const sortArr = (arr) => {
        arr.sort();
    }

    
    
    
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${film}
                <div class="delete"></div>
            </li>`;
    });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })

        })
    }    


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;


        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }

            if (favorite) {
                alert('Add favorite film')
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }


        

        event.target.reset();

    })







    deleteAdv(promo_adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);





})