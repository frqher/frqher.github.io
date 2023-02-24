const e_div_category = document.getElementById("category_body");

class UI{
    
    static errorMsg(id, type, msg){

        const cardBody = document.getElementById(id);;
    
        const div = document.createElement("div");
    
        div.className = `alert alert-${type} mt-3`
        div.textContent = msg;
    
        cardBody.appendChild(div);
    
        setTimeout(function(){
            div.remove();
        }, 3000)

    }

    static showCategory(status){

        if(status){
            e_div_category.classList.remove("d-none");
        }
        else{
            e_div_category.classList.add("d-none");
        }
    }

    static visibleAnswer(status){
        if(status){
            e_div_cavab.classList.remove("d-none");
        }
        else{
            e_div_cavab.classList.add("d-none");
        }
    }


    static showMode(status){
        if(status == 1){
            e_yoxla.classList.add("d-none");
            e_cavab.classList.add("d-none");
            e_div_zorluk.classList.remove("d-none");
        }
        else{
            e_yoxla.classList.remove("d-none");
            e_cavab.classList.remove("d-none");
            e_div_zorluk.classList.add("d-none");
        }
        
    }

    static createOption(index){

        const option = document.createElement("option");
                    
        option.value = index;
        option.textContent = index;
    
        e_unit.appendChild(option);
    }

    static showAnswer(e){
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

    static loadAnswer(){
        e_cavab_goster.textContent = "Cavabı Göstər";
        e_cavab_text.textContent = "Cavab:*****";

        e_div_cavab.classList.remove("d-none");
    }

}

