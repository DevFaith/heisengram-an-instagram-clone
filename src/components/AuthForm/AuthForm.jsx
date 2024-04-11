import React, { useState } from 'react'
import InstLogo from '../../assets/images/logo.png'
import GoogleLogo from '../../assets/images/google.png'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);





  return (
    <div>
      <div className='border border-solid rounded-md border-gray-700 p-2 mb-5'>
        <img src={InstLogo} alt="Instagram Logo" className='h-14 block cursor-pointer mx-auto' />
        <input type="email" placeholder='Email' className='block mx-auto bg-transparent mb-2 outline-none border border-gray-700 text-sm rounded pl-3 h-10 w-72 focus:border-blue-400 duration-200'/>
        <input type="password" placeholder='Password' className='block mx-auto bg-transparent mb-2 outline-none border border-gray-700 text-sm rounded pl-3 h-10 w-72 focus:border-blue-400 duration-200'/>
        {!isLogin && (
          <input type="password" placeholder='Confirm Password' className='block mx-auto bg-transparent mb-2 outline-none border border-gray-700 text-sm rounded pl-3 h-10 w-72 focus:border-blue-400 duration-200'/>
        )}
        <button className='block mx-auto bg-blue-400 mb-2 h-10 w-72 rounded text-slate-950 cursor-pointer hover:opacity-60 duration-200' >
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
        <div className='flex justify-center my-4'>
          <hr className='bg-gray-700 h-[1px] border-none w-28 mt-3' />
          <p className='px-2'>OR</p>
          <hr className='bg-gray-700 h-[1px] border-none w-28 mt-3' />
        </div>
        <div className='flex cursor-pointer justify-center border border-gray-700 py-2 rounded gap-6 hover:text-blue-400 group duration-200'>
          <img src={GoogleLogo} alt="Google Logo" className='h-6' />
          <p className='text-blue-300 group-hover:scale-105 duration-200 text-sm mt-[1px]'>Log In with Google</p>
        </div>
      </div>
      <div className='border flex justify-center gap-2 border-solid rounded-md border-gray-700 p-2'>
        <div className='text-sm'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </div>
        <div className='text-sm text-blue-400 cursor-pointer' onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Log In'}
        </div>
      </div>
    </div>
  )
}

export default AuthForm