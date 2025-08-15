import Image from 'next/image'
import React from 'react'

type productType = {
  category: string
  title: string
  image: string
  description: string
}

const ProductCard = ({category, title, image, description}: productType) => {
  return (
    <div className='bg-primary-600 max-w-lg p-4 rounded-2xl shadow-md h-[500px] flex flex-col gap-5'>
      <Image src={image} alt='card image' width={500} height={500} className='w-full h-[250px] rounded-2xl shadow-sm object-cover' />
      <div className='text-white flex flex-col gap-4 p-2 mt-3'>
        <p className='text-sm text-secondary-200 border border-secondary-200 px-3 py-1 rounded-full w-max'>{category}</p>
        <h1 className='text-3xl font-bold leading-10'>{title}</h1>
        <hr className=' text-white/20' />
        <p className=' font-neuton text-lg'>{description}</p>
      </div>
    </div>
  )
}

export default ProductCard  