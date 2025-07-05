import Image from 'next/image'

const Newsletter = () => {
  return (
    <section>
      <div className='relative z-1'>
        <div className='container bg-primary rounded-2xl'>
          <div className='grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8'>
            {/* COLUMN-1 */}
            <div className='hidden lg:block'>
              <div className='flex justify-center pt-20 relative'>
                <Image
                  src={'/images/newsletter/gifka.gif'}
                  alt='newsletter-gif'
                  width={382}
                  height={217}
                  className='rounded-2xl'
                />
                {/* leaf.svg и circel.svg удалены */}
              </div>
            </div>

            {/* COLUMN-2 */}
            <div className='p-10 flex flex-col justify-center'>
              <h3 className='mb-3 text-white'>
                Подпишитесь на нашу рассылку.
              </h3>
              <p className='text-base font-normal mb-7 text-offwhite'>
                Умоляю, подпишитесь на нашу рассылку, у меня будут неприятности если не получится набрать план.
                Я бедный студент из Индии, я вас умоляю у меня семья, моей дочери 5 лет, меня держат плохие люди.
              </p>
              <div className='flex gap-0'>
                <input
                  type='Email address'
                  name='q'
                  className='py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4'
                  placeholder='@введите email-адрес'
                  autoComplete='off'
                />
                <button className='bg-midblue text-white font-medium py-2 px-4 rounded-r-lg'>
                  <Image
                    src={'/images/newsletter/plane.svg'}
                    alt='plane-img'
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
