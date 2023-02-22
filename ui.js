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

}