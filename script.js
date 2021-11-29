//variables
var key = 5; //number being shifted
var range = 26; //leters in the alphabet
var aCode = 65; //letter "a" is for the computer
var zCode = aCode + range; //letter "z" for the computer

//get the HTML elements
var input = document.getElementById("in");
var encrypt = document.getElementById("encrypt");
var decrypt = document.getElementById("decrypt");
var output = document.getElementById("out");

encrypt.onclick = encipher;
decrypt.onclick = decipher;

function encipher() {
  var message = input.value.toUpperCase();
  output.innerHTML = "";

  for (var i = 0; i < message.length; i++) {
    var letter = message.charCodeAt(i);
    var newLetter = letter;

    if (letter >= aCode && letter <= zCode) {
      newLetter += key;

      if (newLetter >= zCode) {
        newLetter -= range;
      }
    }
    newLetter = String.fromCharCode(newLetter);
    output.innerHTML += newLetter;
  }
}

function decipher() {
  var message = input.value.toUpperCase();
  output.innerHTML = "";

  for (var i = 0; i < message.length; i++) {
    var letter = message.charCodeAt(i);
    var newLetter = letter;

    if (letter >= aCode && letter <= zCode) {
      newLetter -= key;

      if (newLetter >= zCode) {
        newLetter += range;
      }
    }
    newLetter = String.fromCharCode(newLetter);
    output.innerHTML += newLetter;
  }
}