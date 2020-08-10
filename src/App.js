import React, { Component } from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import employees from "./employees.json";
import TableHeader from "./components/TableHeader";

class App extends Component {
  state = {
    employees,
  };
  render() {
    return (
      <div>
        <TableHeader />
        {this.state.employees.map((employee) => (
          <EmployeeTable
            key={employee.id}
            id={employee.id}
            firstName={employee.first_name}
            lastName={employee.last_name}
            email={employee.email}
            gender={employee.gender}
          />
        ))}
      </div>
    );
  }
}

export default App;
