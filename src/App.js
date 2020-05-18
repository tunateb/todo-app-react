import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container-sm mt-5 text-center">
        <h3>You have 0 tasks to complete!</h3>
        <form>
          <div className="row justify-content-center mx-auto mt-3 w-50 bg-secondary rounded">
            <div className="form-group mt-3 col col-9 pr-0">
              <input
                type="text"
                className="form-control"
                id="todos-form"
                placeholder="Enter a task..."
              ></input>
            </div>
            <div className="col col-3 my-3 pl-0">
              <button className="btn btn-success px-5">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
