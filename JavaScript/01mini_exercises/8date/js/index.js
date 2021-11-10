function createDateTable(){

    
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var day= today.getDay();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(date+" "+day+" "+time);

    var body = document.createElement("body");
    var newUl = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    
    li1.innerHTML = date;
    li2.innerHTML = day;
    li3.innerHTML = time;
    newUl.appendChild(li1);
    newUl.appendChild(li2);
    newUl.appendChild(li3);
    body.appendChild(newUl);
}