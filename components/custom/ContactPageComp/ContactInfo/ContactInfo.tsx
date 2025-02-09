import { siteConfig } from "@/config/site";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";

export default function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Profile Image */}
      <div className="w-full">
        <img
          src="https://parvejbd.vercel.app/_next/image?url=%2Fimages%2Fprofile2.png&w=640&q=75"
          alt="Profile"
          className="border border-purple-950 shadow w-full rounded-lg"
        />
      </div>

      {/* Contact Details */}
      <div className="col-span-2">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-[#F5F5FF]">
          {siteConfig.name}
        </h3>
        <p className="text-gray-500 dark:text-[#DED0EB]">{siteConfig.role}</p>

        {/* Contact Info List */}
        <ul className="mt-6 space-y-4">
          <ContactItem icon={<FiMapPin />} text={siteConfig.address} />
          <ContactItem icon={<HiOutlineEnvelope />} text={siteConfig.email} />
          <ContactItem icon={<LuPhone />} text={siteConfig.phone} />
        </ul>
      </div>
    </div>
  );
}

// Reusable Contact Item Component
function ContactItem({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
      <span className="text-xl">{icon}</span>
      {text}
    </li>
  );
}
