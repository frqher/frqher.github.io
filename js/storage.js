class Storage{

    static getLocalStorage(){
        let mode;
    
        if(localStorage.getItem("mode") === null){
            mode = false;
        }
        else{
            mode = localStorage.getItem("mode");

            if (mode == "true"){
                mode = true;
            }
            else{
                mode = false;
            }
        }

        return mode;
    }
    
    static setModeToStorage(mode){

        localStorage.setItem("mode", mode);

    }

}

