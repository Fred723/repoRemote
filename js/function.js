var i = 5;
var prixProduit = prompt("Entrer le prix :");
var nomProduit = prompt("Entrer le nom produit :");
var remiseProduit = prompt("Entrer le remise produit :");

function reduction(prix, nom, remise)
{
    var remiseTotal = prix - remise;
    alert(remiseTotal);
    alert(nom);
}
// alert(i);
reduction(prixProduit, nomProduit, remiseProduit);