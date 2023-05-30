// 자식 컴포넌트 처럼 사용할 예정.
// 부모 컴포넌트 해당 Noti(목록 요소) -> 리스트
// css 요소를 설정하거나, scss, sass 관련 내용이, 15장에서 나오는데, 뒤에서 설명을
// 지금은 해당 클래스 컴포넌트, 함수형 컴포넌트, 해당 파읾안에 css  같이 작업을 하겠음.
// 원래는 css 파일을 분리.

// 예제 클래스 컴포넌트로 연습 : rcc
import React, { Component } from "react";

// 순서 1 : css 구성.
// styles 타입 -> 객체 -> 리터럴 타입으로 객체 선언하는 방식.
// 변수 선언할 때, 타입은 기본은 const로 선언해서 사용하고,
// 만약에 변경이 되는 값 이면, let을 사용하면 됨.
const styles = {
  // 요소의 바깥부분의 스타일
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    // 기본 flex 옵션은 row, 가로 방향 배치,
    // 안드로이드 리니어 레이아웃과 비슷.
    flexDirection: "row",
    border: "3px",
    // 원래 해당 css 요소의 속성을 나타낼 때, border-radius
    // 리액트의 jsx 요소에서는 해당 속성은 카멜 케이스로 표기 : borderRadius
    borderRadius: 16,
  },
  // 특정 메세지 창의 스타일
  messageText: {
    color: "green",
    fontSize: 28,
  },
};

// 자식
class Noti extends Component {
  // 클래스 컴포넌트는 반드시 부모의 Component 상속 받아서 사용하고,
  // state를 사용할려면, super를 호출해야함. 의무사항.
  constructor(props) {
    // state 사용시 마치 세트처럼, 이용이 된다. 아래의 두 문장.
    // 클래스 컴포넌트에서는 해당 state 상태에 접근시 this.state로 접근한다.
    super(props);
    this.state = {};
  }

  // 자식 부분에서 각 생명주기 함수들 콘솔로 찍어서 확인해보기.
  componentDidMount() {
    console.log("componentDidMount() 호출이 되었음");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() 호출이 되었음");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() 호출이 되었음");
  }

  render() {
    return (
      // 바깥 부분 div 요소에 스타일 적용하기.
      // 위에 상단에 정의 된 styles라는 객체를 이용.
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Noti;
