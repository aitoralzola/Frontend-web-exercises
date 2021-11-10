function check()
{

    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if(pass1.length <10){
        document.getElementById("aviso1").innerHTML = "The password is too short";
    }
    else{
        document.getElementById("aviso1").innerHTML = "";
    }

    if(pass1==pass2){
        document.getElementById("aviso2").innerHTML = "";
    }
    else{
        document.getElementById("aviso2").innerHTML = "Both passwords are not the same";
    }
}