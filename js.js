'use strict';
console.log("Hello, AZIZJON")

/*  1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
    'Сколько фильмов вы уже посмотрели?' */ 

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 16)
console.log(numberOfFilms)

/* 2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false */ 

personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: [],
    genres: [],
    privat: false,
}

/* 3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

let movie = prompt("Один из последних просмотренных фильмов?")
let ratingOfMovie = prompt("На сколько оцените его?")

movies = {

}

movies[movie] = ratingOfMovie
console.log(movies)









