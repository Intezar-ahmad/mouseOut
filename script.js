const btnElement = document.getElementById("mouseOutBtn");

btnElement.addEventListener("mouseout", function(){
    document.body.style.backgroundColor = "Yellow"
    alert("You just mouse out Text ☺")
})