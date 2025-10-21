import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Currency(){
    const [eur, setEur] = useState("");
    const [czk, setCzk] = useState("");
    const [lastChanged, setLastChanged] = useState("");
    const {exchangeRate} = useGlobalContext();



    function convert(){
        const numberEur = Number(eur);
        const numberCzk = Number(czk);
        const currentExchange = exchangeRate ? exchangeRate : 24.30

        if(isNaN(numberEur) || isNaN(numberCzk)){
            return;
        }

        if(lastChanged === "eur"){
            setCzk((numberEur * currentExchange).toFixed(2));
        }

        if(lastChanged === "czk"){
            setEur((numberCzk / currentExchange).toFixed(2))
        }
    }

    useEffect(()=>{
        convert();
    }, [eur, czk])

    return <div id="currency d-flex justify-content-center">
        <div>  
            <h1>Conversion</h1>
            <h5 className="text-success fs-6">conversion rate {exchangeRate ? exchangeRate : 24.30}</h5> 
        </div>
        
        <div className="second-value"><span className="px-3">CZK</span>
            <input className="m-1 form-control" value={czk}  type="text" placeholder="Kč" onChange={(e)=>{
                setCzk(e.target.value);
                setLastChanged("czk");
            }} />
        </div>
        <div className="first-value"><span className="px-3">EUR</span>
            <input className="m-1 form-control" value={eur}  type="text" placeholder="€" onChange={(e)=>{
                setEur(e.target.value);
                setLastChanged("eur");
            }} />
        </div>
        
    </div>
}