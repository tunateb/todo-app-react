import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class RenderList extends React.Component {
  render() {
    if (this.props.todos.length > 0) {
      return (
        <ul className="todo-list p-0 mb-0 text-light">
          {this.props.todos.map((todoItem, index) => {
            return (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ml-2">{todoItem}</div>

                <button
                  className="btn-sm trash-btn"
                  onClick={this.props.onDelete}
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
  }
}

export default RenderList;
