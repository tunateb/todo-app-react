import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="row justify-content-center mt-3 rounded">
          <div className="form-group mt-3 col col-9 pr-0">
            <input
              type="text"
              className="form-control"
              id="todos-form"
              placeholder="Enter a task..."
              value={this.props.todo}
              onChange={this.props.onChange}
            ></input>
          </div>
          <div className="col col-3 my-3 pl-0">
            <button className="btn btn-success w-100">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TodoForm;
