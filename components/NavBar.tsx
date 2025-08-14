import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed w-full top-0 left-0 z-999'>
      <div className='bg-primary-400/40 backdrop-blur-lg flex justify-between items-center  rounded-full mt-4 mx-auto  sm:max-w-[1440px] px-5 shadow-xl text-lg max-w-[360px] h-16'>
        <div>
          <Image src="/copacabar-logo.png" alt='logo' width={600} height={300} className='w-30 p-2' />
        </div>
        <div className='hidden sm:flex gap-10 items-center'>
          <ul className='flex gap-5 '>
            <li>Acceil</li>
            <li>Produit</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className='px-4 py-2 bg-secondary-200 text-black rounded-full w-40 h-12'>Checkout</button>
        </div>
        <div className='flex sm:hidden'>
          menu
        </div>
      </div>
    </nav>
  )
}

export default NavBar