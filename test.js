function laugh(num) {
  var string = "";
  for (i = 0; i < num; i++) {
    string = string + "ha+";
  }

  return string + "!";
}

console.log(laugh(5));
