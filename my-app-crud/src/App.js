import CRUDApp from "./components/CRUD-app";
import CrudAPi from "./components/CrudApi";

function App() {
  return (
   <div>     
     <h1>Ejercicios con React</h1>
     <hr/>
     <CrudAPi></CrudAPi>
     <hr/>
     <CRUDApp></CRUDApp>
   </div>
     
  );
}

export default App;
