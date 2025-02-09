import Banner from "@/components/custom/HomePageComp/Banner/Banner";
import AboutMe from "@/components/custom/HomePageComp/AboutMe/AboutMe";
import Skills from "@/components/custom/HomePageComp/Skills/Skills";
import Testimonial from "@/components/custom/HomePageComp/Testimonial/Testimonial";

export default function Home() {
  return (
    <section className="">
      <Banner />
      <AboutMe />
      <Skills />
      <Testimonial />
    </section>
  );
}
