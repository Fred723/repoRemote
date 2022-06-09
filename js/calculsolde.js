var prixProduit = prompt ("Entrer le prix initial du produit");
var remiseProduit = prompt("Entrer le pourcentage de remise");

function calculSolde(prixInitial, remise){
    var prixFinale = prixInitial*(100 - remise) / 100;
    // var prixFinale = prixInitial*remise / 100;

    alert ("Le prix finale est "+prixFinale + "€");

    var gain = prixInitial - prixFinale;
    alert("Votre remise est de " + gain + "€");
}

calculSolde(prixProduit, remiseProduit);