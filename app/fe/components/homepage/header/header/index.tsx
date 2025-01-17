'use client'

import { imgApp } from '@/constant/img';
import Image from 'next/image';
import React, { useState} from 'react'
import HeaderLeft from  './headerLeft'
import HeaderRight from './headerRight'
import HeaderMid from './headerMid'
import Link from 'next/link';


const Header = () => {
  const [language, setLanguage] = useState('vi'); // 'vi' for Vietnamese, 'en' for English

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'vi' ? 'en' : 'vi'));
  };
  return (
    <div>
      <div className='w-screen bg-black h-[18px] '>
        <div className='flex flex-row justify-end mr-[120px]'>
        <Link href='../../../authenticationPage/login'>
          <button 
            className='boder-none text-align-center text-[13px] flex space-x-px '>
              {language === 'vi' ? 'Đăng nhập' : 'Login'}
          </button>
        </Link>
          <span className='mx-2 text-align-center text-[13px]'>|</span>
          <button 
            className='boder-none text-align-center text-[13px] flex space-x-px mr-[15px]'>
              {language === 'vi' ? 'Đăng ký' : 'Register'}
          </button>
          <button 
            className='boder-none flex space-x-px flex'
            onClick={toggleLanguage}>
            <Image
              className='w-[20px] h-[13px] flex justify-center items-center mt-0.5'
              src={language === 'vi' ? imgApp.vieLang : imgApp.engLang} 
              alt=''/>
          </button>
        </div>
      </div>
      <div className='flex flex-row shadow-md'>
        <div className='flex justify-end flex-0.5'>
          <HeaderLeft />
        </div>
        <div className='flex'>
          <HeaderMid />
        </div>
        <div className='flex flex-1'>
          <HeaderRight />
        </div>
      </div>
    </div>
  )
}

export default Header
