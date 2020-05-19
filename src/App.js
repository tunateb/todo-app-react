import React from "react";
import "./Styles.css";
import RenderList from "./Components/RenderList";
import Title from "./Components/Title";
import Logo from "./Components/Logo";
import TodoForm from "./Components/TodoForm";

class App extends React.Component {
  state = {
    todo: "",
    todos: [],
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
    return (
      <div className="container-sm text-center">
        <Logo />
        <Title todos={this.state.todos} />
        <div className="card w-50 mx-auto mt-3 list-wrapper">
          <TodoForm
            onSubmit={this.handleSubmit}
            todo={this.state.todo}
            onChange={this.handleChange}
          />
          <RenderList todos={this.state.todos} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;
