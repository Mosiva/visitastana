import React, { useState } from "react";
import Main from "../components/MainSection";
import MainTwo from "../components/MainSectionTwo";
import Navbar from "../components/Navbar";
import SecondSection from "../components/SecondSection";
import Sidebar from "../components/Sidebar";
import ThirdSection from "../components/ThirdSection";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main />
      <MainTwo />
      <SecondSection />
      <ThirdSection />
    </>
  );
}

export default Home;
