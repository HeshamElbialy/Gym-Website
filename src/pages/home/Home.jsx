import React from "react";
import FAQs from "../../component/FAQs";
import MainHeader from "../../component/MainHeader";
import Programs from "../../component/Programs";
import Testimonials from "../../component/Testimonials";
import Values from "../../component/Values";
import "./home.css";
const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
