const e_div_category = document.getElementById("category_body");

class UI{
    
    static errorMsg(id, type, msg){

        const cardBody = document.getElementById(id);;
    
        // Alert divini olusturma
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

}

