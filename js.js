'use strict';
console.log("Hello, AZIZJON")

let numberOfFilms

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '')
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFields() {
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
}

rememberMyFields()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошло ошибка')
    }
}

detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i=0; i < 3; i++) {
        // let answer = prompt(`Ваш любимый жанр под номером ${i+1}: `)
        // personalMovieDB.genres.push(answer)
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}: `)
    }
}

writeYourGenres()

console.log(personalMovieDB.genres)





