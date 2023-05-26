// 비구조화 할당 부분, 디폴트 props 부분, propTypes.
// import React from "react";
// import PropTypes from "prop-types";

// rsc -> 함수형 컴포넌트 자동 스니펫
// rcc -> 클래스형 컴포넌트 자동 스니펫

import React, { Component } from "react";
import PropTypes from "prop-types";

class MyTest1 extends Component {
  static defaultProps = {
    name: "기본이름",
  };

  // eslint-disable-next-line react/no-typos
  static PropTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
  };
  render() {
    // 비구조화 할당. this.props는 하나의 객체입니다.
    // 수납도구, 여기에는 여러 가지의 속성이 있음.
    // ex) this.props.name
    // ex) this.props.number
    // ex) this.props.children
    const { name, number, children } = this.props;
    return (
      <div>
        <h1>이름 : {name}</h1>
        <h1>아이 : {children}</h1>
        <h1>숫자 : {number}</h1>
      </div>
    );
  }
}

// 디폴트 props 선언

//props 타입 지정및, 설정을 안했을 시 에러 체크

export default MyTest1;

// const MyTest1 = ({ name, number, children }) => {
//   return (
//     <div>
//       이름은 : {name}입니다. <br />
//       children 값 : {children} <br />
//       좋아하는 숫자 {number}
//     </div>
//   );
// };
