"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import copy from "copy-text-to-clipboard";
import toast from "react-hot-toast";

const Galler = ({ setShow, images }) => {
  const copyUrl = (url) => {
    copy(url);
    toast.success("Copy success!");
  };

  return (
    <div className="fixed left-0 top-0 z-[9999] h-screen w-screen">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 z-[998] h-full w-full bg-gray-400 opacity-80"></div>
        <div className="absolute left-1/2 top-1/2 z-[999] h-[85vh] w-[50%] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-sm bg-white p-3">
          <div className="flex w-full items-center justify-between pb-3">
            <h2>Gallery</h2>
            <button onClick={() => setShow(false)} className="text-xl cursor-pointer">
              <AiOutlineClose />
            </button>
          </div>

          <div>
            <div className="flex h-[180px] cursor-pointer items-center justify-center gap-2 rounded border-2 border-dashed text-[#404040]">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-2xl">
                  <MdCloudUpload />
                </span>
                <span>Select Image</span>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-x-2">
            {images.length > 0 &&
              images.map((img, i) => (
                <div key={i} className="cursor-pointer" onClick={() => copyUrl(img.url)}>
                  <img src={img.url} alt="image" className="h-[100px] w-full" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galler;
