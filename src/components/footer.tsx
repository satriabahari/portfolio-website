import React from 'react'

export default function Footer() {
  return (
    <footer className=' px-8 py-4 text-center text-gray-500 bg-gray-50 dark:bg-gray-800'>
      <small className='mb-2 block text-xs'>
        &copy; 2023 Satria. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> build with React & Next.js (App Router & Server Actions), Typescript Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
