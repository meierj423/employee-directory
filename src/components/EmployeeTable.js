import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow"
import employees from "../utils/employees.json";
import "bootstrap/dist/css/bootstrap.min.css";

class EmployeeTable extends Component {
  state = { employees };
  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => {
                return (
                  <EmployeeRow
                    id={employee.id}
                    key={employee.id}
                    firstName={employee.first_name}
                    lastName={employee.last_name}
                    email={employee.email}
                    gender={employee.gender}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeTable;

// function EmployeeTable() {
//   return (
//     <React.Fragment>
//       <table className="table table-striped table-dark">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">First</th>
//             <th scope="col">Last</th>
//             <th scope="col">Email</th>
//             <th scope="col">Gender</th>
//           </tr>
//         </thead>
//       </table>
//     </React.Fragment>
//   );
// }
