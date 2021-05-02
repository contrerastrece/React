import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // creamos nuestro objeto AbortController por si nuestra API sufre algún imprevisto y no nos devuelva una respuesta
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        // si hay un error, personalizaremos nuestro error y lo lanzaremos con thrwo al catch para que lo capture
        if (!res.ok) {
          let err = new Error("Error en la Petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";

          throw err;
        }

        const json = await res.json();
        // si abort no ha arrojado ningún error, entonces pasaremos json a nustro  useState setData
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          // finalmente cuando haya terminado de pasar por try y el catch asignaremos el setLoading a False
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
