// document.getElementById("titlePrimary").onclick = changeText;
// document.getElementById("titlePrimary").onmouseover = changeText;
// document.getElementById("titlePrimary").onmouseout = changeText2;

// function changeText(event){
//     event.target.innerHTML = 'Oooooops !'
// }
// function changeText2(event){
//     event.target.innerHTML = "Click on this text !"
// }

// function mDown(event){
//     var element = event.target;
//     element.style.backgroundColor = "red";
//     element.innerHTML = "Click down !";
// }
// function mUp(event){
//     var element = event.target;
//     element.style.backgroundColor = "violet";
//     element.innerHTML = "Click up !";
// }
// document.getElementById("myDiv").onmousedown = mDown;
// document.getElementById("myDiv").onmouseup = mUp;

// function mOver(obj){
//     obj.innerHTML = "Thank you !";
// }
// function mOut(obj){
//     obj.innerHTML = "Mouse Over Me !"
// }

// var userName = prompt("Entrer votre nom ");

// document.getElementById("title").onclick = changeColor;

// function changeColor(event){
//     event.target.innerHTML = "Merci d'avoir cliqué " +userName;
//     event.target.style.color = "green";
// }
document.getElementById("orange").onmouseover = alertMerci;

function alertMerci(event){
    var nomUser = prompt("Entrer votre nom");
    alert("Merci "+nomUser+" d'avoir survollé le carré");
}

