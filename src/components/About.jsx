import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="w-screen min-h-screen">
      <div className="relative flex flex-col items-center justify-center gap-5 mb-8 mt-36">
        <h2 className="uppercase font-general md:text-[20px] tracking-wide">
          Welcome to IRON HAS
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          </p>
          <p>Has Iron Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="w-screen h-dvh" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpeg"
            alt="background"
            className="absolute top-0 left-0 object-cover size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
