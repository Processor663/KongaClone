import React from "react";
import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import NavContainer from "./components/navContainer/NavContainer";
import HeroSection from "./components/heroSection/HeroSection";
import TodayDealContainer from "./components/todayDeal/TodayDealContainer";
import FooterContainer from "./components/footer/FooterContainer";
import FixedDownNav from "./components/FixedDownNav/FixedDownNav";


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Banner />
      <Banner2 />
      <header style={{ position: "sticky", top: 0, zIndex: 999999999 }}>
        <nav>
          <NavContainer />
        </nav>
      </header>
      <main>
        <HeroSection />
        <TodayDealContainer />
      </main>
      <footer>
        <FooterContainer />
      </footer>
      <FixedDownNav />
    </div>
  );
};

export default App;
