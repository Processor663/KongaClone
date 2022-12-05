import React from "react";
import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import NavContainer from "./components/navContainer/NavContainer";
import HeroSection from "./components/heroSection/HeroSection";


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <header>
        <Banner />
        <Banner2 />
        <NavContainer />
      </header>
      <main>
        <HeroSection />
        <div>jfhfhfhfhfhf
          jhhfhhffjf
          djdhdhffhfhff
          jvjhfhfjfnshdjkdkd
          nvnvnvnv
        </div>
      </main>
    </div>
  );
};

export default App;
