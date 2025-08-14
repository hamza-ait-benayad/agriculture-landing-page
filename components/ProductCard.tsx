import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='bg-primary-400 max-w-lg p-4 rounded-2xl shadow-md'>
      <Image src='/images/image1.jpg' alt='card image' width={500} height={300} className='w-full  rounded-2xl shadow-2xl ' />
      <div className='text-white flex flex-col gap-2 p-2 mt-3'>
        <p className='text-sm text-secondary-200 border border-secondary-200 px-3 py-1 rounded-full w-max'>Consultancy</p>
        <h1 className='text-3xl font-bold leading-15'>Farm Planning</h1>
        <hr className=' text-white/60' />
        <p className=' font-neuton text-lg'>Personalized guidance to plan your farm operations and boost efficiency.</p>
      </div>
    </div>
  )
}

export default ProductCard  