'use client';

import React, { ReactNode } from 'react'
import Header from './header/header';
import Footer from './footer';

// interface HeaderProps {
//   popup: React.ReactNode;
// }

const HomePage = ({ children}: {children:ReactNode}) => {
  return (
    <div className='bg-white h-screen'>
    <div>
        <Header />
    </div>
    {/* <div className='flex justify-center'>
        {popup}
    </div> */}
    <main>
    {children}  
    </main>
    <div className='flex mt-[10px] flex-1 w-screen'>
      <Footer />
    </div>
    </div>
  )
}

export default HomePage
