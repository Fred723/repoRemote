var anneeNais = prompt("Entrer votre année de naissance :");
var age = 2022 - anneeNais;


// alert("Vous avez " + age + " ans");

if(age > 16)
{
    alert("vous devez faire votre recensement");
}
else
{
    var ageJunior = 16 - age;
    alert("Vous avez  "+ageJunior+" ans pour faire votre recensement")
}
