import { useState } from "react";
import { helpHttp } from "../helpers/helpersHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  // evento para que se dispare para las validaciones cuado pierda el foco
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  // emvió de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(form));

    // si nuestro objet con la llave errors no tiene datos es porque
    // no hay ningún error almacenado por eso enviaremos nuestro alert
    console.log(Object);
    if (Object.keys(errors).length === 0) {
      alert("Enviando datos");
      setLoading(true);

      helpHttp()
        .post("https://formsubmit.co/ajax/contrerastrece@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          // reseterar los campos del formulario
          setForm(initialForm);
          // después de 3s ocultar el componente messagen
          setTimeout(()=>setResponse(false),3000)
        });
    } else {
      return;
    }
  };

  // retornamos los valores en un objeto para que lo rciba en contactForm
  return {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  };
};
