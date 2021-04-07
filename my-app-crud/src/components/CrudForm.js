// imrse atajo Snipets
import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: "",
  type: "",
};

// destructuramos de las propiedades
const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);
// se ejecutará cuano la varibale dataToEdit haya cambiado
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type) {
      alert("Datos Incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit?"Editar":"Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Pokemon"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={handleChange}
          value={form.value}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Clear" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
