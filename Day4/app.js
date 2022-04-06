let calc = document.querySelector("#calc");
let clear = document.querySelector("#clear");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
// let height_new = parseFloat(height)
// let weight_new = parseFloat(weight)
let p = document.querySelector("#BMI");
calc.addEventListener("click", calculate)
clear.addEventListener("click", clearfunc)

function calculate() {
    let BMI = Math.round(weight.value / Math.pow(height.value, 2) * 10000);
        
    //Display result of calculation
    p.innerText = Math.round(BMI * 100) / 100;

}

function clearfunc() {
    height.value = "";
    weight.value = "";
    p.innerHTML = "";
}

