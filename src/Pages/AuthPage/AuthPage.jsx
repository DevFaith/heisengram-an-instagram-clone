import React from 'react'
import AuthImage from '../../assets/images/auth.png'
import AuthForm from '../../components/AuthForm/AuthForm'
import PlayStore from '../../assets/images/playstore.png';
import MicroSoft from '../../assets/images/microsoft.png'

const AuthPage = () => {
  return (
    <div className='mx-auto max-w-7xl my-20'>
      <div className='flex align-center min-h-screen h-fit gap-4 justify-center px-2'>
        <img src={AuthImage} alt="Instagram Phone Image" className='hidden md:flex' />
        <div className='md:mt-[100px] w-fit h-fit'>
          <AuthForm />
          <p className='mt-4 mb-2 text-center'>Get The App</p>
          <div className='flex justify-center'>
            <img src={PlayStore} className='h-10' alt="PlayStore Logo" />
            <img src={MicroSoft} className='h-10 ml-4' alt="Microsoft Logo" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage