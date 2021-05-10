import "./Modal.css";

// la propiedad children hace referencia al contenido interno
// que va tener este componente.

const Modal = ({ children }) => {
  return (
    <article className="modal is-open">
      <div className="modal__container">
        <button className="modal-close">X</button>
      </div>
      {children}
    </article>
  );
};

export default Modal;
