import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-teal-500 h-screen flex flex-col items-center justify-center ">
        <h2 className="text-4xl font-bold text-white uppercase">
          About framework
        </h2>
        <div className="mb-5 mt-5">
          <span className="w-24 h-1 bg-white inline-block"></span>
          <i className="fa-solid fa-star text-white px-3"></i>
          <span className="w-24 h-1 bg-white inline-block"></span>
        </div>
        <div className="container">
          <div className="row flex px-5 justify-center flex-wrap gap-10">
            <div className="w-2/5 ">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="w-2/5 ">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
