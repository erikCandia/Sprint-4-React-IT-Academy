// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(array => array.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director = "Francis Ford Coppola") {
  let newArray = array.filter(pelicula => pelicula.director == director);//filtra por director
  let arrayDirector =  newArray.map(director => director.title);//recogemos las peliculas de ese director
  //console.log("EXERCICE 2 ->", arrayDirector);
  return newArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director = "Christopher Nolan") {
  let directores = array.filter(pelicula => pelicula.director == director)//filtro por nombre del director
  let promedio = directores.reduce((total, actual) => total + actual.score, 0); //sumo el score de directores
  //let posicion = directores.findIndex(index => index.score == 8.5) //para ver la posicion dnd se encuentra ese objeto
  //let totalIndices = directores.filter(title => title.director = director).length;//da el total de objetos 8
  let peliDirector =  directores.map(director => director.title).length; //filtra las peliculas de ese Director
  let average = promedio/peliDirector;
  //console.log(average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let peliculas = array.sort(); //ordenado el array
  let ordenar = array.sort((x,y) => x.title.localeCompare(y.title));//Ordena por titulo
  let filtrarTitle = ordenar.map(titulo => titulo.title); //montamos array para que muestre solo titulos como array de strings
  
  //console.log(filtrarTitle);
  return filtrarTitle;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderYear= array.sort((x,y) => x.year - y.year);//Ordena por año el array de objetos
  newArray = [];
  orderYear = newArray;
  return newArray;
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
