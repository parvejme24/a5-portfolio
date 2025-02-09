import { siteConfig } from "@/config/site";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-transparent flex justify-center items-center min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Section - Text Content */}
        <div className="text-center md:text-left space-y-5">
          <h3 className="text-2xl md:text-3xl font-bold mb-5 text-purple-950 dark:text-[#DED0EB]">
            Hi, I am <span>{siteConfig.name}</span>
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
            {siteConfig.role}
          </h1>
          <p className="text-purple-900 dark:text-[#DED0EB] pt-6">
            {siteConfig.bannerDescription}
          </p>
          <a
            href="/path-to-cv.pdf"
            download
            className="w-[180px] text-[#E58FFF] border border-[#E58FFF] px-6 py-3 font-bold rounded-full flex justify-center items-center gap-2 transition duration-300 hover:bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] hover:text-white"
          >
            Download CV
          </a>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://parvejbd.vercel.app/_next/image?url=%2Fimages%2Fprofile2.png&w=640&q=75"
            alt="Md Parvej Profile"
            className="w-72 shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
