import React from "react";
// import SingleProductPage from "../Pages/SingleProductPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Templet from "./Templet";
import Slider from "./SliderSky";
import SliderMarvell from "./SliderMarvell";
import SliderAero from "./SliderAero";

const FrontPageLayout = () => {
  return (
    <>
       <Navbar></Navbar>
      <Templet></Templet>
       <Slider></Slider>
       <SliderAero></SliderAero>
      <SliderMarvell></SliderMarvell> 
      <Footer></Footer>  
{/* <SingleProductPage></SingleProductPage> */}
    </>
  );
};

export default FrontPageLayout;
