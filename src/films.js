// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(array => array.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director = "Francis Ford Coppola") {
  let newArray = array.filter(pelicula => pelicula.director == director);
  //console.log("EXERCICE 2 ->", newArray);
  return newArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director = "Christopher Nolan") {
  let directores = array.filter(pelicula => pelicula.director == director)//filtro por nombre del director
  let promedio = directores.reduce((total, actual) => total + actual.score, 0); //sumo el score de directores//let posicion = directores.findIndex(index => index.score == 8.5) //para ver la posicion dnd se encuentra ese objeto
  let totalIndices = directores.filter(title => title.director = director).length;//da el total de objetos 4
  let average = promedio/totalIndices;
  //console.log(average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result = array.map(element => element.title).sort();
  if(result.length > 20) {result.length = 20;}
  //console.log(result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = array.map(element => element.year).sort();//Ordenamos por año
  //console.log(result)
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category = "Crime") { //No puedo pasar como parametro la categoria
  let categoria = array.filter(element => {
    if(isNaN(element.score)); 
    else return element.genre.includes(category);//Filtra por categoria de pelicula
  });
  const counter = categoria.reduce((previo, actual) => previo+actual.score, 0)//Suma el score de la categoria elegida
  const total = Number((counter/categoria.length).toFixed(2));
  //console.log(total)
  return total;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const duracionMin = array.map(element => { 
    //Uso un operador ternario para dividir la duracion de cada pelicula en array de strings
    const sizeDuration = element.duration.split(' ').length //para ver el tamaño de la propiedad duration
    const horas = parseInt(element.duration.split(" ")[0])//pongo las horas de duracion en minutos
    const minutos = parseInt(element.duration.split(" ")[1])//pguardo en esta variable los minutos
    const durationMovie = sizeDuration == 2 ? horas*60 + minutos : horas*60; //operador ternario, 
    element = {...element} 
    element.duration = durationMovie
    return element
  });
  //console.log(duracionMin)
  return duracionMin;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, anyo) {
  anyo = 1994;
  const resultado = array.filter(element => element.year === anyo);
  const bestMovie = resultado.sort(element => element.year);
  console.log(bestMovie[0]);
  return bestMovie;
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
