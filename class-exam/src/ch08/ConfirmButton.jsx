import React, { Component } from "react";

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inConfirmed: false,
    };

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.inConfirmed,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
          {this.state.isConfirmed ? "확인됨" : "확인하기"}
        </button>
      </div>
    );
  }
}

export default ConfirmButton;
