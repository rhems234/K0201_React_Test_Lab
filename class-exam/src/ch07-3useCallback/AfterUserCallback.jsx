// 사용 전 문제점 제시
import React, { useCallback, useState } from "react";

// 집합 -중복 안됌
const test = new Set();

const AfterUseCallback = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);

  // 순서 2적용
  // useCallback(함수, 의존성 배열) -> 의존성 배열의 변수가 변경시에만, 함수가 재정의 되면 된다.
  // 의존성 배열의 모양 3가지
  // 1) 배열 없음 2) 빈 배열 :[] -> 최초 1회만 함수 호출. 3) [변수] -> 변수가 변경시에만 함수 호출.
  // 문제점 -> 추가 버튼 클릭시 -> 함수 printLog가 계속 정의가 되고 있음(메모리를 계속 사용함.)
  // 같은 기능의 함수이지만, 참조하는 메모리는 계속 다릅니다. 그래서 집합(set) , 요소가 다르게 인식을해서
  // 계속 추가 되고 있음.
  // 해결책 : 함수를 한번만 정의를 하자.

  // 업데이트 할 때마다, 해당 함수가 계속 정의되는 문제.
  const printLog = useCallback(
    () => console.log("재실행되는 printLog 함수."),
    []
  );
  // test : 집합
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

export default AfterUseCallback;
