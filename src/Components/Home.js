import React from "react";
import Content from "./Content";
import Event from "./Events";
import Notice from "./Notice";
import FrequentlyQuestion from "./question";
import Services from "./Service";
import Slider from "./Slider";
import WhywWExist from "./whyWeExist";

function Home(){
    return(<>
      <Slider></Slider>
      {/* who we are  and our purpose*/}
      <Content></Content>
      {/* notice */}
      <Notice ></Notice>

      <WhywWExist></WhywWExist>
      {/* blog */}
      <Services></Services>
      <FrequentlyQuestion></FrequentlyQuestion>
      <Event></Event>
    </>)
}
export default Home;