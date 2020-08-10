import React from "react";

function EmployeeTable(props) {
  return (
    <React.Fragment>
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <th scope="row">{props.id}</th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.gender}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default EmployeeTable;
