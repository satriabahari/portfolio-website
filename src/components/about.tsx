/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
// import animateBubble from "../../db.json";

export default function About() {
  return (
    <section
      id="about"
      className="mb-32 flex scroll-mt-12 flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src="/images/axel-bubble.png"
          alt="logo-axel"
          width={"450"}
          height={"450"}
          className="z-20"
        />
      </motion.div>
      {/* {Object.values(animateBubble.animateBubble).map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={item.offScreen}
              whileInView={item.onScreen}
              viewport={{ once: true }}
              className={`absolute z-10 hidden ${item.position} `}
            >
              <Image
                src={"/images/bubble.png"}
                width={item.width}
                height={item.height}
                alt="bubble"
              />
            </motion.div>
          );
        })} */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-4  flex flex-col items-center"
      >
        <SectionHeading>About Me.</SectionHeading>
        <h3 className="mb-4 md:w-[55%] text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
          I'am Frontend Developer and UI / UX Designer from Jambi, Indonesia.
        </h3>
        <p className="md:w-[65%] text-lg font-medium text-gray-500  dark:text-gray-400">
          My name is <span className="text-blue-500 ">Satria Bahari</span>, or
          you can call me Satria. I focus on studying web application
          development and web design. The main programming language I'm
          exploring is Javascript, as well as the React framework (and the
          environment in general). I love learning things, and always want to
          learn new things. I am enthusiastic, reliable, responsible and
          hardworking person. corrupti sequi.
        </p>
      </motion.div>

      <motion.button className="mt-8 rounded-lg bg-blue-500 px-4 py-2 text-gray-200 duration-150 active:scale-75 dark:bg-darktertiary dark:text-darkprimary ">
        Contact With Me
      </motion.button>
    </section>
  );
}
