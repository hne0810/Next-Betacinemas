import { imgApp } from '@/constant/img'
import Image from 'next/image'
import React from 'react'
import { RightOutlined } from '@ant-design/icons'


const Footer = () => {
  return (
    <div className='text-slate-800 flex flex-row w-screen bg-slate-100 '>
      <div className='flex flex-1 justify-end pl-[30px]'>
        <div>
          <Image 
          alt =''
          src={imgApp.logo}
          className='w-[140px] h-[90px] my-[5px] mb-[3px]' />
          <ul>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Giới thiệu</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Tuyển dụng</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Liên hệ</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>F.A.Q</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Hoạt động xã hội</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Điều khoản sử dụng</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li className='inline'>Chính sách thanh toán, đổi 
                trả - hoàn vé</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Liên hệ quảng cáo</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Điều khoản bảo mật</li>
            </div>
            <div className='flex flex-row'>
              <button className='mx-[3px] '>
                <RightOutlined className='w-[10px] h-[10px]'/>
              </button>
              <li>Hướng dẫ đặt vé online</li>
            </div>
          </ul>
        </div>
      </div>
      <div className='flex-1'>2</div>
      <div className='flex-1'>3</div>
      <div className='flex-1'>4</div>
    </div>
  )
}

export default Footer
