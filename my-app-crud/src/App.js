import ContactForm from "./components/ContactForm";
import CRUDApp from "./components/CRUD-app";
import CrudAPi from "./components/CrudApi";
import Modals from "./components/Modals";
import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
   <div>     
     <h1>Ejercicios con React</h1>
     <Modals/>
     <hr/>
     
     <ContactForm/>
     <hr/>
     <SelectsAnidados/>
     <hr/>

     <SongSearch/>
     <hr/>
     <CrudAPi></CrudAPi>
     <hr/>
     <CRUDApp></CRUDApp>
   </div>
     
  );
}

export default App;
