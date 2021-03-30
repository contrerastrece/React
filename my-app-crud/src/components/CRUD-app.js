import React, { useState } from 'react';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "bulbasaur",
    type: "planta 🍃",
  },
  {
    id: 2,
    name: "ivysaur",
    type: "planta 🍃",
  },
  {
    id: 3,
    name: "venusaur",
    type: "planta 🍃",
  },
  {
    id: 4,
    name: "charmander",
    type: "fuego 🔥",
  },
  {
    id: 5,
    name: "charmeleon",
    type: "fuego 🔥",
  },
  {
    id: 6,
    name: "charizard",
    type: "fuego 🔥",
  },
];

// sfc snippet
const CRUDApp = () => {
  const [db,setDb]=useState(initialDB)
  return (
    <>
      <h2>CRUD APP</h2>
      <CrudForm></CrudForm>
      <CrudTable data={db}></CrudTable>
    </>
  );
};

export default CRUDApp;
