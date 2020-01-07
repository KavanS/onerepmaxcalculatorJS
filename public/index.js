
function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    var weight = document.getElementById("w1").value;
    var reps = document.getElementById("r1").value;
    max = calculateMax(weight,reps);
    alert("Estimated One Rep Max is " + max);
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