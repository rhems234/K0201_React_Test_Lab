import React from "react";
import AvatarImg from "./AvatarImg";
import logo from "./img/kakaoicon.png";

const styles = {
  wrapper: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    borderRadius: "16",
  },

  Image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  contentContainer: {
    marginleft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontsize: 18,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontsize: 18,
  },
};

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.Image}>
        <AvatarImg src={logo} alt="사진1" />
      </div>
      <h1>테스트 컴포넌트</h1>
    </div>
  );
};

export default Comment;
