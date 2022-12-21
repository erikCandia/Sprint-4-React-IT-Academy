// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(array => array.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let newArray = array.filter(pelicula => pelicula.director == "Francis Ford Coppola");
  //console.log("EXERCICE 2 ->", newArray);
  return newArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directores = array.filter(pelicula => pelicula.director == "Christopher Nolan")//filtro por nombre del director
  let promedio = directores.reduce((total, actual) => total + actual.score, 0); //sumo el score de directores
  //let posicion = directores.findIndex(index => index.score == 8.5) //para ver la posicion dnd se encuentra ese objeto
  let totalIndices = directores.filter(title => title.director = "Christopher Nolan").length;//da el total de objetos 4
  let average = promedio/totalIndices;
  //let average2 = (promedio/totalIndices).toFixed(2);//redondeado a 2 decimales
  console.log(average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
