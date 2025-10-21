import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext"
import { NavLink } from "react-router-dom";

export default function Places(){

    const {currentPlaces} = useGlobalContext();
    

    return <div id="places" className="container my-3" style={{overflowY: "auto"}}>
        <h2 className="text-center mb-4 fw-bold">Places and Attractions</h2>
        <ul className="list-group shadow-sm" >
            {currentPlaces.map((p) => (
            <li
                key={p.id}
                className="list-group-item d-flex justify-content-between align-items-center py-3 px-4"
            >
                <div>
                <NavLink to={`/places/${p.id}`} className="h5 d-block mb-1 text-primary">{p.name}</NavLink>
                <small className="text-muted">{p.city}</small>
                </div>
            </li>
            ))}
        </ul>
        </div>
}