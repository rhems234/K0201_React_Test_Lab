import React from "react";

function Button(props) {
  return (
    // class-name -> jsx 문법에서 카멜 표기법 표시.
    <button className="{`bg-${props.color}`}">
      <b>{props.children}</b>
    </button>
  );
}

export default Button;
