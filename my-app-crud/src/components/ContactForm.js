import { useForm } from "../hooks/useForm";

const initialForm = {};

const validationsForm = (form) => {};

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
        <input
          type="email"
          name="email"
          placeholder="Escribe tu Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tu comentaroio"  onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required></textarea>

          <input type="submit" value="enviar"/>
      </form>
    </div>
  );
};

export default ContactForm;
