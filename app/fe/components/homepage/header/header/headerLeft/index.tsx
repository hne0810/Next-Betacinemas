import Image from 'next/image'
import React from 'react'
import { imgApp } from '../../../../../../../constant/img'

const HeaderLeft = () => {
  return (
    <>
      <Image
        src={imgApp.logo}
        alt=''
        className='w-[140px] h-[90px]' />
    </>
  )
}

export default HeaderLeft
