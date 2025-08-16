import Image from 'next/image'
import React from 'react'

type solutionCard = {
  title: string
  description: string
  image: string
}

const SolutionCard = ({ title, description, image }: solutionCard) => {
  return (
    <div className='group relative w-full rounded-2xl shadow-2xl transition-all overflow-hidden '>
      <Image src={image} alt="image" width={500} height={600} className='rounded-2xl h-[500px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out ' />
      <div className='absolute bottom-0 h-5/6 w-full bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl'></div>
      <div className='absolute bottom-20 px-4 group-hover:bottom-10 transition-discrete duration-500 ease-in-out' >
        <h1 className='text-white text-3xl font-semibold group-hover:text-secondary-200 transition-transform duration-500 ease-in-out'>{title}</h1>
        <p className='text-white/60 mt-5'>{description}</p>
      </div>
    </div>
  )
}

export default SolutionCard