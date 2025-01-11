import React from 'react'
import Header from './header/header';
import Footer from './footer';

interface HeaderProps {
  popup: React.ReactNode;
}

const HomePage: React.FC<HeaderProps> = ({popup}) => {
  return (
    <div className='bg-white h-screen'>
    <div>
        <Header />
    </div>
        <div className='flex justify-center'>
            {popup}
        </div>
    <div className='flex mt-[10px] flex-1 w-screen'>
      <Footer />
    </div>
    </div>
  )
}

export default HomePage
