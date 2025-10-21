import { useRef } from "react";
import { createPortal } from "react-dom";

const ModalCity = ({
  onClose,
  viennaImg,
  bratislavaImg,
  brnoImg,
  setCurrentCity,
  currentCity,
}) => {
  const modalRef = useRef(null);

  const handleSelect = (city) => {
    setCurrentCity(city.toLowerCase());
    onClose();
  };

  // Contenuto della modale
  const modalContent = (
  <div
    className="modal d-block fade show"
    tabIndex="-1"
    aria-labelledby="cityModalLabel"
    aria-hidden="true"
    style={{
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1050,
    }}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="cityModalLabel">
            Seleziona la tua città
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Chiudi"
            onClick={onClose}
          ></button>
        </div>

        <div className="modal-body text-center">
          <div className="d-grid gap-3">

            {/* --- BRATISLAVA --- */}
            <button
              onClick={() => handleSelect("Bratislava")}
              className="btn btn-outline-primary d-flex align-items-center justify-content-start gap-3 p-3"
            >
              <img
                src={bratislavaImg}
                alt="Bratislava"
                className="rounded-circle"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h6 className="mb-0 flex-grow-1 text-start">Bratislava</h6>
            </button>

            {/* --- BRNO --- */}
            <button
              onClick={() => handleSelect("Brno")}
              className="btn btn-outline-primary d-flex align-items-center justify-content-start gap-3 p-3"
            >
              <img
                src={brnoImg}
                alt="Brno"
                className="rounded-circle"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h6 className="mb-0 flex-grow-1 text-start">Brno</h6>
            </button>

            {/* --- VIENNA --- */}
            <button
              onClick={() => handleSelect("Vienna")}
              className="btn btn-outline-primary d-flex align-items-center justify-content-start gap-3 p-3"
            >
              <img
                src={viennaImg}
                alt="Vienna"
                className="rounded-circle"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h6 className="mb-0 flex-grow-1 text-start">Vienna</h6>
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  </div>
);


  // monta la modale fuori dal normale flusso React (sul <body>)
  return createPortal(modalContent, document.body);
};

export default ModalCity;
