import React from 'react'
import Header from './header/header';

interface HeaderProps {
  popup: React.ReactNode;
}

const HomePage: React.FC<HeaderProps> = ({popup}) => {
  return (
    <div className='bg-white h-screen'>
    <div>
        <Header />
    </div>
        <div className='flex  flex:1   justify-center'>
            {popup}
        </div>
    </div>
  )
}

export default HomePage
