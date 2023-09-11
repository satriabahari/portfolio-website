/* eslint-disable react/no-unescaped-entities */
import { FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center pt-16 text-center"
    >
      <motion.p
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="mb-1 sm:text-lg md:text-xl font-semibold text-gray-500 dark:text-gray-400"
      >
        HELLO THERE,
      </motion.p>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
        className="mb-2 text-4xl md:text-6xl font-semibold text-gray-700 dark:text-gray-200"
      >
        I'm Satria Bahari
      </motion.h1>
      <motion.h3
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-300"
      >
        A{" "}
        <TypeAnimation
          sequence={["Frontend Developer.", 1000, "UI/UX Designer.", 1000]}
          speed={50}
          repeat={Infinity}
          className="text-gray-600 dark:text-gray-300"
        />
      </motion.h3>
      <motion.p
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 2,
        }}
        className="my-4 md:my-8 w-3/4 text-base md:text-lg font-medium text-gray-500 dark:text-gray-400"
      >
        A Front-End Developer with a strong interest in UI/UX Design. Like a
        solving the problem by combining that.
      </motion.p>
      <motion.button
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 2,
        }}
        className="mb-4 w-fit rounded-lg bg-blue-500 px-4 md:px-8 py-2 text-gray-50"
      >
        Download CV
      </motion.button>
      <motion.button
        initial={{
          opacity: 0,
          y: -65,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 2.6,
        }}
        className="flex cursor-pointer flex-col items-center justify-center"
      >
        <p className="mb-4 text-gray-700 hover:text-blue-500 dark:text-gray-400 hover:dark:text-blue-500">
          See more
        </p>
        <FaArrowDown className="animate-bounce text-gray-700 hover:text-blue-500 dark:text-gray-400 hover:dark:text-blue-500" />
      </motion.button>
    </section>
  );
}
