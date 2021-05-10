import Modal from "./Modal"

const Modals = () => {
  return ( 
    <div>
      <h2>Modals</h2>
      <button>Modal1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido del Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
    </div>
   );
}
 
export default Modals;