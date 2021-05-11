import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal"

const Modals = () => {
  // destructuramos el useModal en un arreglo para cada mOdal
  const  [isOpenModal1,openModal1,closeModal1]=useModal(false);
  const  [isOpenModal2,openModal2,closeModal2]=useModal(false);
  const  [isOpenModalContact,openModalContact,closeModalContact]=useModal(false);

  return ( 
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido del Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>

      <button onClick={openModal2}>Modal2</button>

      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola, este es el contenido del Modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal>

      <button onClick={openModalContact}>Modal3</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm/>
      </Modal>

    </div>
   );
}
 
export default Modals;