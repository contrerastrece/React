import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  console.log(url);
  // destructuramos el useFetch porque el hook personalizado nos retorna tres valores, data,error,loading
  const { data, error, loading } = useFetch(url);

  // console.log(data,error,loading);

  // si la data está vacia retornamos un null
  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}:${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt().toUpperCase() + title.slice(1);
// option dinámico para no estar haciendo data.poke_species o data.types
// lo utilizamos inteligentemente en el title el nombre de la propiedad
  let options = data[title];
  console.log(options);

  return title === "generation" ? (
    <div>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          data.results.map((el) => (
            <option value={el.name} key={el.name}>
              {el.name}
            </option>
          ))}
      </select>
    </div>
  ) : (
    <div>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option value={el.name} key={el.name}>
              {el.name}
            </option>
          ))}
      </select>
    </div>
  );
  
};

export default SelectList;
