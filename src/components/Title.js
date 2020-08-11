import React from "react";

const Title = () => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
        <hr className="my-4"></hr>
      </div>
    </React.Fragment>
  );
};

export default Title;
