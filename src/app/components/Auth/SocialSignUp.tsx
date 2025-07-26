import React from 'react'

const SocialSignUp = () => {
  return (
    <>
      <div className='flex gap-4'>
        <a
          href='https://t.me/structura_place'
          target='_blank'
          rel='noopener noreferrer'
          className='flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 border border-black/10 text-black hover:bg-black/5 hover:cursor-pointer'
        >
          Sign Up
          <img src='/images/stuctura.svg' alt='Structura' width={32} height={32} className='rounded-full' style={{display: 'inline-block'}} />
        </a>

        <a
          href='https://sanrio.my/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 border border-black/10 text-black hover:bg-black/5 hover:cursor-pointer'
        >
          Sign Up
          <img src='/images/icon.png' alt='Sanrio' width={22} height={22} />
        </a>
      </div>
    </>
  )
}

export default SocialSignUp
