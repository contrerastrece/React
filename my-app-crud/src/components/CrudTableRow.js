const CrudTableRow = ({el}) => {
  return (<tr>
    <td>{el.name}</td>
    <td>{el.type}</td>
    <td>
      <button>Edit</button>
      <button>Delet</button>
    </td>
  </tr>  );
}
 
export default CrudTableRow;