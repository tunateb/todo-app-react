import React from "react";
import TrashBtn from "./TrashBtn";

class TodoMap extends React.Component {
  render() {
    return (
      <ul className="todo-list p-0 mb-0 text-light">
        {this.props.todos.map((todoItem, index) => {
          return (
            <li
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="ml-2">{todoItem}</div>
              <TrashBtn onClick={this.props.onDelete} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoMap;
