const e_div_category = document.getElementById("category_body");
const e_body = document.getElementById("body");
const e_all_h1 = document.getElementsByTagName("h1");
const e_all_h2 = document.getElementsByTagName("h2");
const e_all_div = document.getElementsByTagName("div");
const e_all_input = document.getElementsByTagName("input");
const e_all_select = document.getElementsByTagName("select");
const e_all_label = document.getElementsByTagName("label");

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

    static darkMode(state){

        if(state){
            e_body.classList.add("dark-mode");

            for (let index = 0; index < e_all_h1.length; index++) {     

                if(e_all_h1[index].classList[0] == "dis"){
                    e_all_h1[index].classList.remove("dark-mode")
                }  
                else{
                    e_all_h1[index].classList.add("dark-mode")
                }

            }

            for (let index = 0; index < e_all_h2.length; index++) {     

                if(e_all_h2[index].classList[0] == "dis"){
                    e_all_h2[index].classList.remove("dark-mode")
                }  
                else{
                    e_all_h2[index].classList.add("dark-mode")
                }

            }

            for (let index = 0; index < e_all_div.length; index++) {     

                if(e_all_div[index].classList[0] == "dis"){
                    e_all_div[index].classList.remove("dark-mode")
                }  
                else{
                    e_all_div[index].classList.add("dark-mode")
                }

            }

            for (let index = 0; index < e_all_select.length; index++) {     

                if(e_all_select[index].classList[0] == "dis"){
                    e_all_select[index].classList.remove("dark-mode")
                }  
                else{
                    e_all_select[index].classList.add("dark-mode")
                }

            }

            for (let index = 0; index < e_all_input.length; index++) {     

                if(e_all_input[index].classList[0] == "dis"){
                    e_all_input[index].classList.remove("dark-mode")
                }  
                else{
                    e_all_input[index].classList.add("dark-mode")
                }

            }

            for (let index = 0; index < e_all_label.length; index++) {     
                e_all_label[index].classList.add("dark-mode")

                if(e_all_label[index].classList[0] == "dis"){
                    e_all_label[index].classList.remove("dark-mode")
                }  
                else{
                    e_all_label[index].classList.add("dark-mode")
                }

            }
        }
        else{
            e_body.classList.remove("dark-mode");

            for (let index = 0; index < e_all_h1.length; index++) {     
                e_all_h1[index].classList.remove("dark-mode")
            }

            for (let index = 0; index < e_all_h2.length; index++) {     
                e_all_h2[index].classList.remove("dark-mode")
            }

            for (let index = 0; index < e_all_div.length; index++) {   

                e_all_div[index].classList.remove("dark-mode")

            }

            for (let index = 0; index < e_all_select.length; index++) {     
                e_all_select[index].classList.remove("dark-mode")
            }

            for (let index = 0; index < e_all_input.length; index++) {     
                e_all_input[index].classList.remove("dark-mode")
            }

            for (let index = 0; index < e_all_label.length; index++) {     
                e_all_label[index].classList.remove("dark-mode")
            }
        }


    }

}

