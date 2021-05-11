import "./Modal.css";

// la propiedad children hace referencia al contenido interno
// que va tener este componente.

const Modal = ({ children,isOpen,closeModal }) => {

  // deteneer la propagaci+on del evento closeModal del
  // asi podemos hacer click dentro del container para nuestro modal form
  const handleModalContainerClick=(e)=>{
    e.stopPropagation();
  }

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal__container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>X</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
