import React from "react";
import { getToken, seeToken } from "./services/api";

const App = () => {
  const getCookieHandler = async () => {
    try {
      const data: any = getToken();
      console.log(data?.data);
    } catch (e) {
      console.log(e);
    }
  };
  const seeCookieHandler = async () => {
    try {
      const data: any = seeToken();
      console.log(data?.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="flex gap-4">
        <button onClick={getCookieHandler} className="border">
          Get Cookie
        </button>
        <button onClick={seeCookieHandler} className="border">
          See Cookie
        </button>
      </div>
    </div>
  );
};

export default App;
