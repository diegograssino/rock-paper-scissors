import React from "react";
import {createGlobalStyle} from "styled-components";

import Home from "./pages/Home/Home";
function App(): JSX.Element {
  const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Poppins', sans-serif;
	}`;

  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
