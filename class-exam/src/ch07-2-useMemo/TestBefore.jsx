import React, { useState } from "react";

const TestBefore = () => {
  // 변경되지 않는 값 예시
  const [imNum, setImNum] = useState(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("click 추가 버튼");
    setCount(count + 1);
  };

  // 오래 걸리는 연산 작업 예시
  const calcComValue = () => {
    console.log("복잡한 계산 중...");
    return (imNum + 3 * 7 * 99999 * 9999999) / 0.123456;
  };

  return (
    <div className="App">
      <p>count : {count}</p>
      <button onClick={increase}>+ 1 추가</button>
      <p>복잡한 연산 결괏값 : {calcComValue()}</p>
    </div>
  );
};

export default TestBefore;
