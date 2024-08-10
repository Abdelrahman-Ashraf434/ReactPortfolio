import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="p-2 px-20 flex justify-between bg-slate-700 uppercase  w-full z-50"> 
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-white">
            <Link to="">Start framework</Link>
          </h1>
        </div>
        <div>
          <ul className="flex justify-end ">
            <li className="p-5 text-white font-bold">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="p-5 text-white font-bold">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="p-5 text-white font-bold">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}
