
function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    var divHeader = document.getElementById('output');
    divHeader.innerHTML = "";
    var weight = document.getElementById("w1").value;
    var reps = document.getElementById("r1").value;
    if(Number.isInteger(weight) && Number.isInteger(reps)) {
        max = calculateMax(weight,reps);
        max = Math.floor(calculateMax(weight,reps));
        var outputmax = document.createTextNode("Estimated One Rep Max " + max + " lbs") ;
        var spanHeader = document.createElement('span');
        spanHeader.appendChild(outputmax)
        divHeader.appendChild(spanHeader);
    }
    else {
        alert("Please enter a integer");
    }
    
    return false;
}

var form = document.getElementById('form');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

function calculateMax(weight,rep) {
    max = weight*(1 + rep/30);
    return max;
}