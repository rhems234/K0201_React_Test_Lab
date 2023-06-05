import React, { useState } from "react";

const NameForm = (props) => {
  // useState -> 배열을 반환한다. 1번 요소는 변수값, 2번 요수는 세터함수.
  // 첫번째 인풋
  const [value, setValue] = useState("");
  // 두번째 TextArea
  const [textAreaValue, setTextAreaValue] = useState("");
  // 세번째 select
  const [selectValue, setSelectValue] = useState("닭칼국수");

  const handleChange = (event) => {
    //setValue(event.target.value.toLowerCase());
    //setTextAreaValue(event.target.value);
    setSelectValue(event.target.value);
    //console.log("입력한 이름 : " + value);
    //console.log("입력한 댓글 : " + textAreaValue);
    console.log("선택한 점심메뉴 : " + selectValue);
  };

  const handleSubmit = (event) => {
    // alert("입력한 이름 : " + value);
    alert("선택한 메뉴 : " + selectValue);
    // 자바스크립트상 기본 로직, submit 제출, 서버로 넘길 때 사용.
    // 기본 기능을 못하게 방지.
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <label>
        점심 메뉴 고르기 :
        <select value={selectValue} onChange={handleChange}>
          <option value="koreanFood1">돼지국밥</option>
          <option selected value="koreanFood2">
            닭칼국수
          </option>
          <option value="koreanFood3">두루치기</option>
          <option value="koreanFood4">닭야채볶음밥</option>
          <option value="koreanFood5">삼선우동</option>
        </select>
      </label>
      <label>
        댓글 :
        <textarea value={textAreaValue} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default NameForm;
