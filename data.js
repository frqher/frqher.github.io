class Data{


    static async getLanguage(sinif, unit){
        
        const response = await fetch("./all.json");

        const data = await response.json();

        return data[sinif][unit];
    }
}