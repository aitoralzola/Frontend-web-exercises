function countTags()
{
    console.log("Hola");
    var tagName= document.getElementById("text").value;
    console.log(tagName);
    var numTags=document.getElementsByTagName(tagName).length;
    console.log(numTags);
    document.getElementById("result").innerHTML = numTags +" "+ tagName;
}
