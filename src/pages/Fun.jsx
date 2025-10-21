import { useMemo, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext"
import { NavLink } from "react-router-dom";

export default function Fun(){

    const {currentPubs, setCurrentPubs} = useGlobalContext();
    const [currentType, setCurrentType] = useState(null);

    const filteredPubs = useMemo(()=>{
        const filteredPubs = currentPubs;
        if(!currentType){
            return filteredPubs
        }else if(currentType === "bar"){
            return filteredPubs.filter(local => local.type === "bar")
        }else if(currentType === "club"){
            return filteredPubs.filter(local => local.type === "club")
        }
    }, [currentType, currentPubs])

    

    return <div id="pubs" className="container my-3" style={{overflowY: "auto"}}>
        <h2 className="text-center mb-4 fw-bold">Pubs & Clubs</h2>
       <div className="d-flex justify-content-center gap-2 mt-3 mb-3">
            <button 
                className="btn btn-outline-primary" 
                onClick={() => setCurrentType("")}
            >
                All
            </button>
            <button 
                className="btn btn-outline-success" 
                onClick={() => setCurrentType("bar")}
            >
                Pubs
            </button>
            <button 
                className="btn btn-outline-danger" 
                onClick={() => setCurrentType("club")}
            >
                Clubs
            </button>
        </div>

        <ul className="list-group shadow-sm" >
            {filteredPubs.map((p) => (
            <li
                key={p.id}
                className="list-group-item d-flex justify-content-center align-items-center py-3 px-4"
            >
                <div>
                <div className="h5 text-center d-block mb-1 text-primary">{p.name}</div>
                <p className="fs-3 font-italic text-uppercase text-center">{p.type}</p>
                <button
                        className="btn btn-outline-primary w-100 py-2 mt-2"
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps?q=${p.location[0]},${p.location[1]}`,
                            "_blank"
                          )
                        }
                      >
                        Vai su <i className="fa-brands fa-google" /> Maps
                      </button>
                </div>
            </li>
            ))}
        </ul>
        </div>
}