//TestAfter.jsx
//useMemo를 이용해서,  오래 걸리는 연산 값은 한번 수행 후, 메모했다가. 재사용하고.
// 만약, 오래 걸리는 연산 값이 변경이 될 때에만, 수행을 하자.
//순서1
import React, { useState, useMemo } from "react";

const TestAfter = () => {
  // 변경되지 않는 값 예시
  const [imNum, setImNum] = useState(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("click 추가 버튼");
    setCount(count + 1);
  };

  // 오래 걸리는 연산 작업 예시
  // useMemo 적용. useMemo(함수, 의존성 배열)
  //-> 의존성 배열 안에 변수, imNum 가 변경시에만, 함수가 다시 호출이 된다.
  // 적용 순서2
  // calcComValue : 사용전에 함수이지만,
  // calcComValue: useMemo 사용하면, 결과 값
  const calcComValue = useMemo(() => {
    console.log("복잡한 계산 중.....");
    return (imNum + 3 * 7 * 99999 * 9999999) / 0.123456;
  }, [imNum]);

  return (
    <div className="App">
      <p>count: {count}</p>
      <button onClick={increase}>+1 추가</button>
      {/* 결과값 적용부분에 값으로 변경 */}
      {/* <p>복잡한 연산 결괏값 : {calcComValue()}</p> */}
      <p>복잡한 연산 결괏값 : {calcComValue}</p>
    </div>
  );
};

export default TestAfter;
