import React from "react";
import contactbg from "../img/contactbg.jpg";
import plant from "../img/plantimage.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-[100vh] grid grid-cols-1 sm:grid-cols-2 mt-11">
      <div className="h-full relative">
        <img
          src={contactbg}
          alt="contact-img"
          className="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-70"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-white font-bold uppercase text-4xl sm:text-[80px]">Who We Are</h2>
        </div>
      </div>
      <div className="h-full">
        <div className="flex items-center justify-center py-10 px-3 sm:pt-20 sm:px-10">
          <span className="mx-auto text-center">
            We are passionate about pottery and craftsmanship. We believe that
            each piece of pottery tells a unique story and brings beauty and
            artistry into everyday life.
          </span>
        </div>
        <div className="text-center pt-16">
          <h1 className="font-semibold text-2xl">Want to reach us?</h1>
          <Link to="/contact">
            <span className="text-red-500 hover:underline">
              Send us a text
            </span>
          </Link>
          <div className="flex justify-center">
            <img src={plant} alt="plant" className="w-[80%] h-auto sm:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
