"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed w-full top-0 left-0 z-999'>
      <nav className={`bg-white/80 ${isMenuOpen && "h-[100vh]"} backdrop-blur-lg md:mt-4 mx-auto sm:max-w-[1440px] md:rounded-full `}> 
        <div className='  flex justify-between items-center  px-5 shadow-xl text-lg w-full h-20 md:h-16'>
          <div>
            <Image src="/images/greenharvest-logo.png" alt='logo' width={2000} height={300} className='w-50 p-2' />
          </div>
          <div className='hidden sm:flex gap-10 items-center'>
            <ul className='flex gap-5 text-black font-semibold text-[1rem] tracking-widest'>
              <li>Acceil</li>
              <li>Produit</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <button className='px-4 py-2 bg-secondary-200 text-black rounded-full w-40 h-12'>Checkout</button>
          </div>
          <div className='flex sm:hidden'>
            <button onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
              <Image src={isMenuOpen ? "/icons/close.png" : "/icons/menu.png"} alt='menu icon' width={512} height={512} className='w-10' />
            </button>
          </div>

        </div>
        <div className={`absolute ${!isMenuOpen && "hidden" } top-0 left-0 mt-20 py-10 w-full z-0`}>
          <ul className='flex flex-col text-3xl font-semibold items-center justify-center gap-18 text-black'>
            <li>Acceil</li>
            <li>Produit</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>

  )
}

export default NavBar