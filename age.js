function age(dateDeNaissance) {
    dateDeNaissance = new Date(dateDeNaissance);
    return Math.floor((new Date().getTime() - dateDeNaissance.getTime()) / 31536000000);
}

var baliseAge = document.getElementById("age");
var dateDeNaissance = baliseAge.getAttribute("datetime");
var monAge = age(dateDeNaissance);
baliseAge.innerHTML = monAge + " ans";
