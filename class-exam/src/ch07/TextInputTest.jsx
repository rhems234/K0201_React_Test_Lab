//순서1
import React, { useRef } from "react";

const TextInputTest = (props) => {
  //순서2, useRef()를 통해서 이름표 만들기.
  const inputElem = useRef(null);
  const onButtonClick = () => {
    // 아직 이름표를 안달았음.
    // 내가 궁금한 태그를 선택 안했음.
    // 아래에 인풋 태그의 속성을 변경하고 싶음.
    // 버튼을 눌렀을 때, 해당 인풋에 속성중에서 focus를 사용하고 싶음.
    // 순서4, 내가 선택한 태그의 속성의 기능을 사용.
    inputElem.current.focus();
  };

  return (
    <div>
      <>
        {/* 순서 3, 위에 정의한 이름표를 이용해서, 내가 사용할 태그 선택 : ref={inputElem}  */}
        <input ref={inputElem} type="text" />
        <button onClick={onButtonClick}>입력창에 포커스 주기.</button>
      </>
    </div>
  );
};

export default TextInputTest;
