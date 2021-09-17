function fahrenheitCalc(celsiusVal) {
    let fahrenFormula = ((9*celsiusVal/5)+32);
    return fahrenFormula.toFixed(1);
}


document.getElementById("convert").onclick = function () {
   let celsiusVal = document.getElementById("temp_celsius").value;

   if (document.getElementById("temp_celsius").value == false) {
        alert("There is no temperature value provided!");
    } else {
        var fahr1 = fahrenheitCalc(celsiusVal);
        document.getElementById("temp_fahr").innerHTML = fahr1;
    }
}
