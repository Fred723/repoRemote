// // var bjr = document.getElementById("title").innerHTML;
// // var bjrUppercase = bjr.toUpperCase();

// // document.getElementById("title").innerHTML = bjrUppercase;

// // var nomUser = prompt("Quel est votre nom ?");
// // alert("votre nom comporte : " + nomUser.length + " charatères");
// var textMin = document.getElementById("lorem").innerHTML;
// console.log(textMin);
// console.log(textMin.toUpperCase());
// var textMaj = textMin.toUpperCase();
// document.getElementById("reception").innerHTML = textMaj;

// document.getElementById("reception").innerHTML = textMin.toUpperCase();;
//savoir si la personne est un admin
var admin = false;

if(1 == 1 || 24 == 25){
    admin = true;
}
else{
    console.log("KO");
}
if(!admin ){
    alert("Vous êtes un utilisateur basique");
}
else if(admin){
    alert("Vous êtes un admin");
}