import React from 'react'
import {siteContent} from '../data/content'
import Image from 'next/image'
import FadeInSection from './FadeInSection'

const Baner = () => {
  return (
    <div className='bg-[url(/images/baner.png)] w-full h-[650px] sm:h-[300px] px-4 py-8'>
      <FadeInSection>
      <div className='container flex flex-col justify-between items-center gap-8 sm:flex-row w-full h-full'>
        <div className='flex flex-col gap-4'>
          <p className='border border-primary-400 rounded-full px-2 py-1 text-sm text-primary-900 w-max'>mosts statistics</p>
          <div className='flex sm:flex-row flex-col gap-4 sm:gap-8'>
            {siteContent.statistics.map((status, key) => (
              <div className='' key={key}>
                <p className='text-5xl font-bold font-palanquin'>{status.value}</p>
                <p className='leading-7 text-sm text-black/50'>
                  {status.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center relative gap-5 px-8 w-[500px]'>
          {/* <p className='sm:absolute sm:-right-24 right-24 text-primary-400/80 border border-black/50 rounded-full px-2 sm text-2xl font-semibold font-palanquin rotate-0 sm:rotate-90 w-max text-center'>Natural Products</p> */}
           <p className='text-3xl font-semibold'>Natural Products</p>
          <Image src='/images/image4.jpg' alt='baner image' width={500} height={300} className='max-w-80 rounded-2xl shadow-2xl' />
        </div>
      </div>
      </FadeInSection>
    </div>
  )
}

export default Baner