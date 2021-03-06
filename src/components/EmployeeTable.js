import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import "bootstrap/dist/css/bootstrap.min.css";

class EmployeeTable extends Component {
  state = {
    order: "ascending",
    search: "",
  };

  handleSort = () => {
    this.setState({
      order: this.state.order === "ascending" ? "descending" : "ascending",
    });
  };

  render() {
    this.props.employees.sort((a, b) => {
      let aName = a.last_name;
      let bName = b.last_name;
      if (aName === bName) {
        return 0;
      }
      if (this.state.order === "ascending") {
        if (aName < bName) {
          return -1;
        }
        return 1;
      }
      if (aName < bName) {
        return 1;
      }
      return -1;
    });

    return (
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th onClick={this.handleSort} scope="col">
                  Last Name
                </th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {this.props.employees.map((employee) => {
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
