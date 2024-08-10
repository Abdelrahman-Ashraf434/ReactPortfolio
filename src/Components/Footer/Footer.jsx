import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-slate-700 h-full flex   p-10">
        <div className="flex-1 flex flex-col items-center justify-center p-5">
          <h2 className="text-2xl text-white uppercase">Location</h2>
          <p className="text-white">2215 John Daniel Drive</p>
          <p className="text-white mt-2">Clark, MO 65243</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-5">
          <h3 className="text-2xl text-white uppercase">Around the Web</h3>
          <ul className="flex justify-center items-center mt-2">
            <li className="mx-1">
              <i className="fa-brands fa-facebook text-white p-3 border border-white rounded-full icon"></i>
            </li>
            <li className="mx-1">
              <i className="fa-brands fa-twitter text-white p-3 border border-white rounded-full icon"></i>
            </li>
            <li className="mx-1">
              <i className="fa-brands fa-linkedin text-white p-3 border border-white rounded-full icon"></i>
            </li>
            <li className="mx-1">
              <i className="fa-solid fa-globe text-white p-3 border border-white rounded-full icon"></i>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-5">
          <h2 className="text-2xl text-white uppercase">About Freelancer</h2>
          <p className="text-white text-center">
            Freelance is a free-to-use, licensed Bootstrap theme
          </p>
          <p className="text-white mt-2">created by Route</p>
        </div>
      </div>
      <div className="bg-slate-800 h-20 flex justify-center items-center">
        <p className="text-white">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
