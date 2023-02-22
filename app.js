const e_div_cavab = document.getElementById("card-cavab");
const e_div_cavab_body = document.getElementById("cavab-card-body");
const e_sinif = document.getElementById("select_sinif");
const e_unit = document.getElementById("select_unit");
const e_dil = document.getElementById("select_dil");
const e_baslat = document.getElementById("start");
const e_yoxla = document.getElementById("check");
const e_sual = document.getElementById("sual");
const e_cavab = document.getElementById("cavab");
const e_cavab_text = document.getElementById("sual_cavab");
const e_cavab_goster = document.getElementById("show_answer");

let u_sinif;
let u_unit;
let u_dil;
let u_dil_2;
let u_sual;
let u_index;
let objects;

eventListeners();

function eventListeners(){
    
    e_baslat.addEventListener("click", checkTest);
    e_yoxla.addEventListener("click", checkAnswer);
    e_cavab_goster.addEventListener("click", showAnswer);
    e_cavab.addEventListener("keydown", (event) => {
        if (event.key == "Enter"){
            checkAnswer();
        }
    });

}

function showAnswer(e){
    let durum = e_cavab_goster.textContent;

    if (durum == "Cavabı Göstər" && e !== true){
        e_cavab_text.textContent = "Cavab: " + u_sual[u_dil_2];
        e_cavab_goster.textContent = "Cavabı Gösterme";
        
    }
    else{
        e_cavab_goster.textContent = "Cavabı Göstər";
        e_cavab_text.textContent = "Cavab:*****";
    }
}

function correctAnswer(){
    UI.errorMsg("cavab-card-body", "success", "Düzgün Cavab!");
    showAnswer(true);
    removeSual(u_index);
    startTest();
}

function incorrectAnswer(){
    UI.errorMsg("cavab-card-body", "danger", "Cavab düzgün deyil");
}

function checkAnswer(){
    let cevap = e_cavab.value.toLowerCase();
    let soru = u_sual[u_dil_2].split(",");
    let answer_durum = false;

    soru.forEach((element, index) => {
        if (cevap == element.toLowerCase()){
            answer_durum = true;
        }
    });
    
    if (answer_durum){
        correctAnswer();
    }
    else{
        incorrectAnswer();
    }
}


function startTest(){
    u_sual = getRandomSual();

    if (u_sual == -1){
        e_sual.textContent = "Bütün sualları düzgün cavabladın, mükemmelsen !";
        e_div_cavab.classList.add("d-none");
        UI.errorMsg("category", "success", "Bütün sualları düzgün cavabladın, mükəmməlsən!");
    }
    else{

        e_sual.textContent = "Sual: ";

        let soru_uzunluk = u_sual[u_dil].split(",").length - 1;

        u_sual[u_dil].split(",").forEach((element, index) => {
            if (soru_uzunluk == index ){
                e_sual.textContent = e_sual.textContent  + element;
            }
            else{
                e_sual.textContent = e_sual.textContent  + element + ", ";
            }
        });
        
    }

    

}

function getRandomSual(){
    u_index = getRandomNumber();

    if (u_index == "-1"){
        return -1;
    }
    else{
        let sual = objects[u_index];
        return sual;
    }
    
    
}

function removeSual(number){
    objects.splice(number, 1)
    e_cavab.value = ""
}

function getRandomNumber(){
    let object_length = Object.getOwnPropertyNames(objects).length - 2
    
    let random_number = String(Math.floor(Math.random() * object_length));
   
    return random_number;
}

function checkTest(){

    let error_select = "Sec...";
    let e_sinif_v = e_sinif.options[e_sinif.selectedIndex].text;
    let e_unit_v = e_unit.options[e_unit.selectedIndex].text;
    let e_dil_v = e_dil.options[e_dil.selectedIndex].text;

    if (e_sinif_v == error_select || e_unit_v == error_select || e_dil_v == error_select){
        UI.errorMsg("category", "danger", "Sinif, Unit ve Dili seçin!");
    }
    else{
        u_sinif = e_sinif_v;
        u_unit = e_unit_v;
        
        if (e_dil_v == "Azərbaycan"){
            u_dil = 0
            u_dil_2 = 1
        } 
        else if (e_dil_v == "İngilis"){
            u_dil = 1
            u_dil_2 = 0
        }

        e_cavab_goster.textContent = "Cavabı Göstər";
        e_cavab_text.textContent = "Cavab:*****";

        e_div_cavab.classList.remove("d-none");

        Data.getLanguage(u_sinif, u_unit)
        .then(res => {
            objects = res;
            startTest();
        });
    }
}
