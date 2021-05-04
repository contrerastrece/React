import { useState } from "react";

export const useForm = ( initialForm ,validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const {name, value}=e.target;

    setForm({
      ...form,
      [name]:value
    })

  };
  // evento para que se dispare para las validaciones cuado pierda el foco
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form))
  };
  // emvió de formulario
  const handleSubmit = (e) => {};


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

