import React from 'react'
import Button from './Button'
import FadeInSection from './FadeInSection'

type HeroImageProps = {
  src: string
  title: string
  Subheadline: string
  description: string
}

const HeroImage = ({ src, title, Subheadline, description }: HeroImageProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className="relative w-full h-full bg-center bg-cover"
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute left-0 inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-primary-900/50 to-transparent z-10"></div>
      <div className="absolute left-0 w-full inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/30 z-10"></div>
      <div className="container relative z-20 h-full p-4 text-white max-w-2xl">
        <div className='flex flex-col justify-center gap-4 h-full sm:w-2/5'>
          <FadeInSection>
            <p className="text-[8px] sm:text-sm text-secondary-200 border border-secondary-200 px-3 py-2 rounded-full w-max" data-swiper-parallax="-400">{Subheadline}</p>
          </FadeInSection>
          <FadeInSection>

            <h1 className="text-5xl leading-16 font-semibold" data-swiper-parallax="-300">{title}</h1>
          </FadeInSection>
          <FadeInSection>

            <p className='font-neuton text-lg w-4/5' data-swiper-parallax="-200">{description}</p>
          </FadeInSection>
          <FadeInSection>

            <div className="flex gap-5 items-center">
              <Button label="Learn More" iconURL="true" bgcol="bg-primary-400" textcol="text-white" />
              <Button label="Contact Us" iconURL="true" textcol="text-secondary-200" borcol="border-secondary-200" />
            </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  )
}

export default HeroImage
