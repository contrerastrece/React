import { useModal } from "../hooks/useModal";
import Modal from "./Modal"

const Modals = () => {
  // destructuramos el useModal en un arreglo para cada mOdal
  const  [isOpenModal1,openModal1,closeModal1]=useModal(false);
  const  [isOpenModal2,openModal2,closeModal2]=useModal(false);
  
  return ( 
    <div>
      <h2>Modals</h2>
      <button>Modal1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido del Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
      <button>Modal2</button>
      {/* <Modal>
        <h3>Modal 2</h3>
        <p>Hola, este es el contenido del Modal 1</p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal> */}

    </div>
   );
}
 
export default Modals;