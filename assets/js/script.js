var validation = document.getElementById('valide');
validation.addEventListener('click', f_valid);
function f_valid() {
// Déclaration des variables
var Foot = document.getElementById('Foot').value;
var Year = document.getElementById('Year').value;
// déclaration de la variable qui affichera le resulta de Foot % Year.
var result = ((Foot * 2 + 5) * 50) - Year + 1769;
alert(result);
}
