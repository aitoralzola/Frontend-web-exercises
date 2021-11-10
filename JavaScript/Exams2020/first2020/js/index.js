window.onload = () => {
    let main = document.querySelector("main");
    let buttons = main.querySelectorAll("button");
    document.getElementById("theme-btn").addEventListener("click", changeTheme,{});
    document.getElementById("reset-btn").addEventListener("click", waitSeconds,{});
    addEventListeners(buttons);
};

const addEventListeners = buttons =>{
    buttons.forEach(element => {
        element.addEventListener("click", closing);
    });
}

function closing(e){
    e.target.parentNode.parentNode.classList.add("hide-style");
}

    /*Change color*/

    

function changeTheme() {
    console.log("Se ejecuta changeTheme()");
        console.log("Poner en color");
        var elementos = document.getElementsByClassName("top-card")
        for(let i of elementos){
            if(i.classList.contains("dark-style")){
                console.log("Poner en color");
                i.classList.remove("dark-style");
            }       
            else{
                console.log("Cambiar a dark");
                i.classList.add("dark-style");
            }
            }

            var elementos = document.getElementsByClassName("citation")
            for(let i of elementos){
                if(i.classList.contains("dark-style")){
                    console.log("Poner en color");
                    i.classList.remove("dark-style");
                }       
                else{
                    console.log("Cambiar a dark");
                    i.classList.add("dark-style");
                }
            }
    }


    //RESET

function waitSeconds(){
    console.log("Waiting...");
    a=setTimeout(resetAll, 2000);
}

function resetAll(){
    console.log("Despues de esperar")

    var elementosTop = document.getElementsByClassName("top-card")
    for(let j of elementosTop){
            j.classList.remove("dark-style");
        } 

    var elementosBot = document.getElementsByClassName("citation")
    for(let i of elementosBot){
            i.classList.remove("dark-style");
        }   
        
        var allCards = document.getElementsByClassName("cite-card");
        for(card of allCards){
            if(card.classList.contains("hide-style")){
                card.classList.remove("hide-style");
            }
            
        }
    }


    //Selected


