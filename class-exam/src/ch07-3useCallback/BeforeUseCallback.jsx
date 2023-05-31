// 사용 전 문제점 제시
import React, { useState } from "react";

// 집합 -중복 안됌
const test = new Set();

const BeforeUseCallback = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const printLog = () => console.log("재실행되는 함수.");
  test.add(printLog);
  console.log(test);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>1 추가</button>
      <button onClick={printLog}>출력</button>
    </div>
  );
};

export default BeforeUseCallback;
