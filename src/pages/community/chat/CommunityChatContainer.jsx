import React from "react";
import CommunityChatComponent from "./CommunityChatComponent";
import { Outlet } from "react-router-dom";

const CommunityChatContainer = () => {
  console.log("채팅방 영역 그려짐");
  return (
    <div>
      <CommunityChatComponent />
      <Outlet />
    </div>
  );
};

export default CommunityChatContainer;
