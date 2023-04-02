import React from "react";
import Videopalyer from "./components/video-player/Videoplayer";
import { Carousel } from "./components/carousel/carousel";
import caroselData from "./data/carousel.json"


// const List = () => {
//   return(
//     <div>List</div>
//   )
// }
const App = () => {
  return <div>
    <Videopalyer />
    {/* <Carousel data={caroselData}></Carousel> */}
  </div>;
};

export default App;
