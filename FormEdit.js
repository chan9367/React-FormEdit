import React, { Component } from "react";

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lastname: "",
      Firstname: "",
    };
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }

  handleLastNameChange(event) {
    this.setState({
      Lastname: event.target.value,
    });
  }
  handleFirstNameChange(event) {
    this.setState({
      Firstname: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>Last Name:</p>
        <input
          type="text"
          value={this.state.Lastname}
          onChange={this.handleLastNameChange}
        />
        <button>Edit</button>
        <div></div>
        <p>First Name:</p>
        <input
          type="text"
          value={this.state.Firstname}
          onChange={this.handleFirstNameChange}
        />
        <button>Edit</button>
      </div>
      
    );
  }
}

export default FormEdit;
