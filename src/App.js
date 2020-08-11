import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import SearchInput from "./components/SearchInput";
import EmployeeTable from "./components/EmployeeTable";
import employeesJSON from "./utils/employees.json";

function App() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!search) {
      setEmployees(employeesJSON);

    } else {
      let employeesArray = employeesJSON.filter((employee) => {
        return employee.first_name.toLowerCase().includes(search.toLowerCase());
      });
      setEmployees(employeesArray);
    }
  }, [search]);
  return (
    <div>
      <Title />
      <SearchInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
