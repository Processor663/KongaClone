import React, { useEffect } from "react";
import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import NavContainer from "./components/navContainer/NavContainer";
import HeroSection from "./components/heroSection/HeroSection";
import TodayDealContainer from "./components/todayDeal/TodayDealContainer";
import FooterContainer from "./components/footer/FooterContainer";
import FixedDownNav from "./components/FixedDownNav/FixedDownNav";

// ANIMATION OF SCROLL
import AOS from "aos";
import "aos/dist/aos.css";
import FixedKongaLive from "./components/FixedKongaLive/FixedKongaLive";

const App = () => {
  useEffect(() => {
     AOS.init({
       delay: 0, // values from 0 to 3000, with step 50ms
       duration: 400, // values from 0 to 3000, with step 50ms
       offset: 400, // offset (in px) from the original trigger point
       once: false, // whether animation should happen only once - while scrolling down
      //  mirror: false, // whether elements should animate out while scrolling past them
     });
      // AOS.refresh();
}, []);

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
      <FixedKongaLive />
      <FixedDownNav />
    </div>
  );
};

export default App;
