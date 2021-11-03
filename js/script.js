console.log("9292");

/* ik heb de knop van een van de knoppen gelecteerd */
var articleButton = document.querySelector(".button");
var text = document.querySelector("div");  

function dropDown(){
    text.classList.toggle("meertext");

}

articleButton.addEventListener("click" , dropDown);