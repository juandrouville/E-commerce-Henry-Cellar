import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// all available theme props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// all available config props
const config ={
    width: "400px",
    height: "500px",
    floating: true,
  };

const SimpleForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: "intro",
            message: "Hello. What is your name?",
            trigger: "intro-user",
          },
          {
            id: "intro-user",
            user: true,
            end: true,
          },
        ]}
        {...config}
      />
    </ThemeProvider>
  );
};

export default SimpleForm;
