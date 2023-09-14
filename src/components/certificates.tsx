import React from 'react'
import SectionHeading from './section-heading'
import { certificates } from '@/lib/data'
import Image from 'next/image'
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

export default function Certificates() {
  return (
    <section id='certificates' className='mb-32 scroll-mt-28'>
      <SectionHeading>My Certificates.</SectionHeading>
      <div className='grid grid-cols-3 gap-8'>
        {
          certificates.map((certificate, index) => (
            <motion.div key={index} variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index} className='bg-gray-200 dark:bg-white/10 p-4 rounded-lg'>
              <Image src={certificate.imageUrl} alt='My Certificate' className='w-96 rounded-md' />
              <div className='mt-4 dark:text-gray-100'>
                <h3 className='text-xl font-semibold mb-2'>{certificate.title}</h3>
                <p className='text-gray-700 dark:text-white/70'>{certificate.description}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}
