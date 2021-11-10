function changeStyle()
{     
    console.log("HOLA");
    var t = document.getElementById("btn-style");
    console.log(t.value);
        if(t.value == "yes"){
            console.log(t.value);
            document.getElementById("par").classList.add("styled");
            document.getElementById("par").classList.remove("non-styled");
            document.getElementById("btn-style").innerHTML = "Non style the paragraph";
            document.getElementById("btn-style").value = "no";
        }
        else{
            console.log(t.value);
            document.getElementById("par").classList.remove("styled");
            document.getElementById("par").classList.add("non-styled");
            document.getElementById("btn-style").innerHTML = "Style the paragraph";
            document.getElementById("btn-style").value = "yes";
        }
        
}