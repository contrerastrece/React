import React, { useState } from "react";

const SongForm = ({ handleSearch }) => {
  const initialForm = {
    artist: "",
    song: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    // va tomar una copia del obj formulario y lo va combinar con
    //  el que extraes del evento de la target
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Datos vacios");
      return;
    }
    handleSearch(form)
    setForm(initialForm)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          onChange={handleChange}
          value={form.artist}
        ></input>
        <input
          type="text"
          name="song"
          placeholder="Song"
          onChange={handleChange}
          value={form.song}
        ></input>
        <input type="submit" value="send"></input>
      </form>
    </div>
  );
};

export default SongForm;
