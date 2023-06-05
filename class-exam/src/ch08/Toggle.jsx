import React, { Component } from "react";

// 클래스형 컴포넌트 보다 함수형 공부를 더하는 것을 추천.
// 클래스형은 지금은, 자바, 코틀린, 자바스크립트, 간단히 로직을 이해하는 정도.
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // this를 사용할 수 있음.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "켜짐" : "꺼짐"}
        </button>
      </div>
    );
  }
}

export default Toggle;
