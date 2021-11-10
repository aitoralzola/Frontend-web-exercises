function changeBackground(that){
  var alt= that.alt;
  console.log(alt);
  if(alt.includes("1")){
    var ruta= document.getElementsByTagName("img")[0].getAttribute("src");
    console.log(ruta);
  }
  else if(alt.includes("2")){
    var ruta= document.getElementsByTagName("img")[1].getAttribute("src");
    console.log(ruta);
  }
  else if(alt.includes("3")){
    var ruta= document.getElementsByTagName("img")[2].getAttribute("src");
    console.log(ruta);
  }
  else{
    console.log("Error showing");
  }
  cambiarAlt(alt);
  crearImagen(ruta);
}

function crearImagen(ruta) {
  var contenedor = document.getElementById("image");
	contenedor.style.backgroundImage = "url("+ruta+")"; //"url('img_tree.png')"; 
}

function cambiarAlt(alt) {
  document.getElementById("imageText").innerHTML = alt;
}

function changeToGreen() {
  var contenedor = document.getElementById("image");
  contenedor.style.backgroundImage = "";	
  console.log("green")
}
