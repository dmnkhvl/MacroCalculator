function calculate(){
    const proteins = document.getElementById("proteins").value
    const carbs = document.getElementById("carbs").value
    const fats = document.getElementById("fats").value
    document.getElementById("output").innerHTML = (proteins * 4) + (carbs * 4) + (fats * 9)
}

function calcProteinsKcal(){
    const proteins = document.getElementById("proteins").value
    document.getElementById("proteins-kcal").innerHTML = (proteins * 4)
}

function calcCarbsKcal(){
    const carbs = document.getElementById("carbs").value
    document.getElementById("carbs-kcal").innerHTML = (carbs * 4)
}

function calcFatsKcal(){
    const fats = document.getElementById("fats").value
    document.getElementById("fats-kcal").innerHTML = (fats * 9)
}