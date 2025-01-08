import React from 'react'
import HeaderLeft from  './headerLeft'
// import HeaderRight from './headerRight'

interface HeaderProps {
  popup: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ popup }) => {
  return (
    <div>
      <HeaderLeft />
      {popup}
    </div>
  )
}

export default Header
