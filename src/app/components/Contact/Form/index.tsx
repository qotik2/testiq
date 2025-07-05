'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    service: '',
    budget: '',
    Message: '',
  })
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const reset = () => {
    formData.fullname = ''
    formData.email = ''
    formData.service = ''
    formData.budget = ''
    formData.Message = ''
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoader(true)

    fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        FullName: formData.fullname,
        Email: formData.email,
        Service: formData.service,
        Budget: formData.budget,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setShowThanks(true)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }

        reset()
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }
  return (
    <section id='contact' className='scroll-mt-24 pt-0'>
      <div className='container'>
        <h2 className='mb-9 text-navyblue text-center flex items-center justify-center gap-2'>
          Не связывайтесь с нами
          <img src="/images/zombie.gif" alt="zombie" className="inline-block w-20 h-20 align-middle" />
        </h2>
        <div className='relative border border-navyblue/10 px-6 py-2 rounded-2xl'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-wrap w-full m-auto justify-between'>
            <div className='sm:flex gap-6 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='fname' className='pb-3 inline-block text-base'>
                  Полное имя
                </label>
                <input
                  id='fname'
                  type='text'
                  name='fullname'
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder='Паштет Вормов'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='email' className='pb-3 inline-block text-base'>
                  Электронная почта
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='eblo.utinoe@example.com'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
            </div>
            <div className='sm:flex gap-6 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='email' className='pb-3 inline-block text-base'>
                  Выберите услугу
                </label>
                <select
                  name='service'
                  id='service'
                  value={formData.service}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0'>
                  <option value=''>Выберите услугу</option>
                  <option value='Фад подарков'>Пугание по чатам</option>
                  <option value='Препарация жаб'>Макет-мейкинг жабки</option>
                  <option value='Кулачные бои'>Кулачные бои</option>
                  <option value='Специализация'>ЗАТКНИСЬ</option>
                </select>
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='email' className='pb-3 inline-block text-base'>
                  Выберите деньги скок у вас
                </label>
                <select
                  name='budget'
                  id='budget'
                  value={formData.budget}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0'>
                  <option value=''>Скок деняк</option>
                  <option value='$1 - $5 (я нищая блядота)'>$1 - $5 (я нищая блядота)</option>
                  <option value='$100 - $500 (я крутой хайбанк)'>$100 - $500 (я крутой хайбанк)</option>
                  <option value='$1000 - $10k (такова не бываит) '>$4500 - $6000 (такова не бываит)</option>  
                  <option value='$10k - ∞ (пиздабол крч)'>$10k - ∞&lt; (пиздабол крч)</option>
                </select>
              </div>
            </div>
            <div className='sm:flex gap-3 w-full'></div>
            <div className='w-full mx-0 my-2.5 flex-1'>
              <label htmlFor='message' className='text-base inline-block'>
                Сообщение
              </label>
              <textarea
                id='message'
                name='Message'
                value={formData.Message}
                onChange={handleChange}
                className='w-full mt-2 rounded-2xl px-5 py-3 border-solid border border-black/20 transition-all duration-500 focus:border-primary focus:outline-0'
                placeholder='Я обязательно прочитаю, верь в это'></textarea>
            </div>
            <div className='mx-0 my-2.5 w-full'>
              <button
                type='submit'
                disabled={!isFormValid || loader}
                className={`border leading-none px-6 text-lg font-medium py-4 rounded-full 
                    ${
                      !isFormValid || loader
                        ? 'bg-primary/15 text-beach cursor-not-allowed'
                        : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                    }`}>
                Отправить
              </button>
            </div>
          </form>
          {showThanks && (
            <div className='text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-3 absolute flex items-center gap-2'>
              Форма отправлена. Ты молодец, ты умничка! Твои родители будут тобой гордиться!  
              <div className='w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent'></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
