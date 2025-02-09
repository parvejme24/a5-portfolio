"use client";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { siteConfig } from "@/config/site";

import { FiMapPin } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 bg-[#140B17] text-[#DED0EB]">
      {/* Footer Top */}
      <div className="container mx-auto max-w-7xl px-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20">
          {/* Left Section */}
          <div className="text-left">
            <h2 className="text-2xl uppercase font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
              {siteConfig.name}
            </h2>
            <p className="mt-5">{siteConfig.description}</p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-2">
                <FiMapPin className="text-xl" /> {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineEnvelope className="text-xl" /> {siteConfig.email}
              </li>
              <li className="flex items-center gap-2">
                <LuPhone className="text-xl" /> {siteConfig.phone}
              </li>
            </ul>
          </div>

          {/* Middle & Right Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Navigation Links */}
            <div>
              <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
                Navigation
              </h3>
              <ul className="mt-3 space-y-2">
                {siteConfig.navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-[#E58FFF] transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Socials */}
            <div>
              <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
                Get the latest updates
              </h3>
              <form className="flex items-center pt-6 w-full">
                <input
                  type="email"
                  name="email"
                  className="bg-[#DED0EB] px-4 py-3 rounded-lg w-full text-black placeholder-gray-700"
                  placeholder="Your Email Address"
                />
                <button className="bg-[#9914C1] text-[#F5F5FF] p-3 rounded-tr-lg rounded-br-lg -ml-2">
                  Send
                </button>
              </form>

              {/* Social Links */}
              <ul className="flex items-center gap-3 mt-6">
                <li>
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-[#E58FFF] hover:text-white transition text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-[#E58FFF] hover:text-white transition text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-[#E58FFF] hover:text-white transition text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-[#E58FFF] hover:text-white transition text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord className="text-[#E58FFF] hover:text-white transition text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="h-[2px] rounded-full bg-gradient-to-r from-[#15151C] via-[#9914C1] to-[#15151C]"></div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-center py-10">
        <p>&copy; {currentYear} Md Parvej. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0 space-x-2">
          <Link href={"/terms-conditions"} target="_blank">
            User Terms & Conditions
          </Link>
          <span>|</span>
          <Link href={"/privacy-policy"} target="_blank">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
