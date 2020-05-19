import React from "react";
import "./Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  state = {
    todo: "",
    todos: ["Js", "Css", "HTML", "Angular", "jQuery"],
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
  };

  render() {
    const renderList = () => {
      if (this.state.todos.length > 0) {
        return (
          <ul className="todo-list p-0 mb-0 text-light">
            {this.state.todos.map((todoItem, index) => {
              return (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="ml-2">{todoItem}</div>

                  <button
                    className="btn-sm trash-btn"
                    onClick={this.handleDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="card bg-warning text-center">
            <h5>There are no tasks to do. Please add some...</h5>
          </div>
        );
      }
    };

    return (
      <div className="container-sm text-center">
        <img className="logo" alt="logo" src={require("./img/logo.png")}></img>
        <h3 className="title">
          You have {this.state.todos.length} tasks to complete!
        </h3>
        <div className="card w-50 mx-auto mt-3 list-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center mt-3 rounded">
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
                <button className="btn btn-success w-100">Add</button>
              </div>
            </div>
          </form>

          <div className="card">{renderList()}</div>
        </div>
      </div>
    );
  }
}

export default App;
