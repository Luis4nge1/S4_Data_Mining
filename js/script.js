var breathing_problem = -1; //done
var fever = -1; //done
var dry_cough = -1; //done
var sore_throat = -1; //done
var running_nose = -1; 
var asthma = -1; //done
var chronic_lung_disease = -1;
var headache = -1; //done
var heart_disease = -1; //done
var diabetes = -1;
var hyper_tension = -1; //done
var fatigue = -1; //done
var gastroinstestinal = -1; //done
var abroad_travel = -1; //done
var contact_with_covid_patient = -1; //done
var attended_large_gathering = -1; //done
var visited_public_exposed_places = -1; //done
var family_working_in_public_exposed_places = -1; //done
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
    }

    //Regla 2
    else if (contact_with_covid_patient == 1  &&  abroad_travel == 0  &&  breathing_problem == 1  &&  fever == 0  &&  dry_cough == 1  &&  sore_throat == 1)
        esCovid = 1;

    // Regla 3
    else if (visited_public_exposed_places == 1 && family_working_in_public_exposed_places == 1 && asthma == 0 && attended_large_gathering == 0 && contact_with_covid_patient == 0 && abroad_travel == 0 && breathing_problem == 1 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 0;
    }

    // Regla 4
    else if (visited_public_exposed_places == 0 && family_working_in_public_exposed_places == 1 && asthma == 0 && attended_large_gathering == 0 && contact_with_covid_patient == 0 && abroad_travel == 0 && breathing_problem == 1 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 1;
    }

    // Regla 5
    else if (family_working_in_public_exposed_places == 0 && asthma == 0 && attended_large_gathering == 0 && contact_with_covid_patient == 0 && abroad_travel == 0 && breathing_problem == 1 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 0;
    }

    // Regla 6
    else if (asthma == 1 && attended_large_gathering == 0 && contact_with_covid_patient == 0 && abroad_travel == 0 && breathing_problem == 1 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 1;
    }

    // Regla 7
    else if (attended_large_gathering == 1 && contact_with_covid_patient == 0 && abroad_travel == 0 && breathing_problem == 1 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 1;
    }

    // Regla 8
    else if (abroad_travel == 1 && breathing_problem == 1 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 1;
    }

    // Regla 9
    else if (attended_large_gathering == 0 && breathing_problem == 0 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 0;
    }

    // Regla 10
    else if (attended_large_gathering == 1 && breathing_problem == 0 && fever == 0 && dry_cough == 1 && sore_throat == 1) {
        esCovid = 1;
    }

    // Regla 11
    else if (asthma == 0 && fatigue == 1 && fever == 1 && attended_large_gathering == 0 && breathing_problem == 1 && dry_cough == 0 && sore_throat == 1) {
        esCovid = 1;
    }

    // Regla 12
    else if (family_working_in_public_exposed_places == 1 && asthma == 1 && fatigue == 1 && fever == 1 && attended_large_gathering == 0 && breathing_problem == 1 && dry_cough == 0 && sore_throat == 1) {
        esCovid = 1;
    }

    // Regla 13
    else if (heart_disease == 0 && family_working_in_public_exposed_places == 0 && asthma == 1 && fatigue == 1 && fever == 1 && attended_large_gathering == 0 && breathing_problem == 1 && dry_cough == 0 && sore_throat == 1) {
        esCovid = 0;
    }


    //Regla 14
    else if (hyper_tension == 1  &&  heart_disease== 1  &&  family_working_in_public_exposed_places == 0  &&  asthma== 1  &&  fatigue == 1  &&  fever == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  dry_cough == 0  &&  sore_throat == 1){
        esCovid = 0;
    }

    //Regla 15
    else if (hyper_tension == 0  &&  heart_disease== 1  &&  family_working_in_public_exposed_places == 0  &&  asthma== 1  &&  fatigue == 1  &&  fever == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  dry_cough == 0  &&  sore_throat == 1){
        esCovid = 1;
    }

    //Regla 16
    else if (fatigue == 0  &&  fever == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  dry_cough == 0  &&  sore_throat == 1){
        esCovid = 1;
    }

    //Regla 17
    else if (fever == 0  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  dry_cough == 0  &&  sore_throat == 1){
        esCovid = 0;
    }

    //Regla 18
    else if (attended_large_gathering == 1  &&  breathing_problem == 1  &&  dry_cough == 0  &&  sore_throat == 1){
        esCovid = 1;
    }

    //Regla 19
    else if (attended_large_gathering == 0  &&  breathing_problem == 0  &&  dry_cough == 0  &&  sore_throat == 1){
        esCovid = 0;
    }

    
    //Regla 20 
    else if (attended_large_gathering == 1  &&  breathing_problem == 0  &&  dry_cough == 0  &&  sore_throat == 1){
        esCovid = 1;
    }

    //Regla 21
    else if (contact_with_covid_patient == 1  &&  dry_cough == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 1;
    }

    //Regla 22
    else if (headache== 0  &&  fatigue == 1  &&  fever == 1  && contact_with_covid_patient == 0  &&  dry_cough == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 1;
    }

    //Regla 23
    else if (hyper_tension == 1  &&  headache== 1  &&  fatigue == 1  &&  fever == 1  &&  contact_with_covid_patient == 0  &&  dry_cough == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0 ){
        esCovid = 0;
    }

    //Regla 24
    else if (hyper_tension == 0  &&  headache== 1  &&  fatigue == 1  &&  fever == 1  &&  contact_with_covid_patient == 0  &&  dry_cough == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 1;
    }

    //Regla 25
    else if (gastroinstestinal == 1  &&  fatigue == 0  &&  fever == 1  && contact_with_covid_patient == 0  &&  dry_cough == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0 ){
        esCovid = 1;
    }

    //Regla 26
    else if (gastroinstestinal == 0  &&  fatigue == 0  &&  fever == 1  && contact_with_covid_patient == 0  &&  dry_cough == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 0;
    }

    //Regla 27
    else if (fever == 0  && contact_with_covid_patient == 0  &&  dry_cough == 1  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 0; 
    }

    //Regla 28
    else if (dry_cough == 0  &&  attended_large_gathering == 0  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 0; 
    }

    //Regla 29
    else if (attended_large_gathering == 1  &&  breathing_problem == 1  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 1;
    }

    //Regla 30 
    else if (attended_large_gathering == 0  &&  breathing_problem == 0  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 0;     
    }

    //Regla 31
    else if (dry_cough == 1  &&  attended_large_gathering == 1  &&  breathing_problem == 0  &&  abroad_travel == 0  &&  sore_throat == 0){
        esCovid = 1;
    }

    //Regla 32
    else if (dry_cough == 0  &&  attended_large_gathering == 1  &&  breathing_problem == 0  &&  abroad_travel == 0  &&  sore_throat == 0 ){
        esCovid = 0;
    }

    //Regla 33 
    else if (abroad_travel == 1  &&  sore_throat == 0){ 
        esCovid = 1;
    }


    if(esCovid==1){
        return 'finalSi';
    } else if (esCovid==0){
        return 'finalNo';
    } else {
        return 'finalSinRes';
    }
}