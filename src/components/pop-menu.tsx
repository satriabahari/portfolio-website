import React from 'react'
import { links } from "@/lib/data";
import Link from 'next/link';

export default function PopMenu() {
  return (
    <section className='md:hidden z-50 relative'>
      <nav className="fixed left-0 right-0 top-14 py-8 h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-gray-800">
        <ul className='flex flex-col gap-y-8'>
          {links.map((link) => (
            <li key={link.hash} className='text-xl text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50'>
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
