"use client";

import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow">
      <div className="mt-24 lg:mt-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-8">
        {/* Profile Image Section */}
        <div>
          <img
            src="https://parvejbd.vercel.app/_next/image?url=%2Fimages%2Fprofile2.png&w=640&q=75"
            alt="Md Parvej"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* About Me Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
            About Me
          </h3>
          <p className="mt-5">
            My name is <span className="font-bold">Md Parvej</span>, and I am a
            passionate and skilled
            <span className="font-bold"> Full Stack Developer</span>. I
            specialize in delivering high-quality solutions for web and app
            development. With expertise in both frontend and backend
            technologies, I aim to create user-friendly, scalable, and secure
            applications.
          </p>

          {/* Expertise Section */}
          <h4 className="text-xl font-semibold mt-6 mb-3">
            Technologies I’m Proficient In:
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Frontend:</span> React, Next.js,
              Tailwind CSS, HTML, CSS, SASS, Bootstrap
            </li>
            <li>
              <span className="font-bold">Backend:</span> Node.js, Express,
              Django, Firebase, JWT
            </li>
            <li>
              <span className="font-bold">Databases:</span> MySQL, MongoDB,
              PostgreSQL
            </li>
          </ul>

          {/* See More Button */}
          <p className="mt-5">
            <Link
              href={"/contact"}
              className="w-[180px] text-[#E58FFF] border border-[#E58FFF] px-6 py-3 font-bold rounded-full flex justify-center items-center gap-2 transition duration-300 hover:bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] hover:text-white"
            >
              Contact Me
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
