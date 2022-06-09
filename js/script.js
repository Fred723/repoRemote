'use strict';

$(document).ready(function () {
    // cacher le tableau
    $("#tableToDo").hide();
    // afficher le tableau lorsque
    // l'utilisateur appuie sur un bouton

    $("#btnToDo").click(function () {
        $("#tableToDo").show();
        $("#btnToDo").hide();
        // remplir le tableau avec un JSON
        $.get("https://jsonplaceholder.typicode.com/todos/", function (data, status) {
            //parser la data attention elle est deja parser donc utiliser le stringify
            var data = JSON.parse(JSON.stringify(data));
            var btnSupp = "<button class='btn btn-light btnSupp'>Supprimer</button>";
            data.forEach(function (dt) {
                //inserer dans le tableau
                $("#tBodyToDo").append("<tr>" +
                    "<th class='id'>" + dt.id + "</th>" +
                    "<td class='tache'>" + dt.title + "</td>" +
                    "<td class='action'>" + dt.completed + "</td>" +
                    "<td>" + btnSupp + "</td>" +
                    "</tr>");
            });
            // supprimer une ligne du tableau
            $(".btnSupp").click(function () {
                var confirmation = confirm("voulez-vous supprimer cette ligne ?");
                if (confirmation) {
                    $(this).parents("tr").remove();
                } else {}
            });
            // modification de la cellule tache
            $(".tache").click(function () {
                let change = "<td id='tdTache' class='row'><div class='col'><input type='text'id='changeTxt' class='form-control'  placeholder='modifiez la tâche'> </div><div class='col'><button id='btnChangeTache' type='submit' class='btn btn-light'>ok</button></div></td>"
                $(this).replaceWith(change);

                $("#btnChangeTache").click(function () {
                    let valeur = $("#changeTxt").val();
                    $("#tdTache").replaceWith("<td class='tache'>" + valeur + "</td>");
                    // $("#essai").text("<td class='tache'>" + valeur + "</td>").show();
                })

                // $("#essai").text(valeur).show()


            })
        });
    });
    // ajouter un ligne au tableau
    $("#btnAjou").click(function () {
        var remplir = prompt("entrez une nouvelle tâche");
        // initialisation incrémentation de l'ID
        let compteur = $("#tBodyToDo tr").length + 1;
        // ajout de la ligne
        $("#tBodyToDo").append("<tr>" +
            "<th class='id'>" + compteur +
            "<td class='tache'>" + remplir + "</td>" +
            "<td class='action'>" + "<select class='btn btn-light'> <option>Effectuée</option><option>En cours</option><option>Finie</option></select>" + "</td>" +
            "<td>" + "<button id='btnSupp' class='btn btn-light'>Supprimer</button>" + "</td>" +
            "</tr>");
        //Incrementation
        compteur += 1;
        // supprimer une ligne du tableau
        $("#btnSupp").click(function () {
            var confirmation = confirm("voulez-vous supprimer cette ligne ?");
            if (confirmation) {
                $(this).parents("tr").remove();
            } else {}
        });

        //Modification par cellule
        //modification cellule tâche


        // $(".tache").click(function () {
        //     var input = $(this).text();
        //     let modification = prompt("modifiez la tâche");
        //     $(this).text(modification);
        // });

    });


    // let change = "<div class='row'><div class='col'><input type='text' class='form-control' id='changeTxt' placeholder='modifiez la tâche'> </div><div class='col'><button id='btnEssai' type='submit' class='btn btn-light'>ok</button></div></div>"
    // $("#essai").html(change);
    // $("#btnEssai").click(function () {
    //     let valeur = $("#changeTxt").val();
    //     $('#essai').hide();
    //     $("#essai").text(valeur).show();


    // })


});