'use client'
import Link from 'next/link'
import SocialSignUp from '../SocialSignUp'
import { useState } from 'react'
import Image from 'next/image'

const SignUp = () => {  
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь может быть логика регистрации
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

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-[40%] before:bg-black/20 before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-[40%] after:bg-black/20 after:bg-opacity-60 after:top-3 after:right-0">
        <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-black'>
          ИЛИ
        </span>
      </span>

      {showCongrats && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Сосал?</h2>
            <button onClick={() => setShowCongrats(false)} className="mt-4 px-4 py-2 bg-primary text-white rounded">Да</button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='mb-[22px]'>
          <input
            type='text'
            placeholder='Имя'
            name='name'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-black/10 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Электронная почта'
            name='email'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-black/10 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Пароль'
            name='password'
            required
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-black/10 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='flex w-full items-center text-18 font-medium text-white justify-center rounded-md bg-primary px-5 py-3 text-darkmode transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border'>
            Зарегистрироваться
          </button>
        </div>
      </form>

      <p className='text-body-secondary mb-4 text-black/60 text-base'>
        Создавая аккаунт, вы соглашаетесь с нашими{' '}
        <Link href='https://t.me/structura_place/44' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>
          NAZ4D
        </Link>{' '}
        D0ROгN{' '}
        <Link href='https://t.me/structura_place/42' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>
          Net
        </Link>
      </p>

      <p className='text-body-secondary text-black/60 text-base'>
        Уже есть аккаунт?
        <Link href='https://getgems.io/collection/EQAP3fx7di0TS13nQcPGjcMnNpj0SUvdL9o7nCIN0Fb2ksnS' target='_blank' rel='noopener noreferrer' className='pl-2 text-primary hover:underline'>
          Войти
        </Link>
      </p>
    </>
  )
}

export default SignUp
