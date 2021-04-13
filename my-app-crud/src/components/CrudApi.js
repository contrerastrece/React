import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

// sfc snippet
const CrudApi = () => {
  const [db, setDb] = useState([]);
  // cuando esté en Nulo haremos un Insert, y si  tiene un valor haremos un Update
  const [dataToEdit, setDataToEdit] = useState(null);
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
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        ></CrudTable>
      </article>
    </>
  );
};

export default CrudApi;
