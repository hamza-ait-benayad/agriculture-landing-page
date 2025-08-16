import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary-900 py-4 sm:py-8'>
      <div className='container grid grid-cols-1 sm:grid-cols-3  gap-10 text-white'>
        <div className='flex flex-col gap-4'>
          <Image src="/images/greenharvest-logo.png" alt='logo' width={2000} height={300} className='w-60'/>
          <p className='text-sm text-white/70 leading-8'>Empowering small and medium farmers with products, solutions, and expert guidance to grow sustainably.</p>
        </div>
        <div className='font-semibold flex flex-col items-center'>
         <p className='text-xl'>Quick Links</p>
           <ul className='flex flex-col gap-5 text-white/70 mt-5'>
            <li>Acceil</li>
            <li>Produit</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='font-semibold flex flex-col items-center'>
         <p className='text-xl'>Contact Us</p>
          <ul className='flex flex-col gap-5 text-white/70 mt-5 text-sm'>
            <li>📍 Address: [Your Company Address]</li>
            <li>📞 Phone: +212 XXX XXX XXX</li>
            <li>📧 Email: info@[companyname].com</li>
            <li>🕒 Hours: Mon – Sat | 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer