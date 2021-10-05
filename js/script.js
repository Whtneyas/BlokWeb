console.log("9292");

/* ik heb de knop van een van de knop gelecteerd */
var articleButton = document.querySelector(".button");
var text = document.querySelector("div");  /*de text die ik voorschijnen ook geslecteerd*/

function dropDown(){
    text.classList.toggle("meertext");

}

articleButton.addEventListener("click" , dropDown);