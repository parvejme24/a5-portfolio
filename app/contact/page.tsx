import ContactForm from "@/components/custom/ContactPageComp/ContactForm/ContactForm";
import ContactInfo from "@/components/custom/ContactPageComp/ContactInfo/ContactInfo";
import GoogleMap from "@/components/custom/ContactPageComp/GoogleMap/GoogleMap";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        {/* <PageHeader /> */}
        <h1 className="pt-20 text-4xl md:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
          Contact Me
        </h1>
        <div className="container mx-auto max-w-7xl px-6 flex-grow">
          <div className="pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
            <div>
              <ContactInfo />
              <GoogleMap />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
