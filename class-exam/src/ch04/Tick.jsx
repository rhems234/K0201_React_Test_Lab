import React from "react";

// 화살표 함수 = 익명함수, 자체로 쓰기는 힘들고
// 변수에 할당해서 사용한다.
function Tick(props) {
  return (
    <div>
      <h1>현재 시간 : {new Date().toLocaleTimeString()}</h1>
      <h2>{`토요일 일정 : ${props.sat}`}</h2>
      <h2>{`일요일 일정 : ${props.sun}`}</h2>
    </div>
  );
}
export default Tick;
