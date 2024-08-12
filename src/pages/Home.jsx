import React from "react";
import Homesec from "../components/Homesec";
import Footern from "../components/Footer";
import ImageComponent from "../components/Image";
import LandingPageContent from "../components/LandingPageContent";

const Home = () => {
  return (
    <>
      <Homesec />
      <ImageComponent />
      <LandingPageContent />
      <Footern />
    </>
  );
};

export default Home;
