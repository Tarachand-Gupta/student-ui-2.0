import React from "react";
import { useParams } from "react-router-dom";

function MainChatScreen() {
  let { chatId } = useParams();
  return <div>Main Chat Screen With {chatId}</div>;
}

export default MainChatScreen;
