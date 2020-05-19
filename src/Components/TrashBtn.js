import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class TrashBtn extends React.Component {
  render() {
    return (
      <button className="btn-sm trash-btn" onClick={this.props.onClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    );
  }
}

export default TrashBtn;
