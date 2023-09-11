import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 1
      }} viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Pleace contact me directly at{" "}
        <a href="mailto:satriaabaharii@gmail.com">satriaabaharii@gmail.com</a> or through this
        form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black/80">
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <button className="bg-gray-800 dark:bg-white/10 text-white flex justify-center items-center w-fit py-3 px-6 rounded-full">
          Submit <FaPaperPlane className="ml-2" />
        </button>
      </form>
    </motion.section>
  );
}
