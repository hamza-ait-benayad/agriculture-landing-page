import React from 'react'

type buttonProps = {
  label: string
  iconURL?: string
  bgcol?: string
  textcol?: string
  borcol?: string
}

const Button = ({ label, iconURL, bgcol, textcol, borcol }: buttonProps) => {
  return (
    <button className={` ${bgcol ? bgcol : "bg-transparent"}   ${borcol && `border-2 ${borcol}`}   hover:border-white hover:text-white ${textcol ? textcol : "text-secondary-200"} rounded-full transition-all leading-none flex px-3 sm:px-6 py-3 justify-center items-center gap-2 hover:opacity-80 cursor-pointer self-start`}>
      {label}
      {iconURL &&
        <img src="./icons/arrow.png" alt="" className='w-4 h-4' />}
    </button>
  )
}

export default Button