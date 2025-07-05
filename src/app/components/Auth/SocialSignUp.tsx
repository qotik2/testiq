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
          href='https://github.com/ilyaqznetsow/awesome-telegram-gifts?tab=readme-ov-file'
          target='_blank'
          rel='noopener noreferrer'
          className='flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 border border-black/10 text-black hover:bg-black/5 hover:cursor-pointer'
        >
          Sign Up
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.9997 1.83331C5.93773 1.83331 1.83301 6.04119 1.83301 11.232C1.83301 15.3847 4.45954 18.9077 8.10178 20.1505C8.55988 20.2375 8.72811 19.9466 8.72811 19.6983C8.72811 19.4743 8.71956 18.7338 8.71567 17.9485C6.16541 18.517 5.6273 16.8395 5.6273 16.8395C5.21032 15.7532 4.60951 15.4644 4.60951 15.4644C3.77785 14.8811 4.6722 14.893 4.6722 14.893C5.59272 14.9593 6.07742 15.8615 6.07742 15.8615C6.89499 17.2984 8.22184 16.883 8.74493 16.6429C8.82718 16.0353 9.06478 15.6208 9.32694 15.3861C7.2909 15.1484 5.15051 14.3425 5.15051 10.7412C5.15051 9.71509 5.5086 8.87661 6.09503 8.21844C5.99984 7.98167 5.68611 7.02577 6.18382 5.73115C6.18382 5.73115 6.95358 5.47855 8.70532 6.69458C9.43648 6.48627 10.2207 6.3819 10.9997 6.37836C11.7787 6.3819 12.5635 6.48627 13.2961 6.69458C15.0457 5.47855 15.8145 5.73115 15.8145 5.73115C16.3134 7.02577 15.9995 7.98167 15.9043 8.21844C16.4921 8.87661 16.8477 9.715 16.8477 10.7412C16.8477 14.351 14.7033 15.146 12.662 15.3786C12.9909 15.6702 13.2838 16.2423 13.2838 17.1191C13.2838 18.3766 13.2732 19.3888 13.2732 19.6983C13.2732 19.9485 13.4382 20.2415 13.9028 20.1492C17.5431 18.905 20.1663 15.3833 20.1663 11.232C20.1663 6.04119 16.0621 1.83331 10.9997 1.83331Z'
              fill='currentColor'
            />
          </svg>
        </a>
      </div>
    </>
  )
}

export default SocialSignUp
