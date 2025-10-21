import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

export default function Houses() {
    const { currentHouses } = useGlobalContext()

    return (
        <div id="houses" style={{ overflowY: "auto"}}>
            <h1 className="text-center mb-4 fw-bold">Home Sweet Home...</h1>
            <div className="houses px-3" >
                {currentHouses.map(house => (
                    <NavLink
                        key={house.id}
                        to={`/houses/${house.id}`}
                        className="text-center p-4 mb-3 d-block text-decoration-none rounded shadow-sm border border-light bg-light text-dark hover-shadow"
                    >
                        <h3 className="h5 text-primary">{house.name}</h3>
                        <h4 className="h6 text-muted">{house.city}</h4>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
