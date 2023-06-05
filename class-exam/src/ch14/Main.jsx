import React from "react";
import TestContext from "./TestContext";
import TestContext2 from "./TestContext2";
import TestUser from "./TestUser";

// 순서2. 적용 : provider 적용.
const Main = () => {
  return (
    <TestContext.Provider value="25">
      <TestContext2 value="박준성">
        <div>
          <TestUser />
        </div>
      </TestContext2>
    </TestContext.Provider>
  );
};

export default Main;
