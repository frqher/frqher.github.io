const e_div_cavab = document.getElementById("card-cavab");
const e_div_cavab_body = document.getElementById("cavab-card-body");
const e_sinif = document.getElementById("select_sinif");
const e_unit = document.getElementById("select_unit");
const e_dil = document.getElementById("select_dil");
const e_zorluk = document.getElementById("select_cetinlik");
const e_div_zorluk = document.getElementById("zorluk_2");
const e_baslat = document.getElementById("start");
const e_yoxla = document.getElementById("check");
const e_sual = document.getElementById("sual");
const e_card_info = document.getElementById("kart_info");
const e_cavab = document.getElementById("cavab");
const e_cavab_text = document.getElementById("sual_cavab");
const e_cavab_goster = document.getElementById("show_answer");
const e_cavab_durdur = document.getElementById("stop_system");
const e_variantlar = document.querySelectorAll(".variant");
const e_dark_mode = document.getElementById("dark_mode");

let u_sinif;
let u_unit;
let u_dil;
let u_dil_2;
let u_cetinlik;
let u_sual;
let u_index;
let u_cevap;
let objects;
let dark_state = true

eventListeners();

function eventListeners(){

    addEventListener("DOMContentLoaded", () =>{
        Data.checkSinif(e_sinif);
        UI.darkMode(dark_state);
    });

    e_dark_mode.addEventListener("click", () => {
        UI.darkMode(!dark_state);
        dark_state = !dark_state
    });

    e_sinif.addEventListener("click", () => {
        Data.checkUnit(e_unit);
    });
    
    e_baslat.addEventListener("click", setTest);

    e_cavab_durdur.addEventListener("click", resetAll);

    e_yoxla.addEventListener("click", () => {
        if (u_cetinlik == 2){
            u_cevap = e_cavab.value.toLowerCase().trim();
            checkAnswer();
        }
    });


    e_cavab_goster.addEventListener("click", UI.showAnswer);
    e_div_zorluk.addEventListener("click", (e) => {
        if (e.target.className == "btn btn-primary variant m-1"){
            if (u_cetinlik == 1){
                u_cevap = e.target.textContent.toLowerCase().trim();
                checkAnswer();
            }
        }
    });

    e_cavab.addEventListener("keydown", (event) => {
        if (event.key == "Enter"){

            if (u_cetinlik == 2){
                u_cevap = e_cavab.value.toLowerCase().trim();
                checkAnswer();
            }
        }
    });


}


function resetAll(){
    Timer.resetTimer();
    UI.visibleAnswer(false);
    UI.showCategory(true);
}


function konrolKategori(){
    let error_select = "Seç...";
    let e_sinif_v = e_sinif.options[e_sinif.selectedIndex].text;
    let e_unit_v = e_unit.options[e_unit.selectedIndex].text;
    let e_dil_v = e_dil.options[e_dil.selectedIndex].text;
    let e_cetinlik = e_zorluk.options[e_zorluk.selectedIndex].text;

    if (e_sinif_v == error_select || e_unit_v == error_select || e_dil_v == error_select || e_cetinlik == error_select){
        UI.errorMsg("category", "danger", "Sinif, Unit, Dil ve Çətinlik səviyyəsini seçin!");
        return false
    }
    else{
        return true
    }
}


function setTest(){

    if (!konrolKategori()){
        return
    }

    let e_sinif_v = e_sinif.options[e_sinif.selectedIndex].text;
    let e_unit_v = e_unit.options[e_unit.selectedIndex].text;
    let e_dil_v = e_dil.options[e_dil.selectedIndex].text;
    let e_cetinlik = e_zorluk.options[e_zorluk.selectedIndex].text;

    setLanguage(e_dil_v);
    setDifficult(e_cetinlik);
    setUnitAndSinif(e_sinif_v, e_unit_v);
    UI.loadAnswer();

    Data.getLanguage(u_sinif, u_unit)
        .then(res => {

            objects = res;

            startTest();
            Timer.startTimer();
            UI.showCategory(false);
            
        });

}

function setUnitAndSinif(sinif, unit){
    u_sinif = sinif;
    u_unit = unit;
}


function setDifficult(zorluk){

    if (zorluk == "Asan"){
        u_cetinlik = 1
        e_card_info.textContent = "Doğru Cavabı Seçin";
    }
    else if (zorluk == "Çətin"){
        u_cetinlik = 2
        e_card_info.textContent = "Doğru Cavabı Yazın";
    }

}

function correctAnswer(){
    UI.errorMsg("cavab-card-body", "success", "Düzgün Cavab!");
    UI.showAnswer(true);
    removeSual(u_index);
    startTest();
}

function incorrectAnswer(){
    UI.errorMsg("cavab-card-body", "danger", "Cavab düzgün deyil, Cavab: " + u_sual[u_dil_2]);
    e_cavab.value = ""
    UI.showAnswer(true);
    startTest();
}

function getAnswer(answer){
    return u_cevap;
}

function checkAnswer(){
    let cevap = getAnswer();
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
        resetAll();
    }
    else{

        let fake_suallar = getRandomFakeSual();

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

        if(u_cetinlik == 1){
            fake_suallar.forEach((element, index) => {
                e_variantlar[index].textContent = element;
            });
        }

        UI.showMode(u_cetinlik);
        
    }

    

}

function getRandomFakeSual(){
    let fake_suallar = [];

    for (let index = 1; index < 5; index++) {
        let sual = objects[getRandomNumber()][u_dil_2].split(",");
        fake_suallar.push(sual[0]);
    }

    let real_sual_random_pos = Math.floor(Math.random() * 4);
    let real_sual = u_sual[u_dil_2].split(",")[0];
    fake_suallar.splice(real_sual_random_pos, 0, real_sual);

    return fake_suallar;
}

function removeSual(number){
    objects.splice(number, 1)
    e_cavab.value = ""
}

function getRandomNumber(){
    let object_length = Object.getOwnPropertyNames(objects).length - 1;

    if (object_length == 0){
        return -1
    }
    else{
        let random_number = String(Math.floor(Math.random() * object_length));
    
        return random_number;
    }
 
}

function setLanguage(dil){

    if (dil == "Azərbaycan"){
        u_dil = 0
        u_dil_2 = 1
    } 
    else if (dil == "İngilis"){
        u_dil = 1
        u_dil_2 = 0
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