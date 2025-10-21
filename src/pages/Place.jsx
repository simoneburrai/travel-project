import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function Place() {
  const { id } = useParams();
  const { currentPlaces } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  const currentPlace = currentPlaces.find(p=> p.id === parseInt(id));

  if (!currentPlace) return <div className="text-center">
    <p>Luogo non trovato o caricamento...</p>
    <div className="bg-dark text-center" style={{borderRadius: "20px"}}>
      <Link className="fs-3 text-warning p-3" to="/places">Torna alla pagina Principale</Link></div>
    </div>

  const { name, city, address, location, price, img, description, date, type } = currentPlace;

  return (
    <div className="place container mt-3" style={{ overflowY: "auto" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            {img && (
              <img
                src={img}
                alt={name}
                className="card-img-top"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            )}
            <div className="card-body">
              <h1 className="display-5 text-center mb-3">{name}</h1>
              <h4 className="text-center text-muted mb-4">{city}</h4>

              <ul className="list-group list-group-flush mb-4">
                {address && (
                  <li className="list-group-item">
                    <strong>Indirizzo:</strong> {address}
                    {location && (
                      <button
                        className="btn btn-outline-primary w-100 py-2 mt-2"
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps?q=${location[0]},${location[1]}`,
                            "_blank"
                          )
                        }
                      >
                        Vai su <i className="fa-brands fa-google" /> Maps
                      </button>
                    )}
                  </li>
                )}
                {type && (
                  <li className="list-group-item">
                    <strong>Tipo:</strong> {type}
                  </li>
                )}
                {price && (
                  <li className="list-group-item">
                    <strong>Prezzo:</strong> {price}
                  </li>
                )}
                {date && (
                  <li className="list-group-item">
                    <strong>Data:</strong> {date}
                  </li>
                )}
              </ul>

              {description && (
                <div className="mb-4">
                  <button
                    className="btn btn-outline-info w-100 py-2 mt-2"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {isOpen ? "Chiudi descrizione" : "Apri descrizione"}
                  </button>
                  {isOpen && (
                    <div>
                      <h5 className="text-info mb-2">Descrizione</h5>
                      <p className="text-justify">{description}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
