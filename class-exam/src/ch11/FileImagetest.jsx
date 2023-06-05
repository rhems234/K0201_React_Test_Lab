import React, { useState, useRef } from "react";
const styles = {
  image: {
    with: 100,
    height: 100,
    borderRadius: 25,
  },
};

const FileImageTest = () => {
  const [imgFile, setImgFile] = useState("");
  // 참조형 변수, 이름표 설정하고, 특정 태그에 적용해서, 해당 요소의 속성에 접근하기 좋다.
  // 순서 1
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    //순서3, 특정 태그의 속성에 접근.
    const file = imgRef.current.files[0];
    // 브라우저에 내장된 기능(브라우저 API), FileReader, readAsDataURL
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div>
      {/* 업로드 된 이미지 미리보기 */}
      <title>프로필 사진 선택</title>
      <img
        //   조건부 렌더링 -> 표현식으로 삼항다항식을 이용해서, 해당 조건이 참이면 , 참일 때 수행 거짓이면 거짓일때 수행
        src={imgFile ? imgFile : `../lavar.png`}
        alt="프로필 이미지"
        style={styles.image}
      />
      <br />
      {/* 이미지 업로드 input */}
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        // useRef가 적용이됨.
        // 순서2
        ref={imgRef}
      />
    </div>
  );
};

export default FileImageTest;
