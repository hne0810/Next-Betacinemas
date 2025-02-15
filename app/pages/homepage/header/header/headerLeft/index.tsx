import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { imgApp } from '../../../../../../constant/img';

const HeaderLeft = () => {
  return (
    <>
    <Link href='/'>
      <Image
        src={imgApp.logo}
        alt=''
        className='w-[140px] h-[90px]' />
    </Link>
    </>
  )
}

export default HeaderLeft
