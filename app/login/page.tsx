import React from 'react';
import HomePage from '../pages/homepage';
import Link from 'next/link';
import NumberCaptcha from '@/components/capcha';

const LoginPage = () => {
  return (
    <HomePage>
    <div className='flex items-center justify-center text-slate-800 mt-[20px] mb-[20px] '>
      <div className=''>
        <div className="mb-20[px]">
          <button className='bg-blue-500 w-[265px] h-[40px]'>
            Đăng nhập
          </button>
          <button className='w-[265px] h-[40px] text-align-center bg-blue-500'>
            Đăng kí
          </button>
        </div>
        <div className='w-[530px] h-[418.57px] mt-26[px] justify-center items-center pt-[20px] mb-[10px]'>
          <label className='block'>Email</label>
          <input type='email' id='email' placeholder='Email' className=' block border-2 border-solid rounded-lg border-slate-800 w-[530px] h-[57.6px]'/>
          <label className='block'>Password</label>
          <input type='password' id='password' placeholder='Password' className='block border-2 border-solid rounded-lg border-slate-800 w-[530px] h-[57.6px]'/>
          <Link 
            href=''
            className='block mt-[20px] text-colorLink hover:underline '>
              Quên mật khẩu  
          </Link>
          <NumberCaptcha />
        </div>
      </div>
    </div>
    </HomePage>
  );
}

export default LoginPage;
