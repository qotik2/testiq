import Image from 'next/image'

const Review = () => {
  return (
    <section id='review'>
      <div className='container'>
        <div className='relative flex flex-col items-center'>
          <div>
            <h2 className='text-navyblue text-center max-w-2xl mx-auto'>
              Отзывы о y100k club
            </h2>
            <p className='text-lg font-normal text-darkgray text-center mt-4'>
              Все наши довольные клиенты.{' '}
              <br /> Услуги обнуления, дрейна и унижения человеческого достоинства.
            </p>
          </div>
          <div>
            <Image
              src={'/images/clientsay/avatars.png'}
              alt='avatar-image'
              width={1061}
              height={733}
              className='w-full max-w-4xl mx-auto aspect-[1061/733] object-contain max-h-[500px] lg:max-h-[700px]'
              priority
            />
          </div>
          <div className='flex flex-col items-center w-full -mt-40 ml-5 lg:-mt-80 lg:ml-90'>
            <Image
              src={'/images/clientsay/user.png'}
              alt='user-image'
              width={168}
              height={168}
              className='mx-auto pt-10 lg:pb-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain rounded-full'
            />
            <div className='flex flex-col items-center w-full'>
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
      </div>
    </section>
  )
}

export default Review
