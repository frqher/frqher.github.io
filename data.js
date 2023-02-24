class Data{


    static async getLuget(){
        
        const response = await fetch("./all.json");

        const data = await response.json();


        return data;
        
    }

    static async getLanguage(sinif, unit){
        
        const response = await fetch("./all.json");

        const data = await response.json();


        return data[sinif][unit];
        
    }

    static checkSinif(e){

        const data = Data.getLuget()
        .then(respone => {
            for (let index = 0; index < 13; index++) {
                
                if(respone[index]){
                    const option = document.createElement("option");
                    
                    option.value = index;
                    option.textContent = index;
                
                    e_sinif.appendChild(option);
                }  
    
            }
        });

    }

    static checkUnit(e){
        
        let sinif = e_sinif.options[e_sinif.selectedIndex].text;

        e_unit.textContent = "";

        const option = document.createElement("option");
                    
        option.value = 0;
        option.textContent = "Seç...";
    
        e_unit.appendChild(option);
        
        const data = Data.getLuget()
        .then((response) =>{
            
            for (let index = 0; index < 13; index++) {
   
                if(response[sinif] && response[sinif][index]){
                    UI.createOption(index);
                }  
    
            }
        });

    }
    
}