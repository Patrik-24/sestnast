let movies = [];

console.log("******* Aktuálny zoznam filmov *******")
function getInputValue() {
  let namee = document.getElementById("nazov").value;
  let year = document.getElementById("rok").value;
  let actors = document.getElementById("herci").value;
  
  
  
  let movie = {
    "name": namee,
    "year": year,
    "artor": actors
  };
  movies.push(movie);

  console.log(movies)
}

function odstranPosledny() {
  movies.pop();
  console.log(movies)
}
function deleteAll() {
  movies.length = 0;
  console.log(movies);
}