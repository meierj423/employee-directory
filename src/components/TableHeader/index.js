import React from "react";

function TableHeader() {
  return (
    <React.Fragment>
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
      </table>
    </React.Fragment>
  );
}

export default TableHeader;
