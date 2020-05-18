import React from "react";
import "./Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  state = {
    todo: "",
    todos: ["CSS", "Javascript", "React"],
  };

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.todo] });
    this.setState({ todo: "" });
  };

  handleDelete = (props) => {
    this.state.todos.splice(props, 1);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div className="container-sm mt-5 text-center">
        <h3>You have {this.state.todos.length} tasks to complete!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="row justify-content-center mx-auto my-3 w-50 bg-secondary rounded">
            <div className="form-group mt-3 col col-9 pr-0">
              <input
                type="text"
                className="form-control"
                id="todos-form"
                placeholder="Enter a task..."
                value={this.state.todo}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="col col-3 my-3 pl-0">
              <button className="btn btn-success px-5">Add</button>
            </div>
          </div>
        </form>
        <div className="card m-auto w-50">
          <ul className="todo-list p-0 mb-0 text-light">
            {this.state.todos.map((todoItem, index) => {
              return (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  {todoItem}
                  <button className="btn-sm" onClick={this.handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
