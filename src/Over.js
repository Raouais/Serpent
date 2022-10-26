const Over = (function(){

    function snakeOver(end,element){
        element.classList.remove("colorBlue");
        element.classList.add("colorRed");
        element.innerHTML = "Vous avez perdu ! Appuyer sur espace pour recommencer une partie.";
        if(end){
            location.reload();
        }
    }

    return{
       snakeOver : snakeOver
    }

})();


