
window.onload = function (){
	var darkStyle=false;
    console.log("window loaded");

    var cards = document.getElementsByClassName("nav-item");
	for(var i = 0; i < cards.length; i++) {
		card[i].addEventListener("click", display);
	}

	document.getElementById("btn-grid").addEventListener("click", displayGrid, {
	  });

	  document.getElementById("btn-theme").addEventListener("click", changeTheme,{
	});
}


function showAllTabs(event) {
    console.log("Show all tabs");
    updateCurrent(event.currentTarget);

    document.querySelectorAll(".hidden").forEach(function(article){
        article.classList.remove("hidden");
    })
}

function showSingleTab(event) {
    let name = event.currentTarget.id.replace('-link','');
	console.log(name);
    updateCurrent(event.currentTarget);
    let articles = document.getElementsByClassName("db-article");
    for(let article of articles){
        if(article.id===name){
            article.classList.remove("hidden");
        }else{
            article.classList.add("hidden");
        }
    }
}

function updateCurrent(target) {
    let nav_items = document.getElementsByClassName("nav-item");
    for(let nav_item of nav_items){
        if(target.id===nav_item.id){
            nav_item.classList.add("current-nav");
        }else{
            nav_item.classList.remove("current-nav");
        }
    }

}


function displayGrid() {
	console.log("Se ejecuta displayGrid()");
	let section=document.body.getElementsByTagName("section")[0];
	if(section.classList.contains("grid-display")){
		console.log("Quitar grid");
		section.classList.remove("grid-display")
	}
	else{
		console.log("Poner grid display");
		section.classList.add("grid-display")
	}
	
}


function changeTheme() {
	console.log("Se ejecuta changeTheme()");
	if(document.documentElement.classList.contains("dark-styled")){
		console.log("Poner en color");
		document.documentElement.classList.remove("dark-styled")
		/*document.body.classList.remove("dark-styled")
		let articles =document.body.getElementsByTagName("article")

		for(let i=0; i < articles.length; i++){
			articles[i].classList.remove("dark-styled");
		}*/
	}
	else{
		console.log("Cambiar a dark");
		document.documentElement.classList.add("dark-styled")
		/*document.body.classList.add("dark-styled")
		let articles =document.body.getElementsByTagName("article")

		for(let i=0; i < articles.length; i++){
			articles[i].classList.add("dark-styled");
		}*/
	}
}

/*
function mostrarTodo(){
    console.log("Mostrando todo")
	var db = document.getElementById("db");
	var dbz = document.getElementById("dbz");
	var dbgt = document.getElementById("dbgt");
	db.style.display = "block";	
	dbz.style.display = "block";	
	dbgt.style.display = "block";	
}
function mostrarDb(){
    console.log("Mostrando db")
	var db = document.getElementById("db");
	var dbz = document.getElementById("dbz");
	var dbgt = document.getElementById("dbgt");	
	db.style.display = "block";	
	dbz.style.display = "none";	
	dbgt.style.display = "none";	
}
function mostrarDbz(){
    console.log("Mostrando dbz")
	var db = document.getElementById("db");
	var dbz = document.getElementById("dbz");
	var dbgt = document.getElementById("dbgt");	
	db.style.display = "none";	
	dbz.style.display = "block";	
	dbgt.style.display = "none";	
}
function mostrarDbgt(){
    console.log("Mostrando dbgt")
	var db = document.getElementById("db");
	var dbz = document.getElementById("dbz");
	var dbgt = document.getElementById("dbgt");	
	db.style.display = "none";	
	dbz.style.display = "none";	
	dbgt.style.display = "block";	
}
*/