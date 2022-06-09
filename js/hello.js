// var maVariable = "Ma premiere variable";
// alert("Hello World! "+ maVariable);

// var text = "Hello" + " " + "World !"
// var text = "Hello " + "World !"
// var text = "Hello" + " World !"
// var text = "Hello World !"
// alert(text);
// alert(maVariable);

// var nbVar=1, strVar = "Hello", boolOk = true;
// alert("Nombre : " + nbVar + " de type : " + typeof(nbVar) +
//     "\nChaine de caractère : " +strVar + " de type : " + typeof(strVar) +
//     "\nBooleen : " +boolOk + " de type : " + typeof(boolOk));

// var valueUser = prompt("Merci d'entrer une valeur !");
// alert(valueUser);

// var boolUser = confirm("Merci de confirmer ou d'annuler");
// alert(boolUser);
// var yourName = prompt("Votre nom :");
// alert("Bonjour " + yourName);

// console.log("Votre nom est " + yourName);

// document.write("bonjour");
// document.getElementById("demo").innerHTML = "Hello world !"
var textTest = "azerty";
var sln = textTest.length;
var nomUser = prompt("Quel est votre nom ?");
alert("votre nom comporte : " + nomUser.length + " charatères");

if(nomUser.length > 12){
    alert("Nom trop long");
}
else{
    alert("Votre nom a la taille correct");
}

var prenom = "Hector"
var nom = "Utrera"

var text2 = prenom.toLowerCase();
var text3 = nom.toUpperCase();
var initial = prenom.charAt(0) + nom.charAt(0);

alert (sln);
alert (text2);
alert (text3);
alert ("les initiales sont " + initial);