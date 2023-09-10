var breathing_problem = -1;
var fever = -1;
var dry_cough = -1;
var sore_throat = -1;
var running_nose = -1;
var asthma = -1;
var chronic_lung_disease = -1;
var headache = -1;
var heart_disease = -1;
var diabetes = -1;
var hyper_tension = -1;
var fatigue = -1;
var gastroinstestinal = -1;
var abroad_travel = -1;
var contact_with_covid_patient = -1;
var attended_large_gathering = -1;
var visited_public_exposed_places = -1;
var family_working_in_public_exposed_places = -1;
var wearing_masks = -1;
var sanitization_from_market = -1;

function seleccionarRespuesta(id, valor) {
    if (id === 'pregunta2') {
        breathing_problem = valor;
    } else if (id === 'pregunta3') {
        fever = valor;
    } else if (id === 'pregunta4') {
        dry_cough = valor;
    } else if (id === 'pregunta5') {
        sore_throat = valor;
    } else if (id === 'pregunta6') {
        running_nose = valor;
    } else if (id === 'pregunta7') {
        asthma = valor;
    } else if (id === 'pregunta8') {
        chronic_lung_disease = valor;
    } else if (id === 'pregunta9') {
        headache = valor;
    } else if (id === 'pregunta10') {
        heart_disease = valor;
    } else if (id === 'pregunta11') {
        diabetes = valor;
    } else if (id === 'pregunta12') {
        hyper_tension = valor;
    } else if (id === 'pregunta13') {
        fatigue = valor;
    } else if (id === 'pregunta14') {
        gastroinstestinal = valor;
    } else if (id === 'pregunta15') {
        abroad_travel = valor;
    } else if (id === 'pregunta16') {
        contact_with_covid_patient = valor;
    } else if (id === 'pregunta17') {
        attended_large_gathering = valor;
    } else if (id === 'pregunta18') {
        visited_public_exposed_places = valor;
    } else if (id === 'pregunta19') {
        family_working_in_public_exposed_places = valor;
    } else if (id === 'pregunta20') {
        wearing_masks = valor;
    } else if (id === 'final') {
        sanitization_from_market = valor;
    }
    
    if(id != 'final'){
        mostrarDiv(id); // Llama a la función mostrarDiv para avanzar a la siguiente pregunta
    } else if (id == 'final'){
        mostrarDivRespuestaCovid();
    }
    
}

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

function mostrarDivRespuestaCovid(){

    var divs = document.getElementsByClassName('card-body');
    // Ocultar todos los divs
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    var divMostrar = document.getElementById(respuestaCovid());
    divMostrar.style.display = 'block';
}

function respuestaCovid(){

    var esCovid = -1;
    if(fever == 1 && dry_cough == 1 && sore_throat == 1){ //regla 1
        esCovid = 1;
    } else if (fever == 1 && dry_cough == 1 && sore_throat == 1){ //corregir de regla 2 hasta regla 33

    }


    if(esCovid==1){
        return 'finalSi';
    } else if (esCovid==0){
        return 'finalNo';
    } else {
        return 'finalSinRes';
    }
}