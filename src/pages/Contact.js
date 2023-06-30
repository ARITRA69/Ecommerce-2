import React from "react";
import contactbg from "../img/contactbg.jpg";

const Contact = () => {
  return (
    <div className="h-screen bg-red-300 grid grid-cols-1 sm:grid-cols-2">
      <div className="h-full relative">
        <img src={contactbg} className="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black opacity-70"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-white text-4xl font-bold">Contact Us</h2>
        </div>
      </div>
      <div className="bg-green-300 h-full"></div>
    </div>
  );
};

export default Contact;
