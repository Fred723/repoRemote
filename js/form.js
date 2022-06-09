function controle(event){
    var test = document.formu1.pseudo.value;
    alert("Vous avez tapé " + test);
}

function afficher(){
    var testin = document.form2.email.value;
    
    if(testin.includes('@'))
    {
        alert("It contains ! Votre mail est un mail valide");
    }
    else{
        alert("It not contains ! Votre mail est pas un mail valide");
    }

    document.form2.output.value = testin;
}