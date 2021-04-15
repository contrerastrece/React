import CRUDApp from "./components/CRUD-app";
import CrudAPi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
   <div>     
     <h1>Ejercicios con React</h1>
     <SongSearch/>
     <hr/>
     <CrudAPi></CrudAPi>
     <hr/>
     <CRUDApp></CRUDApp>
   </div>
     
  );
}

export default App;
