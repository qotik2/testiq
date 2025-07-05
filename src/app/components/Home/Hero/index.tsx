import Link from 'next/link'

const Hero = () => {
  return (
    <section>
      <div className='container lg:pt-36 md:pt-32 pt-24'>
        <div className='relative'>
          <div className='flex flex-col gap-5'>
            <h1 className='lg:mx-auto lg:max-w-[70%] text-center text-navyblue'>
              y100k club
            </h1>
            <p className='lg:mx-auto lg:max-w-[70%] text-center text-bluegray text-lg md:leading-8 leading-7'>
              Профессиональное пугание по чатам, маркет-мейкинг жаб, организация кулачных боёв.
              <br />
              <span className="text-sm">test</span>
            </p>
            <div className='flex items-center justify-center gap-5'>
              <Link href={'/#portfolio'}>
                <button
                  type='button'
                  className='font-medium text-white bg-primary hover:text-primary hover:bg-lightblue py-3 px-9 leafbutton transition duration-300 ease-in-out hover:cursor-pointer'>
                  Наши успехи
                </button>
              </Link>
              <Link href={'/#service'}>
                <button
                  type='button'
                  className='font-medium text-primary bg-lightblue hover:text-white hover:bg-primary py-3 px-9  leafbutton transition duration-300 ease-in-out hover:cursor-pointer'>
                  Услуги
                </button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className='pt-20 flex justify-center'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/banner/dep.gif'
              alt='banner-gif'
              width={450}
              height={224}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          {/* Разные животные-эмодзи */}
          <span className="hidden md:block absolute left-10 top-0 text-5xl select-none" style={{opacity: 0.7}}>🐶</span>
          <span className="hidden md:block absolute right-20 top-10 text-4xl select-none" style={{opacity: 0.7}}>🐱</span>
          <span className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-16 text-6xl select-none" style={{opacity: 0.5}}>🦊</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
