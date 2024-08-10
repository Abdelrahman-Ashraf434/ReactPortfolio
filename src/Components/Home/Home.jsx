import React from "react";
import homeImg from "../../assets/avataaars.svg";

export default function home() {
  return (
    <>
      <div className="bg-teal-500 h-screen flex flex-col items-center justify-center ">
        <img className="w-64 mb-5" src={homeImg} alt="" />
        <h2 className="text-4xl font-bold text-white uppercase">
          Start framework
        </h2>
        <div className="mb-5 mt-5">
          <span className="w-24 h-1 bg-white inline-block"></span>
          <i className="fa-solid fa-star text-white px-3"></i>
          <span className="w-24 h-1 bg-white inline-block"></span>
        </div>
        <p className="text-white">
          <span>Graphic Artist - Web Designer - Illustrator</span>
        </p>
      </div>
    </>
  );
}
