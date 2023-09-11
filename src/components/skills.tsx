import React from "react";
import SectionHeading from "./section-heading";
import { skills } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="mb-32 md:max-w-[75%] scroll-mt-28">
      <SectionHeading>My Skills.</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-center rounded-xl bg-gray-200 px-6 py-4 text-gray-900 dark:bg-white/10 dark:text-gray-200"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="mr-2">
              <Image src={skill.icon} width="30" height="30" alt={skill.name} />
            </div>
            <h5>{skill.name}</h5>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
