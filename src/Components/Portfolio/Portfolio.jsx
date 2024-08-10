import React from "react";
import portfolioImg1 from "../../assets/poert1.png";
import portfolioImg2 from "../../assets/port2.png";
import portfolioImg3 from "../../assets/port3.png";
export default function Portfolio() {
  return (
    <>
      <section>
        <div className="container mx-auto mb-10 w-100">
          <div className="flex w-full flex-col items-center py-10 ">
            <h2 className="text-4xl font-bold text-slate-700 uppercase">
              Portfolio Section
            </h2>
            <div className="flex items-center mt-5">
              <span className="w-24 h-1 bg-slate-700 inline-block"></span>
              <i className="fa-solid fa-star text-slate-700 px-3"></i>
              <span className="w-24 h-1 bg-slate-700 inline-block"></span>
            </div>
          </div>

          <div className="row flex justify-center flex-wrap gap-9">
            <div className=" lg:w-1/4 md:w-1/6  relative">
              <img src={portfolioImg1} className=" rounded-lg w-100" alt="" />
              <div className="flex justify-center absolute top-0 left-0 items-center w-full h-full hover:bg-teal-500 opacity-0 hover:opacity-80 rounded-lg transition-all duration-500">
                <i class="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
            <div className=" md:w-1/4 relative">
              <img src={portfolioImg2} className=" rounded-lg w-100  " alt="" />
              <div className="flex justify-center absolute top-0 left-0 items-center w-full h-full hover:bg-teal-500 opacity-0 hover:opacity-80 rounded-lg transition-all duration-500">
                <i class="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
            <div className=" md:w-1/4 relative ">
              <img src={portfolioImg3} className=" rounded-lg w-100 " alt="" />
              <div className="flex justify-center absolute top-0 left-0 items-center w-full h-full hover:bg-teal-500 opacity-0 hover:opacity-80 rounded-lg transition-all duration-500">
                <i class="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
            <div className=" md:w-1/4 relative">
              <img src={portfolioImg1} className=" rounded-lg w-100 " alt="" />
              <div className="flex justify-center absolute top-0 left-0 items-center w-full h-full hover:bg-teal-500 opacity-0 hover:opacity-80 rounded-lg transition-all duration-500">
                <i class="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
            <div className=" md:w-1/4 relative">
              <img src={portfolioImg2} className=" rounded-lg w-100 " alt="" />
              <div className="flex justify-center absolute top-0 left-0 items-center w-full h-full hover:bg-teal-500 opacity-0 hover:opacity-80 rounded-lg transition-all duration-500">
                <i class="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
            <div className=" md:w-1/4 relative">
              <img src={portfolioImg3} className=" rounded-lg w-100 " alt="" />
              <div className="flex justify-center absolute top-0 left-0 items-center w-full h-full hover:bg-teal-500 opacity-0 hover:opacity-80 rounded-lg transition-all duration-500">
                <i class="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
