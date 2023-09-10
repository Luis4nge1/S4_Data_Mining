var breathing_problem = 0
var fever = 0
var dry_cough = 0
var sore_throat = 0
var running_nose = 0
var asthma = 0
var chronic_lung_disease = 0
var headache = 0
var heart_disease = 0
var diabetes = 0
var hyper_tension = 0
var fatigue = 0
var gastroinstestinal = 0
var abroad_travel = 0
var contact_with_covid_patient = 0
var attended_large_gathering = 0
var visited_public_exposed_places = 0
var family_working_in_public_exposed_places = 0
var wearing_masks = 0
var sanitization_from_market = 0

function mostrarDiv(id) {
    // Obtener todos los elementos con la clase "miDiv"

    var divinicial = document.getElementById('pregunta1');
    divinicial.style.display = 'none';

    var divs = document.getElementsByClassName('card-body');

    // Ocultar todos los divs
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Mostrar el div con el ID especificado
    var divMostrar = document.getElementById(id);
    divMostrar.style.display = 'block';
}