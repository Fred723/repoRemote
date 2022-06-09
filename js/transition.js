document.getElementById("title").addEventListener("click", changeTextColor);

function changeTextColor(event){
    event.target.innerHTML = "Oooups";
    event.target.style.color = "blue";
    event.target.style.transition ="all 1s ease-out";
    // event.target.style.transform = "rotate(-25deg)";
    event.target.style.transform = "translateX(100px) translateY(300px) rotate(-25deg)";

    document.getElementById("lorem").style.color = "red";

}