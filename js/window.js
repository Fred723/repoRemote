// myWindow = window.open("", "", "width=300, height=300");
// myWindow.moveTo(100, 300);
// myWindow.resizeTo(700, 700);
myWindow = window.open("", "", "width=200, height=200");
var myWindowWidth = prompt("Entrer la taille (largeur)");
var myWindowHeight = prompt("Entrer la taille (hauteur)");
myWindow.resizeTo(myWindowWidth, myWindowHeight);

myWindow.moveTo(600, 300);