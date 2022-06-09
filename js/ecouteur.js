// document.getElementById("title").addEventListener("click",function(){
//     alert("Vous avez cliqué !");
// });

function cliqueAlert(){
    alert("Vous avez cliqué !");
}

document.getElementById("title").addEventListener("click",cliqueAlert);

document.getElementById("arret").addEventListener("click",stopEvenement);

function stopEvenement(){
    document.getElementById("title").removeEventListener("click",cliqueAlert);
}