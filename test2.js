function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(x) {
  for (var i = 0; i < x; i++) {
    console.log(" *");
  }
}
console.log(buildTriangle(10));

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(
  function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  },

  "Finding Nemo"
);
