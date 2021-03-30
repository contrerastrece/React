// imrse atajo Snipets
import React, { useState} from "react";

const initialForm = {
  id: null,
  name: "",
  type: "",
};

const CrudForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};
  return (
    <div>
      <h3>Agregar</h3>
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
