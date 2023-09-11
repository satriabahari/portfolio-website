import React from 'react'
import SectionHeading from './section-heading'
import { sosmeds } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

export default function Sosmed() {
  return (
    <section id='sosmeds' className='mb-32 scroll-mt-28'>
      <SectionHeading>My Sosial Media.</SectionHeading>
      <ul className='flex gap-4 md:gap-8'>
        {
          sosmeds.map((sosmed, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className='p-4 bg-gray-200 dark:bg-white/10 rounded-full'
            >
              <Link href={sosmed.link} target='_blank'>
                <Image src={sosmed.icon} alt='Sosmed' className='w-12' />
              </Link>
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
