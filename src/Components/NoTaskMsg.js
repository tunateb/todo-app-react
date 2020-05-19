import React from "react";

class NoTaskMsg extends React.Component {
  render() {
    return (
      <div className="card bg-warning text-center">
        <h5>There are no tasks to do. Please add some...</h5>
      </div>
    );
  }
}

export default NoTaskMsg;
