var bgImg = document.getElementById("background");

var moveLeft = 0;
var moveUp = 0;

var newHeight = 300;
/*-----Functions-----*/

function urlBackgroundImage(url){
    bgImg.style.backgroundImage = "url("+url+")";
}

function changeTitle(titleInput){
    var titleElem = document.getElementsByClassName("title");
    
    titleElem.innerHTML = titleInput;
    
    document.getElementById("title").value = "";
}

function changeDescription(descInput){
    var descElem = document.getElementsByClassName("description");
    
    descElem.innerHTML = descInput;
    
    document.getElementById("description").value = "";
}

function openControlPanel(position){
    if(position == 1){
        document.getElementById("controls").style.bottom = "-90px";
    } else if (position == 2){
        document.getElementById("controls").style.bottom = "0px";
    }
}

function moveBackground(move){    
    if(move == 1){
        moveLeft = moveLeft + 10;
        document.getElementById("background").style.backgroundPositionX = moveLeft+"px";
    } else if (move == 2){
        moveLeft = moveLeft - 10;
        document.getElementById("background").style.backgroundPositionX = moveLeft+"px";
    } else if (move == 3){
        moveUp = moveUp + 10;
        document.getElementById("background").style.backgroundPositionY = moveUp+"px";
    } else if (move == 4){
        moveUp = moveUp - 10;
        document.getElementById("background").style.backgroundPositionY = moveUp+"px";
    } 
}

function sizeChange(input){    
    if(input == 1){
        newHeight = newHeight + 10;
        
        document.getElementById("background").style.height = newHeight+"px";
    } else if(input == 2){
        newHeight = newHeight - 10;
        
        document.getElementById("background").style.height = newHeight+"px";
    }
}

function changeBackgroundImage(select_img){
    if(select_img == 1){
        bgImg.style.backgroundImage = "url(img/bg1.jpg)"
    } else if(select_img == 2){
        bgImg.style.backgroundImage = "url(img/bg2.jpg)"
    } else if(select_img == 3){
        bgImg.style.backgroundImage = "url(img/bg3.jpg)"
    } else if(select_img == 4){
        bgImg.style.backgroundImage = "url(img/bg4.jpg)"
    }
}

function backgroundImage(localImg){
    if (inpBG == "horse"){
            
        } else if (inpBG == "night"){
            
        } else if (inpBG == "mountain"){
            
        } else if (inpBG.indexOf("epic") != -1){
            
        } 
}

function createNewElem(inpBG){
    var ndiv = document.createElement("div");
    var nimg = document.createElement("img");
    
    nimg.className = "newImg col-xs-12 col-sm-6 col-md-4 col-lg-3";
    nimg.src = inpBG;
    
    document.getElementById("display").appendChild(nimg);
}

/*-----Interaction-----*/

window.addEventListener("keydown", function(ev){
    if (ev.keyCode == 39){
        moveBackground(1);
    } else if (ev.keyCode == 37){
        moveBackground(2);
    } else if (ev.keyCode == 40){
        moveBackground(3);
    } else if (ev.keyCode == 38){
        moveBackground(4);
    }
})

window.addEventListener("keydown", function(ev){
    if (ev.keyCode == 107){
        sizeChange(1);
    } else if (ev.keyCode == 109){
        sizeChange(2);
    }
})

document.getElementById("menuButton").addEventListener("click", function(){
    var controlPosition = document.getElementById("controls").style.bottom;
    
    if (controlPosition == "0px"){
        openControlPanel(1);
    } else {
        openControlPanel(2);
    }
})

document.getElementById("bgInput").addEventListener("keyup", function(ev){
    inputCode = document.getElementById("bgInput").value;
    
    if(ev.keyCode == 13){
        if (inputCode == "horse"){
            changeBackgroundImage(1);
        } else if (inputCode == "night"){
            changeBackgroundImage(2);
        } else if (inputCode == "mountain"){
            changeBackgroundImage(3);
        } else if (inputCode.indexOf("epic") != -1){
            changeBackgroundImage(4);
        } else {
            urlBackgroundImage(inputCode);
        }
    }
})

document.getElementById("addComponent").addEventListener("click", function(){
    inputBackground = document.getElementById("bgInput").value;
    
    createNewElem(inputBackground);
})