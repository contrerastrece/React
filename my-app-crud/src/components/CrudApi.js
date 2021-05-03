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
  let url = "http://localhost:5000/pokemons";

  useEffect(() => {
    setLoading(true);
    helpHttp().get(url).then((res) => {
      // console.log(res);
      // si no existe ningún error llenaremos nuestra db
      if (!res.err) {
        setDb(res);
        // asignamos el error a null
        setError(null);
      } else {
        setDb(null);
        // asignamos el error que llega en la variable res
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  // creamos nuestras funtion para el CRUD
  const createData = (data) => {
    // console.log(data)
    data.id = Date.now();
    // estás options no las agregamos a nuestro helperHttp 
    // porque dependerá el tipo de cabecera de la API que vayamos a usar.
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });    
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let endPoint=`${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endPoint,options).then(res=>{
      console.log(res);
      if(!res.err){
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      }else{
        setError(res);
      }
    })
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estás seguro de eliminar al pokemon con el ID ${id}?`
    );

    if (isDelete) {
      // filtramos a todos los elementos diferentes al id y esto lo guardamos a newData.
      // finalmente mostramos newData filtrado
      let endpoint=`${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint,options).then(res=>{
        if(!res.err){
          console.log(res);
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
          
        }else{
          setError(res);
        }
      })
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
        {loading && <Loader />}
        {/* si existe error cargará el componente */}
        {error && (
          <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />
        )}
        {/* si no hay datos no cargará */}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </>
  );
};

export default CrudApi;
