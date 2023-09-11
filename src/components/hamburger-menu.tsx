import React, { useState } from 'react'

export default function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <section className='flex md:hidden'>
      <div className='flex flex-col justify-center items-center cursor-pointer' onClick={handleClick}>
        <span className={`block dark:bg-gray-50 bg-gray-800 w-6 h-1 rounded-sm origin-top-right transition ${isActive ? "-rotate-[46deg]" : null }`}></span>
        <span className={`block dark:bg-gray-50 bg-gray-800 w-7 h-1 rounded-sm my-1 origin-right transition ${isActive ? "w-0" : null }`}></span>
        <span className={`block dark:bg-gray-50 bg-gray-800 w-6 h-1 rounded-sm origin-bottom-right transition ${isActive ? "rotate-[46deg]" : null }`}></span>
      </div>
    </section>
  )
}
