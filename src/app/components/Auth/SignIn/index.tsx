'use client'
import Link from 'next/link'
import SocialSignIn from '../SocialSignIn'
import { useState } from 'react'
import Image from 'next/image'

const Signin = () => {
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowCongrats(true);
  };

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block'>
        <Image
          src={'/images/logo/net.gif'}
          alt='dsign-logo'
          width={120}
          height={35}
        />
      </div>

      <SocialSignIn />

      <span className='z-1 relative my-8 block text-center  before:absolute before:h-px before:w-[40%] before:bg-black/20 before:left-0 before:top-3  after:absolute after:h-px after:w-[40%] after:bg-black/20 after:top-3 after:right-0'>
        <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-black'>
          ИЛИ
        </span>
      </span>

      {showCongrats && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Регистрация откроется при достижении курса $PX в $1</h2>
            <button onClick={() => setShowCongrats(false)} className="mt-4 px-4 py-2 bg-primary text-white rounded">Пон, никогда</button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Электронная почта'
            
            className='w-full rounded-md border border-solid border-black/10 bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Пароль'
            
            className='w-full rounded-md border border-solid border-black/10 bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-9'>
          <button
            
            type='submit'
            className='bg-primary w-full py-3 rounded-lg text-18 font-medium border text-white border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer transition duration-300 ease-in-out'>
            Войти
          </button>
        </div>
      </form>

      <Link
        href='https://t.me/the_club_100/13550'
        target='_blank'
        rel='noopener noreferrer'
        className='mb-2 inline-block text-base text-black hover:text-primary  hover:underline'>
        Забудь свой пароль.
      </Link>
    </>
  )
}

export default Signin
