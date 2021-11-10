window.onload = function(){
    let cards = document.getElementsByClassName("card");

    for(card of cards){
        card.addEventListener("click", select);
    }

    let resBut = document.getElementById("reset-btn");
    let sizeBut = document.getElementById("size-btn");

    resBut.addEventListener("click", reset);
    //sizeBut.addEventListener("click", resize);
}

function select(event){
    let cards = document.getElementsByClassName("card");
    let i = 0;
    for(card of cards){
        if(event.currentTarget.id === card.id){
            changeNav(i);
            return;
        }else{
            i++;
        }
    }
}

function changeNav(index){
    let navs = document.getElementsByTagName("a");
    navs[index].classList.add("selected-style");
}

function reset(){
    let navs = document.getElementsByTagName("a");
    for(nav of navs){
        nav.classList.remove("selected-style");
    }
}