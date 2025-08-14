import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-primary-900 '>
      <div className='container py-20 flex flex-col-reverse sm:flex-row gap-20'>
        <div className='flex flex-col gap-4 w-full sm:w-3/6 text-white '>
          <Image src='/images/image5.jpeg' alt='image' width={500} height={700} className='rounded-2xl w-full' />
          <div className='mt-20 flex flex-col gap-20 items-center justify-start'>

            <p className='text-white/60'>At [Your Company Name], we believe that farming is more than just a business — it’s a way of life. That’s why we provide products, services, and support designed specifically to help small and medium farmers succeed in today’s challenging agricultural landscape. From your first seed to your biggest harvest, we’re with you every step of the way.</p>

            <Button label="Contact Us" iconURL="true" textcol="text-secondary-200" borcol="border-secondary-200" />

          </div>
        </div>
        <div className='flex flex-col gap-4 sm:w-3/6 text-white  '>
          <p className='text-lg text-secondary-200 border border-secondary-200 px-3 py-5 rounded-full w-max font-semibold leading-0 '>About Us</p>
          <h1 className='text-5xl font-bold mt-8'>We Grow with You</h1>
          <div className='flex flex-col gap-5 mt-10'>
            <div>
              <h2 className='text-xl font-semibold'>Designed for Small & Medium Farmers</h2>
              <p className='text-white/60'>Our solutions are tailored to the unique needs of smaller farms, ensuring you get the right tools without</p>
            </div>
            <div>
              <h2 className='text-xl font-semibold'>Designed for Small & Medium Farmers</h2>
              <p className='text-white/60'>Our solutions are tailored to the unique needs of smaller farms, ensuring you get the right tools without</p>
            </div>
            <div>
              <h2 className='text-xl font-semibold'>Designed for Small & Medium Farmers</h2>
              <p className='text-white/60'>Our solutions are tailored to the unique needs of smaller farms, ensuring you get the right tools without</p>
            </div>

          </div>
          <Image src='/images/image7.jpeg' alt='image' width={500} height={700} className='rounded-2xl w-full mt-10' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs