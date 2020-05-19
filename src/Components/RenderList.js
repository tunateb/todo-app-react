import React from "react";
import NoTaskMsg from "./NoTaskMsg";
import TodoMap from "./TodoMap";

class RenderList extends React.Component {
  render() {
    if (this.props.todos.length > 0) {
      return (
        <TodoMap todos={this.props.todos} onDelete={this.props.onDelete} />
      );
    } else return <NoTaskMsg />;
  }
}

export default RenderList;
