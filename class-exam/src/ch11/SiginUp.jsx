import React, { useCallback, useState } from "react";

const SiginUp = (props) => {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassWord] = useState("");
  const [password2, setPassWord2] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeEmail2 = (event) => {
    setEmail2(event.target.value);
  };
  const handleChangePassWord = (event) => {
    setPassWord(event.target.value);
  };
  const handleChangePassWord2 = (event) => {
    setPassWord2(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(`이메일 : ${email}@${email2}`);
    alert(`비밀번호 : ${password}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이메일 :
        <input type="text" value={email} onChange={handleChangeEmail} /> @
      </label>
      <label>
        <select value={email2} onChange={handleChangeEmail2}>
          <option value="naver.com">naver.com</option>
          <option selected value="daum.net">
            daum.net
          </option>
          <option value="google.com">google.com</option>
          <option value="nate.com">nate.com</option>
        </select>
      </label>
      <br></br>
      <label>
        비밀번호 :
        <input type="text" value={password} onChange={handleChangePassWord} />
      </label>
      <br></br>
      <label>
        비밀번호 확인 :
        <input type="text" value={password2} onChange={handleChangePassWord2} />
      </label>
      <br></br>
      <button type="submit">제출</button>
    </form>
  );
};

export default SiginUp;
