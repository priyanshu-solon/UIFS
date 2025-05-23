function amountNumber(){
    document.getElementById("nAmount").value=document.getElementById("rAmount").value;
}
function yearsNumber(){
    document.getElementById("nYears").value=document.getElementById("rYears").value;
}
function rateNumber(){
    document.getElementById("nRate").value=document.getElementById("rRate").value;
}
function amountRange(){
    document.getElementById("rAmount").value=document.getElementById("nAmount").value;
}
function yearsRange(){
    document.getElementById("rYears").value=document.getElementById("nYears").value;
}
function rateRange(){
    document.getElementById("rRate").value=document.getElementById("nRate").value;
}

function calculateEMI(){
    var P = parseInt(document.getElementById("nAmount").value);
    var N = parseInt(document.getElementById("nYears").value) * 12;
    var R = parseFloat(document.getElementById("nRate").value) / 12 / 100;
    var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N) - 1);
    document.getElementById("lblResult").innerHTML = "Your montly installment amount is <span class='fw-bold fs-4'>" + Math.round(EMI).toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0}) + "</span> for next " + N + " Months" ;
}