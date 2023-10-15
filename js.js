'use strict';
console.log("Hello, AZIZJON")

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '')

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '')
        }
    },
    rememberMyFields: function() {
        for (let i=0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?");
            let b = prompt("На сколько оцените его?");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b
                console.log('done')
            } else {
                i--
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    },
    writeYourGenres: function() {
        for (let i=0; i < 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i+1}: `)
            if (answer == '' || answer == null) {
                i--                
            } else {
                personalMovieDB.genres.push(answer)
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index+1} - это ${item}`)
        })
    },    
}






