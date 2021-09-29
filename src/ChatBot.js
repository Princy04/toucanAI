import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import styled from "styled-components";
import steps from "./steps";

const ChatBotComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>Toucan AI ChatBot</div>
      <ChatBot botDelay={1500} steps={steps} floating={true} opened={open} />
    </>
  );
};

export default ChatBotComponent;
