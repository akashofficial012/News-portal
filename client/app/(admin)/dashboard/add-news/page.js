'use client';
import dynamic from "next/dynamic";
import FileInput from "@/components/fileInput";
import React from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Addnews = () => {
  return (
    <div className="px-4 py-8 w-full">
      <div className="w-full">
        <label htmlFor="name" className="text-[15px] text-text font-[400]">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
        />
      </div>
      <FileInput />
      <JoditEditor />
    </div>
  );
};

export default Addnews;
