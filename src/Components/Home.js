import image1 from "../images/Loginimage.jpg";
import image2 from "../images/carred.jpg";
import image3 from "../images/contact.jpg";
import {
  AiOutlineVerticalRight,
  AiOutlineVerticalLeft,
  AiFillCar,
  AiFillCheckCircle,
} from "react-icons/ai";
import { TiLocation, TiCalendar } from "react-icons/ti";
import React, { useEffect, useState } from "react";
const featuredImages = [image1, image2, image3];
function Home() {
  let count = 0;
  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };
  // useEffect(() => {
  //   startSlider();
  // }, []);

  // const startSlider = () => {
  //   setInterval(() => {
  //     handleOnNextClick();
  //   }, 3000);
  //};
  const [currentIndex, setCurrentIndex] = useState(0);
  const mystyle = {
    fontFamily: "Product Sans",
  };
  return (
    <div className=" ">
      <section>
        <div className="max-w-screen-3xl m-auto m-10  ">
          <div className="w-full relative select-none">
            <div className="aspect-w-16 aspect-h-9">
              <img src={featuredImages[currentIndex]} alt="" />
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <button onClick={handleOnPrevClick} className="text-white">
                <AiOutlineVerticalRight size={35} />
              </button>
              <button onClick={handleOnNextClick} className="text-white">
                <AiOutlineVerticalLeft size={35} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="m-4 ">
        <div>
          <h1 className="text center text-blue-400 text-xl font-bold m-2">
            About us
          </h1>
          <h1 className="text center text-gray-700 text-3xl font-bold">
            Experience customized car recommendations
          </h1>
          <div className="flex flex-row  ">
            <div className="w-1/2 p-12">
              <img className="h-96 w-full  object-fit " src={image1} alt="" />
            </div>
            <div className="p-16  text center text-xl">
              <h1>Looking for the perfect car to match your needs </h1>
              <br></br>
              <h1>We got you. Select from a range of car options right here</h1>
              <div class="px-4 pb-2 pt-4 mt-12">
                <button class="uppercase block w-full p-4 text-lg rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none transform hover:translate-y-1 transition-all duration-500">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-4">
        <div>
          <h1 className="text center text-blue-800 text-4xl font-bold m-2 ">
            Carezy works in 4 easy steps
          </h1>
          <div className=" flex inline-flex justify-center space-x-1">
            <a className="bg-gray-300 rounded-xl ">
              <TiLocation size={45} />
            </a>
            <a className="bg-gray-300 rounded-xl">
              <TiCalendar size={45} />
            </a>
            <a className="bg-gray-300 rounded-xl">
              <AiFillCar size={45} />
            </a>
            <a className="bg-gray-300 rounded-xl">
              <AiFillCheckCircle size={45} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
