import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function Langue () {
  return (
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
  );
}

export default Langue;
