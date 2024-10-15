import { createContext, useState } from "react";
import CardOne from "./Card";
import React from "react";
import Button from "./Button";

export const ThemeContext = createContext();
export const ButtonContext = createContext();

const Index = () => {
  const [theme, setTheme] = useState("bg-black");
  const [counter, setCounter] = useState(1);

  const toggleTheme = () => {
    if (counter === 1) {
      setTheme("bg-white");
      setCounter(counter + 1);
      // console.log("asdfghj")
    } else {
      setTheme("bg-black");
      setCounter(1);
      // console.log("Bhautik");

    }
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ButtonContext.Provider value={toggleTheme}>
          <CardOne />
          <Button />
        </ButtonContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default Index;