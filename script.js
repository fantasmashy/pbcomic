const div = document.createElement('div');
var globes = [];
var gloveCounter = document.getElementById("globeCounter");

document.addEventListener("DOMContentLoaded", function(){

    newText(0,0,"OMG VORE\nOwO");

    console.log(":)");
})

function newText(px,py,txt) {
    var container = document.getElementById("globePoint")

    globes.push(document.createElement("span"));
    var tempText = globes[globes.length-1];
    window.d = new Draggable(tempText);

    tempText.classList.add("textglobe");
    tempText.textContent = txt;

    tempText.setAttribute("contenteditable", "true");
    tempText.setAttribute("globeNumber", globes.length-1);

    tempText.style.left = px.toString()+"px";
    tempText.style.top = py.toString()+"px";
    tempText.style.width = "auto";
    tempText.style.height = "auto";
 
    container.appendChild(tempText);

    updateGlobes();
}

function updateGlobes(){
    gloveCounter.textContent = globes.length;
}
