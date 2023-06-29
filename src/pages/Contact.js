import React from "react";
import contactbg from "../img/contactbg.jpg";

const Contact = () => {
  return (
    <div
      className="h-screen"
      style={{
        contactbg: `url(${contactbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

export default Contact;
