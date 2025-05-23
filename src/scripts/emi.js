function handleAmountChange()
{
     document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}

function handleYearChange(){
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}

function handleRateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}

function txtAmountChange(){
    document.getElementById("rangeAmount").value = document.getElementById("txtAmount").value;
}

function txtYearsChange(){
    document.getElementById("rangeYears").value = document.getElementById("txtYears").value;
}
function txtRateChange(){
    document.getElementById("rangeRate").value = document.getElementById("txtRate").value;
}

function CalculateClick(){
    var P = parseInt(document.getElementById("txtAmount").value);
    var N = parseInt(document.getElementById("txtYears").value) * 12;
    var R = parseFloat(document.getElementById("txtRate").value) / 12 / 100;
    var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N) - 1);
    document.getElementById("lblResult").innerHTML = "Your montly installment amount is <span class='fw-bold fs-4'>" + Math.round(EMI).toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0}) + "</span> for next " + N + " Months" ;
}

