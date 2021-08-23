import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import Filtros from "../FIltros/filtros";
import chatbotSprite from "../../assets/images/ChatbotSprite.jpg";

// all available theme props
const theme = {
  background: "#023047",
  fontFamily: "Bookman",
  headerBgColor: "#219ebc",
  headerFontColor: "#f1faee",
  headerFontSize: "15px",
  botBubbleColor: "#219ebc",
  botFontColor: "#f1faee",
  userBubbleColor: "#457b9d",
  userFontColor: "#f1faee"
};

// all available config props
const config = {
  width: "400px",
  height: "500px",
  floating: true
};

const SimpleForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        botAvatar={chatbotSprite}
        steps={[
          {
            id: "1",
            message: "What language do you prefer? / ¿Qué lenguaje prefieres?",
            trigger: "2"
          },
          {
            id: "2",
            options: [
              { value: 1, label: "English", trigger: "3 English" },
              { value: 2, label: "Español", trigger: "3 Español" }
            ]
          },
          {
            id: "3 English",
            message: "My name is Bob the Chatbot, what is yours?",
            trigger: "3/2 English"
          },
          {
            id: "3/2 English",
            user: true,
            trigger: "4 English"
          },
          {
            id: "4 English",
            message: "Hello {previousValue}. What can I help you with?",
            trigger: "5 English"
          },
          {
            id: "5 English",
            options: [
              {
                value: 1,
                label: "I'm looking for a specific wine",
                trigger: "6 English"
              },
              {
                value: 2,
                label: "I want a specific kind of wine",
                trigger: "7 English"
              }
            ]
          },
          {
            id: "6 English",
            message: "Try using the searchbar!",
            trigger: "8 English"
          },
          {
            id: "7 English",
            message: "Which kind of wine are you looking for?",
            trigger: "9 English"
          },
          {
            id: "8 English",
            component: <SearchBar />,
            trigger: "10 English"
          },
          {
            id: "9 English",
            component: <Filtros />,
            trigger: "10 English"
          },
          {
            id: "10 English",
            message: "Do you need anything else?",
            trigger: "11 English"
          },
          {
            id: "11 English",
            options: [
              { value: 1, label: "Yes please", trigger: "12 English" },
              { value: 2, label: "No, thanks", trigger: "13 English" }
            ]
          },
          {
            id: "12 English",
            message: "What do you need?",
            trigger: "5 English"
          },
          {
            id: "13 English",
            message: "I'm glad I could help!",
            end: true
          },
          /////////////////////////////////////////////////////////////////////////////////////////////////
          {
            id: "3 Español",
            message: "Mi nombre es Bob el bot de chat, ¿Cuál es el tuyo?",
            trigger: "3/2 Español"
          },
          {
            id: "3/2 Español",
            user: true,
            trigger: "4 Español"
          },
          {
            id: "4 Español",
            message: "Hola {previousValue}. ¿En qué puedo ayudarte?",
            trigger: "5 Español"
          },
          {
            id: "5 Español",
            options: [
              {
                value: 1,
                label: "Estoy buscando un vino en específico.",
                trigger: "6 Español"
              },
              {
                value: 2,
                label: "Busco un tipo de vino en específico.",
                trigger: "7 Español"
              }
            ]
          },
          {
            id: "6 Español",
            message: "Prueba usando la barra de búsqueda!",
            trigger: "8 Español"
          },
          {
            id: "7 Español",
            message: "Prueba usando los filtros!",
            trigger: "9 Español"
          },
          {
            id: "8 Español",
            component: <SearchBar />,
            trigger: "10 Español"
          },
          {
            id: "9 Español",
            component: <Filtros />,
            trigger: "10 Español"
          },
          {
            id: "10 Español",
            message: "¿Necesitas algo más?",
            trigger: "11 Español"
          },
          {
            id: "11 Español",
            options: [
              { value: 1, label: "Si por favor", trigger: "12 Español" },
              { value: 2, label: "No, gracias", trigger: "13 Español" }
            ]
          },
          {
            id: "12 Español",
            message: "¿Qué necesitas?",
            trigger: "5 Español"
          },
          {
            id: "13 Español",
            message: "¡Me alegra haberte ayudado!",
            end: true
          }
        ]}
        {...config}
      />
    </ThemeProvider>
  );
};

export default SimpleForm;
