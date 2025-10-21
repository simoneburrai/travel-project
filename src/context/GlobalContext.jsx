import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/data";

const GlobalContext = createContext();


const GlobalProvider = ({children})=>{

    const [exchangeRate, setExchangeRate] = useState(null);
    const {houses, places, foods, pubs} = data;
    const [currentHouses, setCurrentHouses] = useState(houses);
    const [currentPlaces, setCurrentPlaces] = useState(places);
    const [currentFoods, setCurrentFoods] = useState(foods);
    const [currentCity, setCurrentCity] = useState("bratislava");
    const [currentPubs, setCurrentPubs] = useState(pubs);

    useEffect(()=>{
        setCurrentHouses(houses.filter(house=>house.city.toLowerCase() === currentCity));
        setCurrentPlaces(places.filter(place=>place.city.toLowerCase() === currentCity));
        setCurrentFoods(foods.filter(food=>{
            if(currentCity === "bratislava"){
                return food.country === "Slovacchia"
            }else if(currentCity === "vienna"){
                return food.country === "Austria"
            }else if(currentCity === "brno"){
                return food.country === "Repubblica Ceca (Moravia)"
            }
        }));
        setCurrentPubs(pubs.filter(pub=>pub.city.toLowerCase() === currentCity ))
    }, [currentCity])

   async function getEurToCzk() {
  try {

    const accessKey = "f95fadcbaf23d1ea0db5e4261e2f2a4e"
    const source = 'EUR';
    const target = 'CZK';

    const url = `http://api.exchangerate.host/convert?access_key=${accessKey}&from=EUR&to=CZK&amount=1&format=1`

    const response = await fetch(url);
    const data = await response.json();

    // Il tasso di cambio
    const rate = data.result;
    console.log(`1 EUR = ${rate} CZK`);
    setExchangeRate(rate);
  } catch (error) {
    console.error('Errore nel recupero del tasso di cambio:', error);
  }
}
    useEffect(()=>{
        getEurToCzk();
    }, [])


   

    return <GlobalContext.Provider value={{currentPubs, currentFoods, currentHouses, currentPlaces, exchangeRate, currentCity, setCurrentCity}} >
        {children}
    </GlobalContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}

export {
    GlobalProvider,
    useGlobalContext
}