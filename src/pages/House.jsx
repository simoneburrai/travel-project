import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function House(){
    const {id} = useParams();
    const {currentHouses} = useGlobalContext();

    const currentHouse = currentHouses.find(h => h.id === Number(id));

    if (!currentHouse) return <div className="text-center">
    <p>Luogo non trovato o caricamento...</p>
    <div className="bg-dark text-center" style={{borderRadius: "20px"}}>
      <Link className="fs-3 text-warning p-3" to="/places">Torna alla pagina Principale</Link></div>
    </div>

    const {
         city,
         name,
         address,
         location,
         checkIn,
         checkOut,
         number,
    } = currentHouse;



    return <div className="house container mt-3" style={{ overflowY: "auto"}}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-sm p-4">
            <h1 className="display-4 text-center mb-4">{name}</h1>
            <h3 className="text-center text-muted mb-4">{city}</h3>

            <p className="lead mb-4"><strong>Indirizzo:</strong> {address}</p>
            <p className="h5 text-primary mb-4"><strong>Telefono:</strong> {number}</p>

            <div className="row">
              <div className="col-md-6">
                <h3 className="h5 text-info">Check-In</h3>
                <p className="mb-1"><strong>Giorno:</strong> {checkIn.day}</p>
                <p><strong>Orario:</strong> {checkIn.time}</p>
              </div>
              <div className="col-md-6">
                <h3 className="h5 text-info">Check-Out</h3>
                <p className="mb-1"><strong>Giorno:</strong> {checkOut.day}</p>
                <p><strong>Orario:</strong> {checkOut.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn my-3 btn-outline-primary w-100 py-3"
        onClick={() => window.open(`https://www.google.com/maps?q=${location[0]},${location[1]}`, '_blank')}
        >Vai a <i className="fa-brands fa-google "/> Maps</button>
    </div>
}