const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Botones deshabilitados si no hay texto
activateBtn = () => {
  document.getElementById("encrypt-btn").disabled = document.getElementById("encrypt-text").value === "" ? true : false;
  document.getElementById("decrypt-btn").disabled = document.getElementById("decrypt-text").value === "" ? true : false;
}
//Encriptar texto
var encryptText = () => {
  var result = "";
  var text = document.getElementById("encrypt-text").value;
  for (var i = 0; i < text.length; i++) {
    var indexAlphabet = plainAlphabet.indexOf(text[i]);
    if (indexAlphabet !== -1) result = result + encryptedAlphabet[indexAlphabet];
    else result = result + text[i];
  }
  document.getElementById("decrypt-text").value = result;
}
//Desencriptar texto
var decryptText = () => {
  var result = "";
  var text = document.getElementById("decrypt-text").value;
  for (var i = 0; i < text.length; i++) {
    var indexAlphabet = encryptedAlphabet.indexOf(text[i]);
    if (indexAlphabet !== -1) result = result + plainAlphabet[indexAlphabet];
    else result = result + text[i];
  }
  document.getElementById("encrypt-text").value = result;
}

