import Image from 'next/image'
import React from 'react'

const SolutionCard = () => {
  return (
    <div className='relative bg-primary-400 w-80 rounded-2xl '>
      <Image src='/images/image5.jpeg' alt="image" width={500} height={600} className='rounded-2xl'/>
      <div className='absolute bottom-0 h-5/6 w-full bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl'></div>
      <div className='absolute bottom-10 px-4'>
        <h1 className='text-white text-3xl font-semibold'>Farm Planning & Consultancy</h1>
        <p className='text-white/60'>Personalized guidance to plan your farm operations and boost efficiency.</p>
      </div>
      </div>
  )
}

export default SolutionCard