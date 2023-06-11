import React from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Insta from "../../components/Insta/Insta";
import Telegram from "../../components/Telegram/Telegram";
import Navbars from "../../components/Nanbar/Navbars";
import Footer from "../../components/Footer/Footer";

export default function Blog() {
  return (
    <>
    <Navbars/>
      <div className="container mt-5">
        <div className="grid grid-rows-1 lg:grid-rows-1 md:grid-rows-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="row-span-2 relative rounded h-[415px] bg-red-500">
          <div className="bottom-0 absolute m-3">
            <div className="flex gap-2">
            <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 "> برنامه نویسی </p>
            <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 "> برنامه نویسی </p>    
            </div>
              <div>
            <h2 className="font-medium mb-0 text-lg text-white"> برنامه نویسی چیست</h2>
            <p className="mb-1 text-xs opacity-90 text-white font-light">زبان برنامه نویسی های </p>
            </div>
            
            </div>
          </div>
          <div className="row-span-1">
            <div className="grid grid-rows-2 grid-cols-2 gap-3">
              <div className="bg-teal-800 relative rounded h-[200px] col-span-2">
              <div className="m-3 absolute bottom-0">
            <div className="flex gap-2">
            <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 "> برنامه نویسی </p>
            <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 "> برنامه نویسی </p>    
            </div>
              <div>
            <h2 className="font-medium mb-0 text-lg text-white"> برنامه نویسی چیست</h2>
            <p className="mb-1 text-xs opacity-90 text-white font-light">زبان برنامه نویسی های </p>
            </div>
            
            </div>
              </div>
              <div className="bg-teal-500 relative rounded h-[200px]">
              <div className="m-3 absolute bottom-0">
            <div className="flex gap-2">
            <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 "> برنامه نویسی </p>
            <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 "> برنامه نویسی </p>    
            </div>
              <div>
            <h2 className="font-medium mb-0 text-lg text-white"> برنامه نویسی چیست</h2>
            <p className="mb-1 text-xs opacity-90 text-white font-light">زبان برنامه نویسی های </p>
            </div>
            
            </div>
              </div>
              <div className="bg-teal-500 relative rounded h-[200px]">
              <div className="m-3 absolute bottom-0">
            <div className="flex gap-2">
            <p className="font-light text-sm mb-1 text-white bg-fuchsia-700 rounded-lg px-2 "> برنامه نویسی </p>
            <p className="font-light text-sm mb-1 text-white bg-purple-700 rounded-lg px-2 "> برنامه نویسی </p>    
            </div>
              <div>
            <h2 className="font-medium mb-0 text-lg text-white"> برنامه نویسی چیست</h2>
            <p className="mb-1 text-xs opacity-90 text-white font-light">زبان برنامه نویسی های </p>
            </div>
            
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 lg:grid-cols-4 grid-cols-1 mt-4 lg:gap-4">
          <div className="col-span-3">
            <Card url='20' />
            <Card url='20' />
            <Card url='20' />
            <Card url='20' />
            <Card url='20' />
          </div>
          <div>
            <div className="mb-4  mt-2 lg:mt-0 md:mt-0">
              <Insta />
              <div className="mt-3">
              <Telegram />
              </div>
            </div>
            <div className="bg-white shadow-sm rounded">
              <div className="py-3">
                <p className="font-web pr-3 text-lg mt-3 border-r-4  border-[#ffa000] ">
                  دسته ها
                </p>
                <Link className="no-underline" to={"/"}>
                  <p className="mr-4 text-md mb-2 hover:opacity-100 opacity-80 text-black  font-light">
                    هوش مصنوعی
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
