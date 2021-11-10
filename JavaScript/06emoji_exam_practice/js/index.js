window.onload = function (){
    console.log("window loaded");
    
	var hideButton= document.getElementById("hide-btn");
    hideButton.addEventListener("click",waitSeconds);

    var cancelButton= document.getElementById("cancel-btn");
    cancelButton.addEventListener("click",clearTime);

    function waitSeconds(){
        console.log("Waiting...");
        hideButton.disabled = true;
        cancelButton.disabled = false;
        a=setTimeout(hideAnimals, 5000);
    }

    function hideAnimals(){
        console.log("Hidding Animals");
        
        document.getElementById("horse").style.display = "none"
        document.getElementById("monkey").style.display = "none"
    }

    function clearTime(){
        console.log("Reseteando el tiempo");
        clearTimeout(a);
        hideButton.disabled = false;
        cancelButton.disabled = true;
    }
}