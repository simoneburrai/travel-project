import { useState } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import ModalCity from "./ModalCity";
import { useLocation } from "react-router-dom";

export default function Default(){

    const {currentCity, setCurrentCity} = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);
    const bratislavaImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LjVLqFjBM3sB9ZtAAxKGUPq7ckfJjotIAQ&s";
    const brnoImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rthMOESYHgn9oDFGEzvhNzaPNQgAwp4sbw&s"
    const viennaImg = "https://cdn.britannica.com/73/6073-050-4D6FDAF6/Flag-Austria.jpg"
    let currentImg;

    if(currentCity === "bratislava"){
        currentImg = bratislavaImg
    }else if(currentCity === "brno"){
        currentImg = brnoImg;
    }else if(currentCity=== "vienna"){
        currentImg = viennaImg
    };

     const location = useLocation();

    const isRoot = location.pathname === "/";

    return <>
    <header className="header" style={{overflowY: "auto"}}>
        <nav className="row p-3">
            <button onClick={()=>setIsOpen(prev=> !prev)} className="cityImg-container"><img className="cityImg" src={currentImg} alt={currentCity} /></button>
            <NavLink to="/houses"><i className="fa-solid fa-house"></i></NavLink>
            <NavLink to="/places"><i className="fa-solid fa-landmark"></i></NavLink>
            <NavLink to="/foods"><i className="fa-solid fa-burger"></i></NavLink>
            <NavLink to="/fun"><i className="fa-solid fa-martini-glass-citrus"></i></NavLink>
            <NavLink to="/currency"><i className="fa-solid fa-euro-sign"></i></NavLink>
            
        </nav>
    </header>
    <main className="main">
        {isRoot ? (
            <div className="mb-2" style={{width: "85vw", height: "100vh"}}>
                <h1 className="h1 text-center mt-5 mb-2">Benvenuto su Comfy Travel ✈️</h1>
               <div
  className="d-flex justify-content-center align-items-center"
  style={{
    width: "100%",
    height: "100vh", // o qualsiasi altezza ti serva
    overflow: "hidden", // impedisce di sbordare
  }}
>
  <img
    src="https://media1.tenor.com/m/Uo3bV7P2OD0AAAAC/lot-flying-plane.gif"
    alt="Flying plane"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain", // Ritaglia per riempire lo spazio
    }}
  />
</div>

            </div>
        
      ) : (
        <Outlet />
      )}
        {isOpen && <ModalCity
        isOpen={isOpen} 
        onClose={()=>setIsOpen(false)} 
        viennaImg={viennaImg} 
        bratislavaImg={bratislavaImg}
        brnoImg={brnoImg} 
        setCurrentCity={setCurrentCity} 
        currentCity={currentCity}/>}
        
    </main>
    </>
}

