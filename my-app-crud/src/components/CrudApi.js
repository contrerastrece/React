import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpersHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

// sfc snippet
const CrudApi = () => {
  const [db, setDb] = useState(null);
  // cuando esté en Nulo haremos un Insert, y si  tiene un valor haremos un Update
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/pokemon";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      console.log(res);
      // si no existe ningún error llenaremos nuestra db
      if(!res.err){
        setDb(res);
        // asignamos el error a null
        setError(null);
      }else{
        setDb(null);
        // asignamos el error que llega en la variable res
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  // creamos nuestras funtion para el CRUD
  const createData = (data) => {
    // console.log(data)
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estás seguro de eliminar al pokemon con el ID ${id}?`
    );

    if (isDelete) {
      // filtramos a todos los elementos diferentes al id y esto lo guardamos a newData.
      // finalmente mostramos newData filtrado
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        ></CrudForm>
        {/* mostrará el Loader si aún no carga los datos */}
        {loading && <Loader/>}
        {/* si existe error cargará el componente */}
        {error && <Message msg={`Error ${error.statusText}`} bgColor="#dc3545"/>}
        {/* si no hay datos no cargará */}
        {db && <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        ></CrudTable>}
      </article>
    </>
  );
};

export default CrudApi;
