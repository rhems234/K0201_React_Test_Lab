import React from "react";

const AvatarImg = (props) => {
  return (
    <div>
      <img src="{props.src}" alt="{props.alt}" />
    </div>
  );
};

export default AvatarImg;
