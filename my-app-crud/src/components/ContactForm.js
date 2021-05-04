import { useForm } from "../hooks/useForm";

// inicializando con cadenas vacías
const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  // si el cmapo nombre está vacio
  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  }else if(!regexName.test(form.name.trim())){
    errors.name="El campo Nombre solo aceptan letras y espacios en blanco"
  }
  // si el cmapo nombre está vacio
  if (!form.email.trim()) {
    errors.email = "El campo Email es requerido";
  }else if(!regexEmail.test(form.email.trim())){
    errors.email="El campo Email solo aceptan email válidos"
  }
  // si el cmapo nombre está vacio
  if (!form.subject.trim()) {
    errors.subject = "El campo Asunto a tratar es requerido";
  }
  // si el cmapo nombre está vacio
  if (!form.comments.trim()) {
    errors.comments = "El campo Comentarios es requerido";
  }else if(!regexComments.test(form.comments.trim())){
    errors.comments="El campo Coments debe de contener 1-255 caracteres"
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#cd3545",
};
const ContactForm = () => {
  // destructuramos los datos que trae nuestro Hook personalizado
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Form Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {/* si error name contiene información debemos mostralo */}
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tu comentaroio"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}

        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
