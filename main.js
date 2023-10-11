// if statements



function main(){
    var input = document.getElementById("inputColor");
    var color = input.value; 
    var lowerColorName = color.toLowerCase();

    if(lowerColorName == "grün"){
    alert("du darfst fahren")
    }
    else if(lowerColorName == "gelb"){
        alert("du darfst anfahren oder musst bremsen")
    }
    else if(lowerColorName == "rot"){
        alert("du musst halten")
    }
    else{
        alert("keine gültige Ampel-Farbe eingetragen")
    }
}