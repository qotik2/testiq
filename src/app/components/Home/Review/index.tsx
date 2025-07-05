import Image from 'next/image'

const Review = () => {
  return (
    <section id='review'>
      <div className='container'>
        <div className='relative'>
          <div>
            <h2 className='text-navyblue text-center max-w-2xl mx-auto'>
              Отзывы о y100k club
            </h2>
            <p className='text-lg font-normal text-darkgray text-center mt-4'>
              Профессиональный подход к каждому клиенту.{' '}
              <br /> Уникальные услуги, уникальные результаты.
            </p>
          </div>
          <div>
            <Image
              src={'/images/clientsay/avatars.png'}
              alt='avatar-image'
              width={1061}
              height={733}
              className='hidden lg:block mx-20'
            />
          </div>
          <div className='lg:absolute lg:top-[45%] xl:left-[50%] lg:left-[45%]'>
            <Image
              src={'/images/clientsay/user.png'}
              alt='user-image'
              width={168}
              height={168}
              className='mx-auto pt-10 lg:pb-10'
            />
            <div className='lg:inline-block bg-white rounded-2xl p-5 shadow-md'>
              <p className='text-base font-normal text-center text-darkgray'>
                &quot;ВЫ ЧЕ ВАЩЕ ДОЛБОЕБЫ НАХУЙ???!&quot;
              </p>
              <p className='text-2xl font-medium text-center py-2'>
                Артур Ян Топлес
              </p>
              <p className='text-sm font-normal text-center'>Постоянный клиент</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
