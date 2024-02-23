import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.20rem] md:text-6xl lg:text-[2.5rem] text-center align-left"
        >
          <span className="about-1 leading-tight">
            Greeting! I&apos;m Yared Leake, a passionate software engineer with
            a lifelong love for technology. Choosing to pursue a bachelor&apos;s
            degree in Software Engineering was a natural progression for me.
            With over 5 years of hands-on experience in the dynamic realm of
            technology, specializing in both front-end and back-end development.
            My expertise spans various programming languages, such as Java,
            JavaScript, and C++. I&apos;ve had the privilege of contributing to
            diverse projects, pushing the boundaries of what technology can
            achieve. From crafting engaging user interfaces to architecting
            robust backend systems, my journey reflects a commitment to
            innovation and excellence.
            {"  "}
          </span>
          <span className="about-2 leading-tight">
            With a keen eye for detail and a passion for problem-solving, I
            navigate the complexities of software development to deliver
            solutions that seamlessly blend functionality and innovation.
            Let&apos;s embark on a journey together, harnessing the power of
            code to shape the future of technology.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;
