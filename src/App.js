import React from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";

import GlobalStyle from "./components/GlobalStyle";
import NavContainer from "./components/navContainer/NavContainer";


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <header>
        <Banner />
        <Banner2 />
        <NavContainer />
      </header>
    </div>
  );
};

export default App;
