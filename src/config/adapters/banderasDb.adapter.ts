
// https://restcountries.com/v3.1/all?fields=name

import { AxiosAdapter } from "./http/axios.adapter";

export const apiBanderasDb = new AxiosAdapter({ 
    baseUrl: "https://restcountries.com/v3.1/",
    params:{
        fields: "name,capital,population,flags"
    }
});

// https://restcountries.com/v3.1/region/europe
// Africa, Americas, Asia, Europe, Oceania
export const apiContinentesDb = new AxiosAdapter({
    baseUrl: "https://restcountries.com/v3.1/",
});


// https://restcountries.com/v3.1/name/{name}  

export const apiPaisDb = new AxiosAdapter({
    baseUrl: "https://restcountries.com/v3.1/",
});