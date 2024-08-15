import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import { useState } from "react";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import image from "./assets/pexels-hans-abdallah-407274950-14930519-removebg-preview-modified.png";
import coding from "./assets/codingMain-removebg-preview.png";

import onboard from "./assets/Main Onboard.png";
import carRental from "./assets/Car Rental.png";
import hangman from "./assets/hangman1.png";
import myImg from "./assets/20240802_194722__1_-removebg-preview-modified.png";
import { Circle } from "rc-progress";

function App() {
  const tags = [
    {
      icon: <i className="fa-solid fa-envelope"></i>,
      text: "tonypius1729@gmail.com",
    },
    {
      icon: <i className="fa-solid fa-phone"></i>,
      text: "+90 537-665-35-84",
    },
    {
      icon: <i className="fa-solid fa-location-dot"></i>,
      text: "Istanbul, Turkey",
    },
  ];

  const icons = [
    {
      icon: (
        <Link to="/facebook.com">
          {" "}
          <i className="fa-brands fa-facebook"></i>{" "}
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/github.com">
          <i className="fa-brands fa-github"></i>
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/x.com">
          <i className="fa-brands fa-twitter"></i>
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/discord.com">
          <i className="fa-brands fa-discord"></i>{" "}
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/linkedin.com">
          <i className="fa-brands fa-linkedin icon-large"></i>
        </Link>
      ),
    },
  ];

  const AboutSkills = [
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Tailwind CSS" },
    { skill: "Bootstrap" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "RESTful APIs" },
    { skill: "AJAX" },
    { skill: "JSON" },
    { skill: "Node.Js" },
    { skill: "Express" },
    { skill: "MongoDB" },
  ];

  const services = [
    {
      icon: <i className="fa-solid fa-code"></i>,
      heading: "FULL STACK WEB DEVELOPMENT",
      text: "From frontend to backend, I deliver complete web solutions. I manage everything from user interfaces to server-side logic and databases, ensuring seamless integration and robust performance.",
    },
    {
      icon: <i className="fa-solid fa-palette"></i>,
      heading: "FRONTEND WEB DEVELOPMENT",
      text: "I craft engaging, responsive user interfaces using modern technologies. My focus is on creating intuitive designs that enhance user experience and align with your brand.",
    },
    {
      icon: <i className="fa-solid fa-cloud"></i>,
      heading: "BACKEND WEB DEVELOPMENT",
      text: " Build scalable and secure server-side systems, handling data management, API integration, and server logic. I ensure reliable performance and efficient data processing for your web applications",
    },
    {
      icon: <i className="fa-solid fa-bug"></i>,
      heading: "DEBUGGING",
      text: "I identify and resolve issues in your code with precision. My debugging process ensures smooth functionality, improved performance, and a flawless user experience across your application.",
    },
  ];
  const skills = [
    { skill: "HTML", level: 90 },
    { skill: "CSS", level: 85 },
    { skill: "JavaScript", level: 80 },
    { skill: "React", level: 75 },
    { skill: "Node.js", level: 70 },
  ];
  const percents = [
    {
      percent: 85,
      skill: "Problem-Solving",
    },
    {
      percent: 89,
      skill: "Communication",
    },
    {
      percent: 78,
      skill: "Time Management",
    },
    {
      percent: 88,
      skill: "Attention to Detail",
    },
  ];
  const works = [
    {
      title: "SWE Fellow @",
      company: "Headstarter AI",
      date: "August 2024-Present",
      responsibility: [
        "Led AI project development as a fellow, focusing on practical implementations.",
        "Applied advanced AI techniques and tools to real-world problems.",
        "Collaborated with experts to refine and deploy AI solutions.",
      ],
    },
    {
      title: "Web Developer @",
      company: "Cyford AI",
      date: "June 2024-Present",
      responsibility: [
        "Spearheaded web renovation using React, Tailwind CSS, and Context API.",
        "Streamlined global state management with Context API.",
        "Enhanced user experience through responsive design and modern styling.",
      ],
    },
    {
      title: "Frontend Web Developer Intern @ ",
      company: "Oasis Infobyte",
      date: "May 2024-June 2024",
      responsibility: [
        "Developed web applications using modern frameworks and technologies.",
        "Enhanced software performance through code optimization and debugging.",
        "Collaborated with the team to deliver high-quality solutions on schedule.",
      ],
    },
  ];
  const projects = [
    {
      image: carRental,
      title: "Elite Wheel",
      description: `                  

                 Elite Wheels is a versatile car rental platform that streamlines the rental process with advanced filtering, easy leasing management, and direct contact with service providers. It simplifies finding and managing vehicles, making the rental experience efficient and user-friendly.`,
      tech: ["React", "CSS3", "Tailwind CSS", "Axios", "Vite", "React Router"],
    },
    {
      image: onboard,
      title: "Onboard.io",
      description: `
      Onboard.io is an efficient onboarding app designed to enhance new employee integration. Key features include profile management, access to company data, organizational hierarchy, and direct contact with colleagues and seniors. It centralizes crucial information and facilitates smooth transitions for new hires
      `,
      tech: [
        "React",
        "Tailwind CSS",
        "Context APIs",
        "ChartJs",
        "React Router",
      ],
    },
    {
      image: hangman,
      title: "Hangman Game in Python",
      description: `

                Created a Hangman game with multiple difficulty levels (easy, medium, hard), incorporating a timer and guess limits for higher challenges. Features include educational feedback on incorrect guesses, Google Text-to-Speech for interactive instructions, and soothing audio to enhance the gaming experience.`,
      tech: [
        "React",
        "Tailwind CSS",
        "Context APIs",
        "ChartJs",
        "React Router",
      ],
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <div className="bg-bgColor h-full font-roboto overflow-hidden">
        <motion.header
          whileInView={{ type: "tween", x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          initial={{ x: -100 }}
          className={`font-poppins lg:sticky transition-all duration-700 lg:top-0 z-50 h-${
            open ? screen : 0
          } xl:h-full bg-white xl:shadow-md bg-${open ? `btn1` : `bgColor`}`}
        >
          <i
            onClick={handleOpen}
            className={`block relative  text-3xl text-100  z-100 top-5 left-[5%] xl:hidden fa-solid ${
              open ? "fa-xmark" : "fa-bars"
            }`}
          ></i>

          {open ? (
            <div className="block transition-all duration-700 mx-auto px-32 py-36  xl:flex xl:justify-between xl:px-[20rem] xl:py-10 text-100 text-xl xl:text-lg cursor-pointer">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="block align-top mb-5  transition-colors duration-300 border-b-2 pb-4 border-b-bgColor2 hover:border-b-btn1 "
              >
                Home
              </ScrollLink>

              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block align-top mb-5 transition-colors duration-300 border-b-2 pb-4 border-b-bgColor2 hover:border-b-btn1"
              >
                About
              </ScrollLink>

              <ScrollLink
                to="services"
                smooth={true}
                duration={700}
                className="block align-top mb-5 transition-colors duration-300 border-b-2 pb-4 border-b-bgColor2 hover:border-b-btn1"
              >
                Services
              </ScrollLink>

              <ScrollLink
                to="skills"
                smooth={true}
                duration={900}
                className="block align-top mb-5 pb-4 transition-colors duration-300 border-b-2 border-b-bgColor2 hover:border-b-btn1 "
              >
                Skills
              </ScrollLink>

              <ScrollLink
                to="projects"
                smooth={true}
                duration={1100}
                className=" block align-top mb-5 border-b-2 transition-colors duration-300 pb-4 border-b-bgColor2 hover:border-b-btn1"
              >
                Projects
              </ScrollLink>

              <ScrollLink
                to="education"
                smooth={true}
                duration={1300}
                className="block align-top mb-5 transition-colors duration-300 border-b-2 pb-4 border-b-bgColor2 hover:border-b-btn1"
              >
                Education
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1500}
                className=" block align-top mb-5 transition-colors duration-300 border-b-2 pb-4 border-b-bgColor2 hover:border-b-btn1 "
              >
                Contact
              </ScrollLink>
            </div>
          ) : (
            <div className="hidden  transition-all duration-700 mx-auto px-32 py-36  xl:flex xl:justify-between xl:px-[20rem] xl:py-10 text-100 text-xl xl:text-lg cursor-pointer">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="block align-top  transition-colors duration-300 border-b-2 pb-4 border-b-bgColor hover:border-b-btn1 "
              >
                Home
              </ScrollLink>

              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block align-top transition-colors duration-300 border-b-2 pb-4 border-b-bgColor hover:border-b-btn1"
              >
                About
              </ScrollLink>

              <ScrollLink
                to="services"
                smooth={true}
                duration={700}
                className="block align-top transition-colors duration-300 border-b-2 pb-4 border-b-bgColor hover:border-b-btn1"
              >
                Services
              </ScrollLink>

              <ScrollLink
                to="skills"
                smooth={true}
                duration={900}
                className="block align-top pb-4 transition-colors duration-300 border-b-2 border-b-bgColor hover:border-b-btn1 "
              >
                Skills
              </ScrollLink>

              <ScrollLink
                to="projects"
                smooth={true}
                duration={1100}
                className=" block align-top border-b-2 transition-colors duration-300 pb-4 border-b-bgColor hover:border-b-btn1"
              >
                Projects
              </ScrollLink>

              <ScrollLink
                to="education"
                smooth={true}
                duration={1300}
                className="block align-top transition-colors duration-300 border-b-2 pb-4 border-b-bgColor hover:border-b-btn1"
              >
                Education
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1500}
                className=" block align-top transition-colors duration-300 border-b-2 pb-4 border-b-bgColor hover:border-b-btn1 "
              >
                Contact
              </ScrollLink>
            </div>
          )}
        </motion.header>
        <Element name="home">
          <motion.div className="block  xl:flex xl:justify-between px-8 py-16 text-center xl:text-start xl:px-[12rem] xl:py-[9rem]">
            <div className="block xl:hidden mx-auto w-[80%] mb-10">
              <motion.img
                whileInView={{ type: "tween", x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                initial={{ x: 100, y: 0 }}
                src={myImg}
                className="w-full mx-auto"
                alt="Profile"
              />
            </div>

            <motion.div
              whileInView={{ type: "tween", x: 0, y: 0 }}
              transition={{ duration: 1.5 }}
              initial={{ x: -100, y: 85 }}
              className="mx-auto xl:mx-0"
            >
              <div className="px-5 py-3  bg-[#6B8A7A] w-36 rounded-t-3xl rounded-br-3xl mx-auto xl:mx-0 rounded-bl-none">
                <p className="text-100 text-center xl:text-start">Hello I'm</p>
              </div>
              <h1 className="text-6xl my-8 font-bold xl:text-[4.5rem] text-100 font-poppins">
                Anthony Ior
              </h1>
              <h2 className="text-2xl mb-8 md: xl:text-3xl text-100 xl:mb-4 font-poppins">
                Frontend Engineer
              </h2>
              {tags.map((tag, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  key={index}
                  className=" mx-auto xl:mx-0 flex justify-items-start mb-3 w-56 items-center gap-5 text-100"
                >
                  <motion.Link
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    className="text-xl"
                  >
                    {tag.icon}
                  </motion.Link>
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    className=""
                  >
                    {tag.text}
                  </motion.p>
                </motion.div>
              ))}
              <div className="my-5 mx-auto xl:mx-0">
                {icons.map((socials, index) => (
                  <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 2 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    key={index}
                    className="text-2xl xl:text-3xl text-100 mr-4 xl:mr-8"
                  >
                    {socials.icon}
                  </motion.span>
                ))}
              </div>
              {/* CODE WAS REMOVED FROM BELOW: md:justify-center */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                className="mx-auto xl:mx-0 flex  xl:justify-items-start xl:w-96 gap-7 xl:gap-x-10 text-100"
              >
                <div>
                  <Link to="https://gmail.com">
                    <button className="bg-btn1 p-3 rounded-2xl mt-2 hover:bg-bgColor border-2 border-bgColor hover:border-2 hover:border-textCol hover:text-textCol2 transition-colors duration-300">
                      Become a Mentor
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="https://gmail.com">
                    <button className="p-3 mt-2 rounded-2xl  hover:bg-btn1 hover:text-100 hover:border-textCol transition-colors duration-300  text-btn2 bg-bgColor w-28 border-2 border-100">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              whileInView={{ type: "tween", x: 0, y: 0 }}
              transition={{ duration: 1.5 }}
              initial={{ x: 500, y: 85 }}
              className="hidden xl:block"
            >
              <img src={myImg} className="w-full" alt="Profile" />
            </motion.div>
          </motion.div>
        </Element>
        <Element name="about">
          <section className="">
            <div className="block py-28 text-center xl:text-start xl:flex xl:justify-between px-2 space-x-2 md:px-[10rem] xl:gap-x-24 xl:py-20 leading-6">
              <motion.img
                initial={{ opacity: 0, x: -100, y: 95 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                src={coding}
                alt="Coding"
              />
              <motion.div
                initial={{ opacity: 0, x: -100, y: 95 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                className="text-100"
              >
                <h1 className="text-4xl my-12 xl:my-0 mb-12 xl:mb-4 font-bold text-100 font-poppins">
                  About Me
                </h1>
                <p className="text-md text-[#ACE2E1]">
                  I am a passionate Frontend Engineer with a flair for crafting
                  seamless user experiences and pixel-perfect interfaces. With a
                  solid foundation in modern web technologies and a keen eye for
                  detail, I transform ideas into interactive, responsive, and
                  aesthetically pleasing digital solutions. I love the blend of
                  creativity and technology in frontend development. It’s about
                  making the web intuitive, engaging, and accessible for
                  everyone. My approach is user-centric, prioritizing intuitive
                  and accessible interfaces. I ensure performance optimization
                  for fast, smooth, and efficient experiences. I stay ahead of
                  the curve by continuously learning and experimenting with the
                  latest tools and techniques. When I'm not coding, you can find
                  me exploring tech trends, contributing to open-source
                  projects, or enjoying a good book on web development. Let’s
                  create something amazing together!
                </p>
              </motion.div>
            </div>
            <div className="xl:px-[17rem] xl:py-10">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6">
                {AboutSkills.map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -100, y: 95 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    key={index}
                    className="xl:p-4 p-3 w-36 mx-auto xl:mx-0 xl:w-full text-center  border-2 rounded-xl transition-colors duration-300 hover:shadow-lg border-textCol text-textCol2 hover:bg-textCol hover:text-bgColor"
                  >
                    {skill.skill}
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center my-14">
                <motion.button
                  whileInView={{ type: "tween", x: 0, y: 0 }}
                  transition={{ duration: 1.5 }}
                  initial={{ x: 100, y: 85 }}
                  className="w-56 p-4 transition-colors duration-300 border-2 border-textCol bg-textCol hover:bg-bgColor hover:border-textCol hover:text-textCol rounded-2xl"
                >
                  <Link to="https://drive.google.com/file/d/1c4BfaxgCXybPtTaQfTUt4wS9FVZAYXwI/view?usp=sharing">
                    {" "}
                    <motion.i className="fa-solid  fa-download mr-5  "></motion.i>
                    Download CV
                  </Link>
                </motion.button>
              </div>
            </div>
          </section>
        </Element>

        <Element name="services">
          <section>
            <div className="px-10 py-5 xl:px-[10rem] xl:py-20">
              <motion.h1
                whileInView={{ type: "tween", x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                initial={{ x: -100, y: 85 }}
                className="text-100 text-center font-bold mb-20 text-4xl my-16 font-poppins"
              >
                My Services
              </motion.h1>
              <div className="block md:grid md:grid-cols-2  md:gap-8 ">
                {services.map((service, index) => {
                  return (
                    <motion.div
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 1.5 }}
                      initial={{ x: 100 }}
                      key={index}
                      className="p-10 hover:bg-bgColor hover:rounded-2xl  transition-all  duration-300 hover:border-textCol mb-14 md:mb-0 shadow-lg border-2 text-center text-100 border-textCol bg-btn1 rounded-lg"
                    >
                      <motion.p
                        whileInView={{ type: "tween", x: 0, y: 0 }}
                        transition={{ duration: 1.5 }}
                        initial={{ x: -100 }}
                        className="mb-5 text-3xl text-textCol2"
                      >
                        {service.icon}
                      </motion.p>
                      <motion.p
                        whileInView={{ type: "tween", x: 0, y: 0 }}
                        transition={{ duration: 0.5 }}
                        initial={{ x: 100 }}
                        className="mb-5 font-extrabold text-[#49cad1] font-poppins"
                      >
                        {service.heading}
                      </motion.p>
                      {service.text}
                    </motion.div>
                  );
                })}
              </div>
              <div className="flex justify-center my-16">
                <a
                  href="mailto:tonypius1729@gmail.com"
                  className="outline-none"
                >
                  <motion.button
                    whileInView={{ type: "tween", x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    initial={{ x: 100, y: 85 }}
                    className="p-5 bg-textCol  rounded-xl font-medium font-poppins"
                  >
                    Get My Service
                  </motion.button>
                </a>
              </div>
            </div>
          </section>
        </Element>
        <Element name="skills">
          <section>
            <div className="block px-10 py-10 xl:flex xl:justify-between xl:gap-x-40 xl:px-[10rem] xl:py-20">
              <div className="w-full text-center xl:text-start">
                <motion.h1
                  whileInView={{ type: "tween", x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  initial={{ x: -100, y: 85 }}
                  className="text-100 pb-14  text-4xl font-bold font-poppins"
                >
                  Technical Skills
                </motion.h1>
                {skills.map((sk, index) => {
                  return (
                    <motion.div
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: -100 }}
                      key={index}
                      className="mb-8"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-100">
                          {sk.skill}
                        </span>
                        <span className="text-sm font-medium text-100">
                          {sk.level}%
                        </span>
                      </div>
                      <div className="w-full bg-100 rounded-full h-2">
                        <motion.div
                          whileInView={{ type: "tween", x: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          initial={{ x: -100 }}
                          className="bg-textCol2 h-2 rounded-full"
                          style={{ width: `${sk.level}%` }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="w-full py-10 xl:py-0">
                <motion.h1
                  whileInView={{ type: "tween", x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  initial={{ x: 100, y: 85 }}
                  className="pb-14 text-center xl:text-start text-100 text-4xl font-bold font-poppins"
                >
                  Professional Skills
                </motion.h1>
                <div className="grid grid-cols-2 gap-12 xl:gap-8 ">
                  {percents.map((percent, index) => {
                    return (
                      <motion.div
                        whileInView={{ type: "tween", x: 0, y: 0 }}
                        transition={{ duration: 0.5 }}
                        initial={{ x: 100 }}
                        key={index}
                        className="relative mx-auto xl:mx-0"
                      >
                        <Circle
                          percent={`${percent.percent}`}
                          strokeWidth={3}
                          strokeColor="#64CCC5"
                          className="w-24"
                        />
                        <motion.p
                          whileInView={{ type: "tween", x: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          initial={{ x: 100 }}
                          className="text-100 text-4xl absolute top-[17%] left-[12.5%] md:top-[18%] md:left-[8%]"
                        >
                          {percent.percent}%
                        </motion.p>
                        <motion.p
                          whileInView={{ type: "tween", x: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          initial={{ x: 100 }}
                          className="text-100 md:text-lg py-3"
                        >
                          {percent.skill}
                        </motion.p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="education">
          <section>
            <div>
              <div className="px-10 xl:px-[10rem]">
                <motion.h1
                  whileInView={{ type: "tween", x: 0, y: 0 }}
                  transition={{ duration: 1.5 }}
                  initial={{ x: -200 }}
                  className="text-100 py-14 text-4xl font-bold text-center font-poppins"
                >
                  EDUCATION{" "}
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 md:gap-y-0 md:gap-x-16">
                  <motion.div
                    whileInView={{ type: "tween", x: 0, y: 0 }}
                    transition={{ duration: 1.5 }}
                    initial={{ x: -100, y: 60 }}
                    className=" bg-btn1 p-5 xl:p-10 rounded-lg shadow-lg"
                  >
                    <motion.h2
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: -100 }}
                      className="text-100"
                    >
                      BSc. Computer Engineering,{" "}
                      <span className="text-textCol2 font-poppins">
                        Istanbul Technical University
                      </span>
                    </motion.h2>
                    <motion.p
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: -100 }}
                      className="py-5 text-textCol2"
                    >
                      2024-2028
                    </motion.p>
                    <motion.p
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: -100 }}
                      className="text-[#F5F5F5]"
                    >
                      Currently a freshman studying Computer Engineering at one
                      of Turkey's premier technical universities. Developing a
                      strong foundation in software development, algorithms, and
                      system design. Actively engaging in coursework and
                      projects that emphasize practical skills and theoretical
                      knowledge. Eager to explore advanced topics and contribute
                      to innovative projects in the field of computer
                      engineering.
                    </motion.p>
                  </motion.div>
                  <motion.div
                    whileInView={{ type: "tween", x: 0, y: 0 }}
                    transition={{ duration: 1.5 }}
                    initial={{ x: 100, y: 60 }}
                    className=" bg-btn1 p-5  lg:p-10 rounded-lg shadow-lg"
                  >
                    <motion.h2
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: 100 }}
                      className="text-100 "
                    >
                      STEM,{" "}
                      <span className="text-textCol2 font-poppins">
                        Padopads Harmony Secondary School
                      </span>
                    </motion.h2>
                    <motion.p
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: 100 }}
                      className="py-5 text-textCol2"
                    >
                      2014-2020
                    </motion.p>
                    <motion.p
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      initial={{ x: 100 }}
                      className="text-[#F5F5F5]"
                    >
                      Completed secondary education at Padopads Harmony
                      Secondary School, where I served as Head Boy and President
                      of the Science and Math Club. In these leadership roles, I
                      organized events, led initiatives, and fostered a
                      collaborative environment that enhanced my skills in
                      management and teamwork. These experiences significantly
                      contributed to my interest in technology and computer
                      science.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="experience">
          <section>
            <div className="px-10 xl:px-[10rem] py-10 xl:py-20">
              <motion.h1
                whileInView={{ type: "tween", x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                initial={{ x: -100 }}
                className="py-20 text-4xl font-bold text-center text-100 font-poppins"
              >
                Work Experience
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 ">
                {works.map((work, index) => {
                  return (
                    <motion.div
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 1.5 }}
                      initial={{ x: -200 }}
                      key={index}
                    >
                      <div className=" bg-bgColor p-5 md:p-10  border-2 border-textCol rounded-xl shadow-lg">
                        <motion.h2
                          whileInView={{ type: "tween", x: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          initial={{ x: -100 }}
                          className="text-100 text-lg font-poppins font-medium"
                        >
                          {work.title}{" "}
                          <span className="text-textCol2">{work.company}</span>
                        </motion.h2>
                        <motion.p
                          whileInView={{ type: "tween", x: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          initial={{ x: -100 }}
                          className="py-5 text-textCol2"
                        >
                          {work.date}
                        </motion.p>
                        <motion.p
                          whileInView={{ type: "tween", x: 0, y: 0 }}
                          transition={{ duration: 0.5 }}
                          initial={{ x: -100 }}
                          className="text-[#F5F5F5]"
                        >
                          {work.responsibility.map((res, indices) => {
                            return <li key={indices}>{res}</li>;
                          })}
                        </motion.p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </Element>
        <Element name="projects">
          <section>
            <div className="px-10 md:px-[10rem]">
              <motion.h1
                whileInView={{ type: "tween", x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                initial={{ x: -100 }}
                className="py-20 text-100 text-4xl font-bold text-center font-poppins"
              >
                My Projects
              </motion.h1>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 md:gap-20 ">
                {projects.map((project, index) => {
                  return (
                    <motion.div
                      whileInView={{ type: "tween", x: 0, y: 0 }}
                      transition={{ duration: 0.9 }}
                      initial={{ x: -100, y: 95 }}
                      key={index}
                      className="  text-100 bg-[#3c8564] rounded-xl shadow-lg"
                    >
                      <motion.img
                        whileInView={{ type: "tween", x: 0, y: 0 }}
                        transition={{ duration: 0.6 }}
                        initial={{ x: -100 }}
                        src={project.image}
                        className="w-full object-cover rounded-t-xl md:h-56"
                      />
                      <motion.div
                        whileInView={{ type: "tween", x: 0, y: 0 }}
                        transition={{ duration: 0.6 }}
                        initial={{ x: -100 }}
                        className="p-5"
                      >
                        <h1 className="py-4 text-xl text-textCol2 font-poppins font-medium">
                          {project.title}
                        </h1>
                        <motion.p
                          whileInView={{ type: "tween", x: 0, y: 0 }}
                          transition={{ duration: 0.7 }}
                          initial={{ x: -100 }}
                          className="text-textCol3"
                        >
                          {project.description}
                        </motion.p>
                        <div className="py-5 grid grid-cols-3 gap-3 md:gap-5 text-xs md:text-sm text-center align-middle">
                          {project.tech.map((tool, index) => {
                            return (
                              <motion.span
                                whileInView={{ type: "tween", x: 0, y: 0 }}
                                transition={{ duration: 0.8 }}
                                initial={{ x: -100 }}
                                key={index}
                                className="p-2 md:text-xs align-middle text-textCol2 border-2 border-textCol2 rounded-xl"
                              >
                                {tool}
                              </motion.span>
                            );
                          })}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </Element>
        <Element name="contact">
          <section className="bg-gray-900 text-white py-20 px-10 md:px-[10rem] lg:px-24">
            <div className="max-w-4xl mx-auto text-center text-100">
              <motion.h2
                whileInView={{ type: "tween", x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                initial={{ x: -100 }}
                className="text-4xl font-bold mb-6 text-100 font-poppins"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                whileInView={{ type: "tween", x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                initial={{ x: -100 }}
                className="text-lg mb-8 pb-12"
              >
                I'm always open to discussing new opportunities, collaborating
                on projects, or just having a chat. Feel free to reach out!
              </motion.p>
              <motion.form
                whileInView={{ type: "tween", x: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                initial={{ x: 0, y: 100 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-lg border-2 border-textCol2"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full focus:outline-none hover:border-textCol2 px-4 transition-all duration-300 py-2 border-2 border-100 rounded-lg bg-btn1 text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 focus:outline-none transition-all duration-300 hover:border-textCol2 py-2 border-2 border-100 rounded-lg bg-btn1 text-white"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 focus:outline-none transition-all duration-300 hover:border-textCol2 border-2 border-100 rounded-lg bg-btn1 text-white"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <a
                  href="mailto:tonypius1729@gmail.com"
                  className="underline-none"
                >
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#3c8564] text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Send Message
                    <i className="fa-solid fa-paper-plane text-xl ml-4"></i>
                  </button>
                </a>
              </motion.form>
            </div>
          </section>
        </Element>

        <footer className="px-10 md:px-[10rem] flex justify-center text-xs md:text-sm pt-16 pb-5 text-textCol3">
          <p>&copy; 2024 Anthony Ior. All rights reserved.</p>
        </footer>
      </div>
    </React.Fragment>
  );
}
export default App;
