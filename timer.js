const e_timer = document.getElementById("timer_info");
const e_div_timer = document.getElementById("category_timer");

let saat = 0;
let dakika = 0;
let saniye = 0;
let elapsedTime = 0;
let startTime = 0;
let intervalID;

class Timer{

    static startTimer(){
        startTime = Date.now() - elapsedTime
        intervalID = setInterval(Timer.updateTime, 75);
        Timer.showTimer(false)
    }


    static resetTimer(){
        Timer.showTimer(true);
        saat = 0;
        dakika = 0;
        saniye = 0;
        elapsedTime = 0;
        startTime = 0;
        e_timer.textContent = "00:00:00";
        clearInterval(intervalID);
    }

    static showTimer(status){
        if(status){
            e_div_timer.classList.add("d-none");
        }
        else{
            e_div_timer.classList.remove("d-none");
        }
    }

    static updateTime(){
        
        elapsedTime = Date.now() - startTime;

        saniye = Math.floor((elapsedTime / 1000) % 60);
        dakika = Math.floor((elapsedTime / (1000 * 60)) % 60);
        saat = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

        saniye = Timer.pad(saniye);
        dakika = Timer.pad(dakika);
        saat = Timer.pad(saat);

        e_timer.textContent = `${saat}:${dakika}:${saniye}`;

    }

    static pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }

}
