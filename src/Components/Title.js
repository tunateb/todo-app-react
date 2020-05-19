import React from "react";

class Title extends React.Component {
  render() {
    return (
      <h4 className="title">
        You have <strong>{this.props.todos.length} </strong>
        tasks to complete!
      </h4>
    );
  }
}

export default Title;