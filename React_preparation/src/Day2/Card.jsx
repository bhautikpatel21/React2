import React, { useContext } from "react";
import { ThemeContext } from ".";

export default function CardOne() {
  const  theme = useContext(ThemeContext);

  return (
    <>
      <div className={`relative h-[100vh] w-[100vw] rounded-md ${theme}`}> </div>
    </>
  );
}