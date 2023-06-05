import React from "react";
import FancyBorder from "./FancyBorder";

const WelcomeDialog = (props) => {
  return (
    <div>
      {/* FancyBorder의 child는 2개 -> h1, p  */}
      <FancyBorder color="red">
        {/* h1 태그의 child -> 어서오세요 */}
        <h1 className="Dialog-title">어서오세요.</h1>
        <p className="Dialog-message">우리 사이트 방문 해주셔서 감사합니다.</p>
      </FancyBorder>
    </div>
  );
};

export default WelcomeDialog;
